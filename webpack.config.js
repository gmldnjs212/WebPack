// import 
const path = require('path')
const HtmlPlugin = require('html-webpack-plugin')
const CopyPlugin = require('copy-webpack-plugin')

// export
module.exports = {

  // 파일을 읽어들이기 시작하는 진입점 설정
  entry: './js/main.js',

  // 결과물(번들)을 반환하는 설정
  output: {
    // path: path.resolve(__dirname, 'dist'), 
    // filename: 'main.js',
    clean: true 
  },

  module: {
    rules: [
      {
        test: /\.s?css$/, 
        // \.        = 마침표 그자체를 의미 
        // /\.css$/  = .css로 끝나는 파일을 찾는 정규표현식
        // ~$        = ~으로 끝나는..
        // s?        = s라는 단어가 있을수도 없을수도 있다
        use: [
          'style-loader',
          'css-loader',
          'sass-loader',
        ]
      }
    ]
  },

  // 번들링 후 결과몰의 처리방식 등 다양한 플러그인들을 설정
  plugins : [
    new HtmlPlugin({
      template : './index.html'
    }),
    new CopyPlugin({
      patterns: [
        { from : 'static' }
      ]
    })
  ],

  devServer: {
    host: 'localhost'
  }
}