// 自己紹介・AWS経歴。確認済みの事実だけを書く。
// 会社名の掲載は本人が可としている。案件名・顧客名は載せない(README「公開前のルール」)。
import type { Lang } from './site';

type L = Record<Lang, string>;

export const intro: L[] = [
  {
    ja: 'Martim(マーティン)です。',
    en: 'I am Martim (pronounced "Martin").',
  },
  {
    ja: 'AWSクラウドエンジニアです。AWSの実務経験は3年(2026年時点)。Amazon Bedrock、AWS Lambda、AWS IoT、コスト最適化などを扱っています。',
    en: 'I am an AWS cloud engineer with 3 years of hands-on AWS experience (as of 2026). I work with Amazon Bedrock, AWS Lambda, AWS IoT and cost optimization.',
  },
  {
    ja: '登壇、社内外の勉強会、Qiitaでの記事執筆を通じて、AWSの知見を発信しています。',
    en: 'I share what I learn about AWS through talks, internal and external study sessions, and articles on Qiita.',
  },
];

// 認定・表彰。year は確認できたら足す(未確認のものは書かない)。
export const credentials: { title: L; year?: string }[] = [
  {
    title: {
      ja: 'AWS認定資格 全冠(12資格)',
      en: 'All 12 AWS Certifications',
    },
  },
  {
    title: {
      ja: 'Japan AWS Jr. Champions',
      en: 'Japan AWS Jr. Champions',
    },
  },
];

// 活動内容。社内外のコミュニティ活動と発信。会社名・グループ名・案件名は書かない。
export const activities: L[] = [
  {
    ja: 'AWS Jr. Champions のネットワークを通じた、会社をまたぐコミュニティづくり',
    en: 'Building cross-company community through the Japan AWS Jr. Champions network',
  },
  {
    ja: '社内勉強会・研修の企画と実施',
    en: 'Organizing and running internal study sessions and training',
  },
  {
    ja: 'Qiitaでの技術記事の執筆',
    en: 'Writing technical articles on Qiita',
  },
];
