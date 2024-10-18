# 株式会社ゆめみ フロントエンド試験

## 公開URL

- https://yumemi-frontend-test.pages.dev/

## 開発環境

- asdf v0.14.1-f00f759
- Node.js v22.9.0
- npm v10.8.3

## 開発環境のセットアップ

※ asdf がインストールされていない場合は、[こちら](https://asdf-vm.com/guide/getting-started.html)を参考にインストールしてください。

1. asdf に Node.js プラグインを追加します。

```bash
$ asdf plugin add nodejs
```

2. Node.js 22.9.0 をインストールします。

```bash
$ asdf install nodejs 22.9.0
$ asdf global nodejs 22.9.0
```

3. 依存関係をインストールします。

```bash
$ npm install
```

## 開発サーバーの起動

```bash
$ npm start
```

## Vitest Web UI の起動

```bash
$ npm run test:ui
```

## テストの実行

```bash
$ npm test
```

## カバレッジ確認

```bash
$ npm run coverage
```
