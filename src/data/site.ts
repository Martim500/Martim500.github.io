// サイト全体の表示内容。値が TODO のものは、まだ決まっていない内容。
// 決まってから書き換える(勝手に決めない)。

export type Lang = 'ja' | 'en';
export type Page = '' | 'about' | 'works' | 'talks' | 'services';

export const site = {
  title: 'Martim site',
  name: 'Martim500',
  // 確認済みの事実だけで構成した仮の一言。好みの文言に変えてよい。
  tagline: {
    ja: 'AWSクラウドエンジニア。AWS認定資格 全冠、Japan AWS Jr. Champions。',
    en: 'AWS cloud engineer. All AWS Certifications holder and Japan AWS Jr. Champion.',
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
    talks: '登壇・イベント',
    services: 'お仕事',
    links: '関連URL',
    career: 'AWS経歴',
    activity: '発信活動',
    talksHeading: '登壇・資料',
    eventsHeading: 'イベント',
    talkCount: '登壇',
    timesSuffix: '回',
    slides: '資料',
    event: 'イベントページ',
    preparing: '準備中',
    servicesLead: '外部プラットフォームでのプロフィールです。',
    todoWorks: 'TODO: 作成サイト(未定)',
    switchLabel: 'English',
    footer: '',
  },
  en: {
    about: 'About',
    works: 'Works',
    talks: 'Talks & Events',
    services: 'Services',
    links: 'Links',
    career: 'AWS Career',
    activity: 'Activities',
    talksHeading: 'Talks & Slides',
    eventsHeading: 'Events',
    talkCount: 'Talks',
    timesSuffix: '',
    slides: 'Slides',
    event: 'Event page',
    preparing: 'Coming soon',
    servicesLead: 'My profiles on external platforms.',
    todoWorks: 'TODO: Works (to be decided)',
    switchLabel: '日本語',
    footer: '',
  },
} satisfies Record<Lang, Record<string, string>>;

// 言語ごとのパス。ja はルート直下、en は /en/ 配下。
export function path(lang: Lang, page: Page): string {
  const prefix = lang === 'ja' ? '' : 'en/';
  return `/${prefix}${page ? page + '/' : ''}`;
}
