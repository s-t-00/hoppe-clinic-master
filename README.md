# for Project

## プロジェクト準備

### Install npm

プロジェクトルートに npm をインストールします。
`npm i`

※Node.js が入っていない場合予め Node.js をインストールしてください。

## Start project

プロジェクトルートで以下を実行します。
`gulp`
各コンパイルを実施しブラウザが起動します。

### 実行内容

`gulp`で実行される内容は以下です。

-   html の作成・整形
-   scss から css への Autoprefixer 適用・MediaQury の整列・圧縮
-   js の結合・圧縮
-   images の圧縮
-   上記完了後ブラウザを起動・ファイルの更新を監視・ファイルの変更を検知後ブラウザリロード

## プロジェクト構成

.  
├── dest ### public    
│   ├── css  
│   ├── images
│   └── js 
└── src  
　　 ├── html
　　 └── images
　　 ├── js  
　　 ├── js-vendor  
　　 └── sass

`src`フォルダで作成したファイルは`dest`フォルダにコンパイルされます。  
css および Javascript　および images はコンパイル時に圧縮されます。（※一旦圧縮は外しています。）  
ブラウザでの検証時は sourcemap を使用します。  
`dest`直下の html およびスタイルガイドから`/dest/common/`の内容を参照します。

## 使用しているツール

-   gulp(v4)
-   scss
