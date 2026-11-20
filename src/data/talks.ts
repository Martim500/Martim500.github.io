// 登壇・資料・イベントの記録。1件ずつ追記する(新しい順は自動で並ぶ)。
//
// 追加例(コメントを外して値を入れる):
//   {
//     date: '2026-10-15',            // YYYY-MM-DD
//     title: '発表タイトル',
//     event: 'イベント名',
//     url: 'https://...',            // イベントページ(任意)
//     slides: 'https://...',         // 資料のURL(任意。Speaker Deck など)
//   },
//
// 非公開の勉強会、社内向け資料、会社名や顧客名が入る資料は載せない。

export interface Talk {
  date: string;
  title: string;
  event: string;
  url?: string;
  slides?: string;
}

export interface EventEntry {
  date: string;
  name: string;
  // 参加の形: 'organizer' 主催・運営 / 'staff' スタッフ / 'attendee' 参加
  role: 'organizer' | 'staff' | 'attendee';
  url?: string;
}

export const talks: Talk[] = [];

export const events: EventEntry[] = [];

export const roleLabel: Record<EventEntry['role'], { ja: string; en: string }> = {
  organizer: { ja: '主催・運営', en: 'Organizer' },
  staff: { ja: 'スタッフ', en: 'Staff' },
  attendee: { ja: '参加', en: 'Attendee' },
};
