// 外部プラットフォームでのプロフィール。url を入れたものだけ表示する。
// 案件名・顧客名・依頼元の企業名は載せない(README「公開前のルール」)。
import type { Lang } from './site';

export interface ServiceProfile {
  name: string;
  url?: string;
  summary?: Record<Lang, string>;
}

export const serviceProfiles: ServiceProfile[] = [
  { name: 'クラウドワークス' },
  { name: 'ココナラ' },
];
