const sassLoaderOptions = {
  implementation: require('sass'),
}
const path = require('path')

module.exports = {
  stories: ['../src/**/*.stories.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: ['@storybook/addon-links', '@storybook/addon-essentials'],

  // webpackの設定
  webpackFinal: async (config, { configType }) => {
    // @がsrcディレクトリをさすように設定
    config.resolve.alias['@'] = path.resolve(__dirname, '..', 'src')

    // storybookで使用するsass-loaderを設定
    config.module.rules.push({
      test: /\.sass$/,
      use: [
        'style-loader',
        'css-loader',
        {
          loader: 'sass-loader',
          options: Object.assign({}, sassLoaderOptions, {
            additionalData: "@import 'src/styles/variables.scss'",
          }),
        },
      ],
    })
    config.module.rules.push({
      test: /\.scss$/,
      use: [
        'style-loader',
        'css-loader',
        {
          loader: 'sass-loader',
          options: Object.assign({}, sassLoaderOptions, {
            additionalData:
                 "@import 'src/styles/variables.scss';",
          }),
        },
      ],
    })
    return config
  },
}
