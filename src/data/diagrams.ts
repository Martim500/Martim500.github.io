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

export const diagrams: Diagram[] = [
  {
    slug: 'vpc-nfw-waf-alb-ec2',
    title: {
      ja: '名前解決からEC2まで: Route 53、NFW、WAF、ALBを通る通信',
      en: 'From DNS to EC2: traffic through Route 53, Network Firewall, WAF, and ALB',
    },
    summary: {
      ja: 'DNSキャッシュとRoute 53での名前解決から、IGWのエッジルートでNetwork Firewallを経由し、AWS WAF付きのALBを通ってPrivateサブネットのEC2に届くまでの通信を動かして示す図解。',
      en: 'An animated diagram of a request resolved via DNS cache and Route 53, routed through Network Firewall by IGW ingress routing, then through an ALB with AWS WAF to an EC2 instance in a private subnet.',
    },
    date: '2026-11',
  },
];
