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

export const ui = {
  ja: {
    about: '自己紹介',
    works: '作成サイト',
    links: '関連URL',
    todoAbout: 'TODO: 自己紹介(未定)',
    todoWorks: 'TODO: 作成サイト(未定)',
    switchLabel: 'English',
    footer: '',
  },
  en: {
    about: 'About',
    works: 'Works',
    links: 'Links',
    todoAbout: 'TODO: About (to be decided)',
    todoWorks: 'TODO: Works (to be decided)',
    switchLabel: '日本語',
    footer: '',
  },
} satisfies Record<Lang, Record<string, string>>;

// 言語ごとのパス。ja はルート直下、en は /en/ 配下。
export function path(lang: Lang, page: '' | 'about' | 'works'): string {
  const prefix = lang === 'ja' ? '' : 'en/';
  return `/${prefix}${page ? page + '/' : ''}`;
}
