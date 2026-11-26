// 動く図解の一覧。図解本体は単体のHTMLで、public/diagrams/<slug>/index.html に置く。
// 公開URLは /diagrams/<slug>/ 。ここに1件足すと、一覧ページ(/diagrams/)に出る。
//
// 追加例:
//   {
//     slug: 's3-lambda-event',
//     title: { ja: '日本語タイトル', en: 'English title' },
//     summary: { ja: '1文の説明', en: 'One-sentence description' },
//     date: '2026-11',
//   },
//
// 機密(会社の内部構成のうち未公開のもの、顧客名、アカウントID)は書かない。

import type { Lang } from './site';

export interface Diagram {
  slug: string;
  title: Record<Lang, string>;
  summary: Record<Lang, string>;
  date: string; // YYYY-MM
}

export const diagrams: Diagram[] = [];
