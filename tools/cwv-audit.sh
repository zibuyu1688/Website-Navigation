#!/usr/bin/env bash
set -euo pipefail

ROOT_DIR="$(cd "$(dirname "$0")/.." && pwd)"
REPORT_DIR="$ROOT_DIR/reports"
mkdir -p "$REPORT_DIR"

PORT="4173"
INDEX_JSON="$REPORT_DIR/lighthouse-index.json"
EN_JSON="$REPORT_DIR/lighthouse-en.json"
SUMMARY_MD="$REPORT_DIR/core-web-vitals-report.md"

cd "$ROOT_DIR"
python3 -m http.server "$PORT" >/tmp/ai365-http.log 2>&1 &
SERVER_PID=$!

cleanup() {
  kill "$SERVER_PID" >/dev/null 2>&1 || true
}
trap cleanup EXIT

npx -y lighthouse "http://127.0.0.1:${PORT}/index.html" \
  --quiet \
  --chrome-flags="--headless=new --no-sandbox" \
  --output=json \
  --output-path="$INDEX_JSON"

npx -y lighthouse "http://127.0.0.1:${PORT}/en.html" \
  --quiet \
  --chrome-flags="--headless=new --no-sandbox" \
  --output=json \
  --output-path="$EN_JSON"

node <<'EOF' > "$SUMMARY_MD"
const fs = require('fs');
const path = require('path');

const root = process.cwd();
const reportDir = path.join(root, 'reports');
const files = [
  { name: 'index.html', file: path.join(reportDir, 'lighthouse-index.json') },
  { name: 'en.html', file: path.join(reportDir, 'lighthouse-en.json') }
];

function score(v) {
  return Math.round((v || 0) * 100);
}

function metric(audits, key) {
  const item = audits[key];
  if (!item) return 'N/A';
  if (item.displayValue) return item.displayValue;
  if (typeof item.numericValue === 'number') return String(Math.round(item.numericValue));
  return 'N/A';
}

let out = '# Core Web Vitals Audit Report\n\n';
out += `Generated: ${new Date().toISOString()}\n\n`;

for (const f of files) {
  const data = JSON.parse(fs.readFileSync(f.file, 'utf8'));
  const c = data.categories;
  const a = data.audits;
  out += `## ${f.name}\n`;
  out += `- Performance: ${score(c.performance.score)}\n`;
  out += `- Accessibility: ${score(c.accessibility.score)}\n`;
  out += `- Best Practices: ${score(c['best-practices'].score)}\n`;
  out += `- SEO: ${score(c.seo.score)}\n`;
  out += `- FCP: ${metric(a, 'first-contentful-paint')}\n`;
  out += `- LCP: ${metric(a, 'largest-contentful-paint')}\n`;
  out += `- Speed Index: ${metric(a, 'speed-index')}\n`;
  out += `- TBT: ${metric(a, 'total-blocking-time')}\n`;
  out += `- CLS: ${metric(a, 'cumulative-layout-shift')}\n\n`;
}

out += '## Compression Strategy\n';
out += '- Use Brotli/Gzip at edge (Vercel handles automatically).\n';
out += '- Keep long-cache immutable headers for static JS/CSS/assets.\n';
out += '- Reduce inline CSS in HTML and move to external CSS to improve TTFB/LCP caching reuse.\n';
out += '- Defer non-critical scripts and avoid duplicate DOMContentLoaded handlers where possible.\n';

process.stdout.write(out);
EOF

echo "CWV audit complete: $SUMMARY_MD"
