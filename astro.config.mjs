import { defineConfig } from 'astro/config';

// サイトURLは環境変数 SITE_URL で切り替える(独自ドメイン移行時に1か所の変更で済む)。
// base はルート直下(ユーザーサイト形式)なので '/' 固定。
const site = process.env.SITE_URL ?? 'https://martim500.github.io';
const base = process.env.SITE_BASE ?? '/';

export default defineConfig({
  site,
  base,
});
