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

export const diagrams: Diagram[] = [
  {
    slug: 's3-lambda-event',
    title: {
      ja: 'S3アップロードからLambda処理まで',
      en: 'From an S3 upload to Lambda processing',
    },
    summary: {
      ja: 'ファイルをS3に置くと、イベントでLambdaが動き、結果を保存してログを残す流れ。',
      en: 'A file lands in S3, an event triggers Lambda, and the result is stored and logged.',
    },
    width: 900,
    height: 330,
    nodes: [
      { id: 'client', x: 20, y: 133, label: { ja: 'クライアント', en: 'Client' } },
      { id: 's3', x: 240, y: 133, label: { ja: 'Amazon S3', en: 'Amazon S3' } },
      { id: 'lambda', x: 460, y: 133, label: { ja: 'AWS Lambda', en: 'AWS Lambda' } },
      { id: 'ddb', x: 720, y: 40, label: { ja: 'Amazon\nDynamoDB', en: 'Amazon\nDynamoDB' } },
      { id: 'logs', x: 720, y: 226, label: { ja: 'CloudWatch\nLogs', en: 'CloudWatch\nLogs' } },
    ],
    steps: [
      {
        from: 'client',
        to: 's3',
        caption: { ja: 'ファイルをS3にアップロードする', en: 'The client uploads a file to S3.' },
      },
      {
        from: 's3',
        to: 'lambda',
        caption: {
          ja: 'S3のイベント通知がLambdaを起動する',
          en: 'The S3 event notification invokes Lambda.',
        },
      },
      {
        from: 'lambda',
        to: 's3',
        caption: { ja: 'Lambdaがアップロードされたオブジェクトを読み込む', en: 'Lambda reads the uploaded object.' },
      },
      {
        from: 'lambda',
        to: 'ddb',
        caption: { ja: '処理結果をDynamoDBに保存する', en: 'Lambda stores the result in DynamoDB.' },
      },
      {
        from: 'lambda',
        to: 'logs',
        caption: { ja: '実行ログがCloudWatch Logsに出力される', en: 'Execution logs go to CloudWatch Logs.' },
      },
    ],
  },
  {
    slug: 'bedrock-guardrails',
    title: {
      ja: 'Bedrock Guardrailsの入出力チェック',
      en: 'Input and output checks with Bedrock Guardrails',
    },
    summary: {
      ja: 'モデルに渡す前と、返ってきた後の両方でGuardrailsが内容を確認する流れ。',
      en: 'Guardrails checks the content both before it reaches the model and after the model responds.',
    },
    width: 900,
    height: 210,
    nodes: [
      { id: 'app', x: 20, y: 73, label: { ja: 'アプリケーション', en: 'Application' } },
      {
        id: 'gr',
        x: 375,
        y: 73,
        label: { ja: 'Amazon Bedrock\nGuardrails', en: 'Amazon Bedrock\nGuardrails' },
      },
      { id: 'model', x: 730, y: 73, label: { ja: '基盤モデル', en: 'Foundation\nmodel' } },
    ],
    steps: [
      {
        from: 'app',
        to: 'gr',
        caption: { ja: 'アプリがユーザーの入力(プロンプト)を送る', en: 'The app sends the user prompt.' },
      },
      {
        from: 'gr',
        to: 'model',
        caption: {
          ja: '入力をチェックし、問題のない内容だけをモデルに渡す',
          en: 'Guardrails checks the input and passes only acceptable content to the model.',
        },
      },
      {
        from: 'model',
        to: 'gr',
        caption: { ja: 'モデルが応答を生成して返す', en: 'The model generates a response.' },
      },
      {
        from: 'gr',
        to: 'app',
        caption: {
          ja: '出力もチェックし、問題のない応答をアプリに返す',
          en: 'Guardrails checks the output and returns an acceptable response to the app.',
        },
      },
    ],
  },
  {
    slug: 'test-automation-ai',
    title: {
      ja: 'テスト自動化AIの仕組み',
      en: 'How the test automation AI works',
    },
    summary: {
      ja: 'AI向けに簡略化したテスト仕様書から、BedrockがCLIを作り、Lambdaが実行する流れ。',
      en: 'Bedrock turns a simplified test spec into CLI commands, and Lambda runs them.',
    },
    width: 900,
    height: 210,
    nodes: [
      { id: 'csv', x: 20, y: 73, label: { ja: 'テスト仕様書\n(CSV)', en: 'Test spec\n(CSV)' } },
      { id: 'bedrock', x: 250, y: 73, label: { ja: 'Amazon\nBedrock', en: 'Amazon\nBedrock' } },
      { id: 'lambda', x: 480, y: 73, label: { ja: 'AWS Lambda', en: 'AWS Lambda' } },
      { id: 'result', x: 710, y: 73, label: { ja: '結果・\nエビデンス', en: 'Results and\nevidence' } },
    ],
    steps: [
      {
        from: 'csv',
        to: 'bedrock',
        caption: {
          ja: 'AI向けに簡略化したテスト仕様書(CSV)を読み込ませる',
          en: 'Feed in the test spec, simplified for AI, as a CSV.',
        },
      },
      {
        from: 'bedrock',
        to: 'lambda',
        caption: { ja: 'Bedrockがテスト内容をCLIコマンドとして生成する', en: 'Bedrock generates CLI commands from the spec.' },
      },
      {
        from: 'lambda',
        to: 'result',
        caption: {
          ja: 'LambdaがCLIを実行し、結果とエビデンスを返す',
          en: 'Lambda runs the CLI and returns the results and evidence.',
        },
      },
    ],
  },
];
