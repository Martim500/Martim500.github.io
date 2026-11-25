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

- 置かないもの: 未公開の原稿、Secrets・トークン、メールアドレス、案件名・顧客名、AWSアカウントID
- 所属会社名と社内発表の掲載は本人が可としている(2026-11-25)
- 固有名詞の拒否リストは、ローカルでは `scan-denylist.txt`(gitignore済み、1行1語)、Actionsではリポジトリsecret `SCAN_DENYLIST` に置く
- コミットのメールは noreply を使う

## 公開設定(初回のみ)

1. GitHubでリポジトリ `Martim500.github.io` をpublicで作成して push
2. Settings → Pages → Source を「GitHub Actions」にする
3. Settings → Secrets and variables → Actions に `SCAN_DENYLIST` を登録する
4. Settings → Code security で Secret scanning と Push protection を有効にする

## 作成サイトの追加

`src/content/works/<slug>.md` を作る。frontmatter は `src/content.config.ts` を参照。
