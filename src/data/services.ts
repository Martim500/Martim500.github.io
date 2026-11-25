// 外部プラットフォームでのプロフィール・連絡先。url を入れたものだけ表示する。
// 案件名・顧客名・依頼元の企業名は載せない(README「公開前のルール」)。
// メールアドレスは載せない(機密スキャンが検出する。載せる場合は方針を決めてから)。
import type { Lang } from './site';

export interface ServiceProfile {
  name: string;
  // 'side' 副業のご依頼 / 'main' 本業のご相談
  group: 'side' | 'main';
  url?: string;
  summary?: Record<Lang, string>;
}

export const serviceProfiles: ServiceProfile[] = [
  {
    name: 'クラウドワークス',
    group: 'side',
    url: 'https://crowdworks.jp/public/employees/6605678',
  },
  { name: 'ココナラ', group: 'side' },
];
