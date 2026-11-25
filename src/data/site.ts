// サイト全体の表示内容。値が TODO のものは、まだ決まっていない内容。
// 決まってから書き換える(勝手に決めない)。

export type Lang = 'ja' | 'en';

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

// 登壇。date は資料の更新日の年月(本人の指定)。場所は載せない(本人の指定)。
// pdf は public/talks/ に置いたファイル名。概要は資料の内容から起こした文面。
export const talks: {
  date: string;
  pdf: string;
  title: string;
  summary: Record<Lang, string>;
}[] = [
  {
    date: '2026-10',
    pdf: 'career-certification.pdf',
    title: 'クラウドエンジニアのキャリアと資格取得のリアル',
    summary: {
      ja: '専門学校生向けの講演。仕事の1日、AWS認定全12資格の勉強法と挫折体験、学生のうちにやっておくべきことを紹介しました。',
      en: 'A talk for vocational school students: a day at work, how I earned all 12 AWS certifications (and failed along the way), and what to do while still in school.',
    },
  },
  {
    date: '2026-10',
    pdf: 'jev-lt.pdf',
    title: '判断はJevに、生成はClaudeに ― 新AIモデル「Jev」を実際に触ってみた',
    summary: {
      ja: '判断に特化したAIモデル「Jev」を検証したLT。1000件の並列実行で平均約180ms、109 req/secを実測し、判断はJev、文章生成はLLMという分担を提案しました。',
      en: 'A lightning talk testing "Jev", an AI model specialized in decisions. Measured about 180 ms average latency and 109 req/sec over 1,000 parallel requests, and proposed splitting decisions (Jev) from text generation (LLM).',
    },
  },
  {
    date: '2026-07',
    pdf: 'presentation-skills.pdf',
    title: '伝わるプレゼンテーション',
    summary: {
      ja: '教える技術をプレゼンに応用する方法。話の設計図の作り方、聞き手の巻き込み方、伝え方の磨き方、想定外への備えをまとめました。',
      en: 'Applying teaching techniques to presentations: structuring a talk, engaging the audience, improving delivery, and handling the unexpected.',
    },
  },
  {
    date: '2026-07',
    pdf: 'ai-cost-reduction.pdf',
    title: '実業務をAIに渡すと、コストはどれだけ下がるか',
    summary: {
      ja: '記事執筆を例に、人力とAIのコストを比較した試算。1記事あたり3,650〜10,213円、社内展開で月7万〜20万円の削減が見込めることと、AI活用時の注意点を紹介しました。',
      en: 'Comparing human and AI costs using article writing as a case: an estimated saving of 3,650–10,213 yen per article and 70,000–200,000 yen per month if rolled out internally, plus cautions for using AI.',
    },
  },
  {
    date: '2026-07',
    pdf: 'best-practice-cooking.pdf',
    title: 'ベストプラクティスは料理と同じ?',
    summary: {
      ja: 'ベストプラクティスをレシピに例え、現場の事情に合わせて「そのまま使う/一部使う/あえて使わない」を判断する考え方を紹介しました。',
      en: 'Comparing best practices to recipes: how to decide whether to use them as-is, partly, or not at all, based on your own situation.',
    },
  },
  {
    date: '2026-04',
    pdf: 'sre-for-ai.pdf',
    title: 'AIが加速する時代にSREがなぜ必要か',
    summary: {
      ja: 'AWSの講演で学んだことをまとめて社内で発表。AIで開発が速くなるほど信頼性の土台が重要になることを、オブザーバビリティとCI/CDのガードレールの観点で解説しました。',
      en: 'An internal talk summarizing what I learned at an AWS session: why reliability matters more as AI speeds up development, covering observability and CI/CD guardrails.',
    },
  },
  {
    date: '2025-11',
    pdf: 'test-automation-ai.pdf',
    title: 'テスト自動化AI 〜人のためではなく、AIのための資料作り〜',
    summary: {
      ja: 'AI向けに簡略化したテスト仕様書(CSV)から、BedrockがCLIを生成し、Lambdaが実行して結果とエビデンスを返す仕組みを紹介しました。',
      en: 'A system where Bedrock generates CLI commands from a simplified, AI-oriented test spec (CSV), and Lambda runs them and returns results and evidence.',
    },
  },
  {
    date: '2025-05',
    pdf: 'bedrock-engineer-diagram.pdf',
    title: 'Bedrock Engineer 自然言語でのAWS構成図生成の使用感',
    summary: {
      ja: '初登壇。Bedrock EngineerのDiagram Generatorで、自然言語からAWS構成図を生成した検証です。約2分で完成度8割の図ができました。',
      en: 'My first talk. Generating AWS architecture diagrams from natural language with Bedrock Engineer\'s Diagram Generator; it produced an ~80% complete diagram in about 2 minutes.',
    },
  },
];

export const ui = {
  ja: {
    about: '自己紹介',
    works: '作成サイト',
    tools: 'ツール',
    talks: '登壇',
    slides: '資料(PDF)',
    slidesNote: '資料はすべて日本語です。',
    links: '関連URL',
    services: 'お仕事',
    career: 'AWS経歴',
    activity: '発信活動',
    talkCount: '登壇',
    timesSuffix: '回',
    preparing: '準備中',
    servicesLead: '外部プラットフォームでのプロフィールです。',
    todoWorks: 'TODO: 作成サイト(未定)',
    openTool: '開く',
    switchLabel: 'English',
    footer: '',
  },
  en: {
    about: 'About',
    works: 'Works',
    tools: 'Tools',
    talks: 'Talks',
    slides: 'Slides (PDF)',
    slidesNote: 'All slides are in Japanese.',
    links: 'Links',
    services: 'Services',
    career: 'AWS Career',
    activity: 'Activities',
    talkCount: 'Talks',
    timesSuffix: '',
    preparing: 'Coming soon',
    servicesLead: 'My profiles on external platforms.',
    todoWorks: 'TODO: Works (to be decided)',
    openTool: 'Open',
    switchLabel: '日本語',
    footer: '',
  },
} satisfies Record<Lang, Record<string, string>>;

// 言語ごとのパス。ja はルート直下、en は /en/ 配下。
export type Page = '' | 'about' | 'works' | 'tools' | 'talks' | 'services';

export function path(lang: Lang, page: Page): string {
  const prefix = lang === 'ja' ? '' : 'en/';
  return `/${prefix}${page ? page + '/' : ''}`;
}
