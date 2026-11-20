# Martim500.github.io

個人ポートフォリオサイト(Astro + GitHub Pages)。

## 開発

```
npm install
npm run dev      # ローカル表示
npm run build    # dist/ にビルド
npm run scan     # 機密スキャン
```

## 公開前のルール

このリポジトリはpublicです。ファイルと履歴は全て誰でも読めます。

- 置かないもの: 未公開の原稿、Secrets・トークン、個人メール、所属会社名、案件名・顧客名、AWSアカウントID
- 固有名詞の拒否リストは、ローカルでは `scan-denylist.txt`(gitignore済み、1行1語)、Actionsではリポジトリsecret `SCAN_DENYLIST` に置く
- コミットのメールは noreply を使う

## 公開設定(初回のみ)

1. GitHubでリポジトリ `Martim500.github.io` をpublicで作成して push
2. Settings → Pages → Source を「GitHub Actions」にする
3. Settings → Secrets and variables → Actions に `SCAN_DENYLIST` を登録する
4. Settings → Code security で Secret scanning と Push protection を有効にする

## 作成サイトの追加

`src/content/works/<slug>.md` を作る。frontmatter は `src/content.config.ts` を参照。

## 登壇データの追加(Kiro向け)

担当範囲: `src/data/talks.ts` の `talks` 配列だけを編集する。他のファイル(コンポーネント、`career.ts`、`services.ts`、`events` 配列)は触らない。

- 1件の形式は `talks.ts` 冒頭のコメントを参照(`date` `title` `event` は必須、`url` `slides` は任意)
- `date` は `YYYY-MM-DD`。表示は新しい順に自動で並ぶ。登壇回数は件数から自動計算される
- `slides` は公開URL(Speaker Deck など)だけを入れる。PDFそのものはリポジトリに置かない
- 載せないもの: 社内向け・非公開の資料、所属会社名や顧客名・案件名が入る資料、不明な日付の推測入力
- 反映前に `npm run build` と `npm run scan` が通ることを確認する
