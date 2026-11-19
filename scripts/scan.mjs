// 公開前の機密スキャン。ヒットしたら終了コード1で失敗させる。
// 対象: ソース一式 と ビルド成果物(dist)。
// 固有名詞(案件名・個人名・アカウントIDなど)の拒否リストは、公開リポジトリに入れない。
//   - ローカル: scan-denylist.txt(.gitignore済み)
//   - Actions : リポジトリSecret SCAN_DENYLIST(1行1パターン)
import { readdirSync, readFileSync, statSync, existsSync } from 'node:fs';
import { join, relative } from 'node:path';

const root = process.cwd();
const skipDirs = new Set(['node_modules', '.git', '.astro']);
const skipFiles = new Set(['package-lock.json', 'scan.mjs']);
const binaryExt = /\.(png|jpe?g|gif|webp|avif|ico|woff2?|ttf|pdf|zip)$/i;

const generic = [
  { name: 'AWSアクセスキー', re: /\b(AKIA|ASIA)[A-Z0-9]{16}\b/ },
  { name: '秘密鍵', re: /-----BEGIN [A-Z ]*PRIVATE KEY-----/ },
  { name: 'GitHubトークン', re: /\b(ghp|gho|ghs|ghu|github_pat)_[A-Za-z0-9_]{20,}\b/ },
  { name: '12桁の数字(AWSアカウントIDの可能性)', re: /(?<![\d.])\d{12}(?![\d.])/ },
  {
    name: 'メールアドレス(noreply以外)',
    re: /\b[A-Za-z0-9._%+-]+@(?!users\.noreply\.github\.com\b)[A-Za-z0-9.-]+\.[A-Za-z]{2,}\b/,
  },
];

const custom = [];
const rawDenylist =
  process.env.SCAN_DENYLIST ??
  (existsSync('scan-denylist.txt') ? readFileSync('scan-denylist.txt', 'utf8') : '');
for (const line of rawDenylist.split(/\r?\n/)) {
  const t = line.trim();
  if (!t || t.startsWith('#')) continue;
  custom.push({ name: '拒否リスト', re: new RegExp(t.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'i') });
}

function* walk(dir) {
  for (const entry of readdirSync(dir)) {
    if (skipDirs.has(entry)) continue;
    const p = join(dir, entry);
    const st = statSync(p);
    if (st.isDirectory()) yield* walk(p);
    else if (!skipFiles.has(entry) && !binaryExt.test(entry)) yield p;
  }
}

let hits = 0;
for (const file of walk(root)) {
  const lines = readFileSync(file, 'utf8').split(/\r?\n/);
  lines.forEach((line, i) => {
    for (const { name, re } of [...generic, ...custom]) {
      if (re.test(line)) {
        hits++;
        // 値そのものはログに出さない(Public CIログに残さないため)
        console.error(`[HIT] ${relative(root, file)}:${i + 1} (${name})`);
      }
    }
  });
}

if (custom.length === 0) {
  console.warn('[warn] 拒否リストが空です。固有名詞のチェックは行われていません。');
}
if (hits > 0) {
  console.error(`機密の疑い: ${hits} 件`);
  process.exit(1);
}
console.log('scan OK');
