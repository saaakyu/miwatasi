# Miwatasi

Miwatasi は、案件やスプリント後のふりかえりをもとに、チームの経験・スキル・希望を見渡すためのスマホ向けWebアプリのプロトタイプです。

## GitHub Pages での公開URL

このリポジトリが `saaakyu/miwatasi` のような通常リポジトリとして公開されている場合、GitHub Pages のURLは基本的に以下になります。

```text
https://saaakyu.github.io/miwatasi/
```

`https://saaakyu.github.io/` は、ユーザーサイト用リポジトリ `saaakyu.github.io` が存在して公開されている場合のURLです。通常リポジトリのGitHub Pagesは、ユーザーサイトのルートではなく `/<repository-name>/` 配下に公開されます。

## 404 になるときに確認すること

1. GitHub のリポジトリ設定で **Settings > Pages** を開く。
2. **Build and deployment** の Source を `Deploy from a branch` にする。
3. Branch を公開したいブランチにする。
   - この環境では作業ブランチ名は `work` です。
   - GitHub上で `main` にマージして公開する運用なら `main` を選びます。
4. Folder は `/ (root)` を選ぶ。
5. 保存後、GitHub Pages の反映を数十秒〜数分待つ。
6. 表示URLが `https://saaakyu.github.io/miwatasi/` になっているか確認する。

## ローカルでの確認

```bash
python3 -m http.server 4173
```

起動後、ブラウザで以下を開きます。

```text
http://127.0.0.1:4173/
```

## ファイル構成

- `index.html`: アプリのエントリーポイント。
- `styles.css`: Appleデザインとキービジュアルを反映したスタイル。
- `app.js`: デモデータと画面描画。
- `CONCEPT.md`: 初見の人向けのコンセプト説明。
- `REQUIREMENTS.md`: 実装前の要件定義。
- `PRODUCT_SPEC.md`: 8人チーム、直近案件、チームマップ、ログイン、プロフィール、下部メニューの画面・データ仕様。
- `404.html`: GitHub Pages 上で直接URLを開いた場合のフォールバック。
- `.nojekyll`: GitHub Pages で静的ファイルをそのまま配信するための設定。
