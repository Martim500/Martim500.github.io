// サイト全体の表示内容。値が TODO のものは、まだ決まっていない内容。
// 決まってから書き換える(勝手に決めない)。

export type Lang = 'ja' | 'en';

export const site = {
  title: 'Martim site',
  name: 'Martim500',
  // TODO: 一言紹介(未定)
  tagline: {
    ja: 'TODO: 一言紹介',
    en: 'TODO: tagline',
  } satisfies Record<Lang, string>,
};

// 関連URL(確認事項 E1 の回答分のみ)。GitHub は回答になかったため載せていない。
export const links: { label: string; url: string }[] = [
  { label: 'Qiita', url: 'https://qiita.com/Martim500' },
  { label: 'X', url: 'https://x.com/martim5004951' },
];

// 作成ツール。説明文は本人の説明とツールの実装から起こした仮の文面。確認・修正すること。
export const tools: {
  href: string; // サイト内パス(先頭 / 付き、base は自動で付く)
  title: Record<Lang, string>;
  description: Record<Lang, string>;
}[] = [
  {
    href: '/timestamp/',
    title: { ja: '配信タイムスタンプ', en: 'Stream Timestamp' },
    description: {
      ja: '配信編集用に自分で作った個人用ツール。配信中に見どころをタップして時間を記録し、Excelに貼れる形でコピーします。記録はこのブラウザ内にだけ保存され、サーバーには送られません。',
      en: 'A personal tool I built for editing streams. Tap during a stream to mark highlights, then copy them in a format you can paste into Excel. Data stays in your browser and is not sent to any server.',
    },
  },
];

export const ui = {
  ja: {
    about: '自己紹介',
    works: '作成サイト',
    tools: 'ツール',
    links: '関連URL',
    todoAbout: 'TODO: 自己紹介(未定)',
    todoWorks: 'TODO: 作成サイト(未定)',
    openTool: '開く',
    switchLabel: 'English',
    footer: '',
  },
  en: {
    about: 'About',
    works: 'Works',
    tools: 'Tools',
    links: 'Links',
    todoAbout: 'TODO: About (to be decided)',
    todoWorks: 'TODO: Works (to be decided)',
    openTool: 'Open',
    switchLabel: '日本語',
    footer: '',
  },
} satisfies Record<Lang, Record<string, string>>;

// 言語ごとのパス。ja はルート直下、en は /en/ 配下。
export function path(lang: Lang, page: '' | 'about' | 'works' | 'tools'): string {
  const prefix = lang === 'ja' ? '' : 'en/';
  return `/${prefix}${page ? page + '/' : ''}`;
}
