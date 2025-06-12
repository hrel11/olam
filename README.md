# about

A modern personal portfolio built with Astro and TypeScript

略歴/スキルセット/リンク

## package

TypeScript/Astro/React/TailwindCSS/GSAP/Vite/ESLint/Prettier

## requirement

Node.js 22.16.0~

## usage

```shell
# 依存関係インストール
npm i

# 開発モードで起動
npm run dev

# ビルド
npm run build

# ビルドのプレビュー
npm run preview
```

Dockerコンテナ(node:23-alpine)での動作確認済

## structure

```text
/
├── public/             # 静的ファイル（画像、favicon 等）
├── src/
│   ├── components/     # UI コンポーネント集
│   ├── layouts/        # レイアウトテンプレート
│   ├── pages/          # Astro ページ（.astro ファイル）
│   ├── content/        # Markdown / MDX 記事
│   └── data/           # サイト設定やプロフィール情報
├── astro.config.mjs    # Astro の設定ファイル
├── tailwind.config.cjs[#] or uno.config.ts  # スタイリング設定
├── tsconfig.json       # TS 設定
└── package.json        # スクリプトや依存定義
```

## feature

- レスポンシブ対応
- 略歴はmicroCMSから取得
