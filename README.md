# storybook6-vuetify-scss

Vue + VuetifyのGUIコンポーネントをStorybook v6で表示。
Storybook v6とv5では各種設定の記述ファイルや追加Addonなどが大きく変わっているためv5向けに書かれたWeb記事では動かない。

VuetifyのカスタマイズにSCSS変数を使用でできるが、デフォルトではStorybookからはSCSS変数が反映されないため対応。

## 環境構築のポイント

- Storybook v5では`webpack.config.js`に設定を書いていたが、v6からは`.storybook/main.js`に書く必要がある。
- node-sassを使わないようにし、sass(Dart Sass)を使う。
- sass-loaderのバージョンは10以上でもよいが、main.jsでのloader設定記のoptionsが異なるので注意。

## 参考にした情報

- [Vue + Vuetify + Storybookの環境構築](https://qiita.com/wakana_t_miri/items/d1d13afbf3713346e8f0)

注意点
Storybook v5では`webpack.config.js`に設定を書いていたが、v6からは`.storybook/main.js`に書く必要がある。

いろいろ環境構築上の注意が必要
- https://freegian.co.jp/blog/vuetify2-storybook-2
