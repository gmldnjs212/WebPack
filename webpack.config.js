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
    // path: path.resolve(__dirname, 'dist'), 
      // __dirname : 현재파일이 있는 그 경로를 지칭
      // path.resolve : 인자를 두개 받으며, 두개의 인자를 합쳐주는 역할을 수행
    // filename: 'main.js',
    clean: true // 기존에 만들었던 파일은 제거하고 새롭게 생성하는 옵션

    // path와 filename을 주석처리하여도 webpack은 기본적으로
    // dist폴더에 결과물을 생성하며 filename또한 entry에서 명시해주었기 때문에
    // 반복하여 명시할 필요가 없다

    // 단, 기본값이 아닌 다른 설정값으로 작동하길원한다면 수정해야 한다.
  }
}