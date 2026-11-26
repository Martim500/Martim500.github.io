// 動く図解。1本1オブジェクト。追加するときは配列に足すだけで一覧と詳細ページが増える。
//
// nodes: 箱。x,y は左上、w,h は大きさ(viewBox 内の座標)。label の改行は \n。
// steps: 順番に再生される動き。from -> to の矢印に沿って点が動き、caption が表示される。
//        同じ2ノード間で往復する場合は線が自動で少しずらされる。
// 機密(会社の内部構成、顧客名、アカウントID)は書かない。

import type { Lang } from './site';

type L = Record<Lang, string>;

export interface DiagramNode {
  id: string;
  x: number;
  y: number;
  w?: number;
  h?: number;
  label: L;
}

export interface DiagramStep {
  from: string;
  to: string;
  caption: L;
}

export interface Diagram {
  slug: string;
  title: L;
  summary: L;
  width: number;
  height: number;
  nodes: DiagramNode[];
  steps: DiagramStep[];
}

export const diagrams: Diagram[] = [];
