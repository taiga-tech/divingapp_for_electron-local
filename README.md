<h1 align="center">Divingapp for Electron</h1>

<div style="display:flex; align-items:center; justify-content:center">
<img src="https://raw.githubusercontent.com/laravel/art/master/logo-lockup/5%20SVG/2%20CMYK/1%20Full%20Color/laravel-logolockup-cmyk-red.svg" width="300px" style="margin-right: -30px">
  <img src="https://user-images.githubusercontent.com/67569270/102721953-4d13a380-4341-11eb-9d04-d5f1668a2db7.png" width="120px">
<img src="https://user-images.githubusercontent.com/67569270/102721957-4f75fd80-4341-11eb-9d6e-302c8fb8e733.png" width="120px" style="margin: 0 20px">
  <img src="https://user-images.githubusercontent.com/67569270/102721168-839aef80-433c-11eb-9a0f-b32accd56384.png" width="60px">
</div>


## 概要
[Laravelで](https://github.com/taiga-tech/divingapp)作成したアプリをデスクトップアプリ風に出来るということで気になって作成してみました！
デプロイ先のURLを読み込んでいるだけです。
もう少しネイティブアプリ感を出していけるように勉強していきます。
> 作成時間 30分

<p align="center"><img src="https://user-images.githubusercontent.com/67569270/102720950-d2e02080-433a-11eb-9152-4e99f1911aac.png" width="400"></p>

## 開発環境
|Language|Version|
|--|--|
|node|15.4.0|
|npm|7.0.15|
|Electron|11.1.0|

## インストール方法

```shell
% git clone https://github.com/taiga-tech/divingapp_for_electron-local.git
% cd divingapp_electron_for_local

# お試し起動の場合
% cd src
% npm install && npm start

# アプリビルド
% node build.js

# インストーラを開く場合
% open ./dist/divingapp-1.0.0.dmg

# アプリを開く場合
% open ./dist/mac/divingapp.app
```
