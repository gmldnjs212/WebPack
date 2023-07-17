// import 
const path = require('path')


// export
module.exports = {
  // parcel index.html => parcel bundler의 진입점을 index.html로 설정한 것
  // webpack은 html파일이 아닌 js파일을 진입점으로 설정한다

  // 파일을 읽어들이기 시작하는 진입점 설정
  entry: './js/main.js', // == parcel main.js

  // 결과물(번들)을 반환하는 설정
  output: {
    // path는 node.js에서 요구하는 절대경로를 필요로한다
    path: path.resolve(__dirname, 'dist'), 
    // __dirname : 현재파일이 있는 그 경로를 지칭
    // path.resolve : 인자를 두개 받으며, 두개의 인자를 합쳐주는 역할을 수행
    filename: 'main.js'
  }
}