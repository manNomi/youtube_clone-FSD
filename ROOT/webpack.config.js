const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: "development",
  entry: "./src/app/app.js", // 엔트리 포인트 설정
  output: {
    filename: "bundle.js", // 번들된 파일 이름
    path: path.resolve(__dirname, "./dist"), // 출력 경로
    publicPath: "./", // 웹 서버에서 자산의 위치
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/app/index.html", // 기존 HTML 파일을 템플릿으로 사용
      filename: "index.html", // 출력 디렉토리에 생성될 HTML 파일 이름
    }),
  ],
};
