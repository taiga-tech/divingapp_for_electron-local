<h1 align="center">Divingapp for Electron</h1>

<div align="center">
 <img src="https://user-images.githubusercontent.com/67569270/102722777-c2ce3e00-4346-11eb-8d7f-291a6f651e6b.png" alt="laravel" width="70px">
  <img src="https://user-images.githubusercontent.com/67569270/102721953-4d13a380-4341-11eb-9d04-d5f1668a2db7.png" alt="node" width="120px">
<img src="https://user-images.githubusercontent.com/67569270/102721957-4f75fd80-4341-11eb-9d6e-302c8fb8e733.png" alt="npm" width="120px">
  <img src="https://user-images.githubusercontent.com/67569270/102721168-839aef80-433c-11eb-9a0f-b32accd56384.png" alt="electron" width="60px">
</div>


## 概要
[Laravelで](https://github.com/taiga-tech/divingapp)作成したアプリをデスクトップアプリ風に出来るということで気になって作成してみました！
デプロイ先のURLを読み込んでいるだけです。
もう少しネイティブアプリ感を出していけるように勉強していきます。
> 作成時間 30分

<p align="center"><img src="https://user-images.githubusercontent.com/67569270/102720950-d2e02080-433a-11eb-9152-4e99f1911aac.png" alt="sc" width="400"></p>

## 開発環境
|Language|Version|
|--|--|
|node|15.4.0|
|npm|7.0.15|
|Electron|11.1.0|

## インストール方法

```shell
% git clone https://github.com/taiga-tech/divingapp_for_electron-local.git
% cd divingapp_electron_for_local/src

# お試し起動の場合
% npm install && npm start

# アプリビルド
% node build.js

# インストーラを開く場合
% open ./dist/divingapp-1.0.0.dmg

# アプリを開く場合
% open ./dist/mac/divingapp.app
```
