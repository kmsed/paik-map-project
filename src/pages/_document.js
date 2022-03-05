import React from "react";
import Document, { Html, Main, NextScript, Head } from "next/document"; //next의 html과 나머지 기타 기능들을 넣어주는 Main과 NextScript
import Helmet from "react-helmet"; // head태그에 넣을 정보를 jsx로 작성할 수 있게 도와준다.
import { ServerStyleSheet, createGlobalStyle } from "styled-components";

// _document.js는 index.html을 꾸며주는거다라고 생각하면 된다.
// class형으로 밖에 못 하는게 조금 아쉽다.
// ServerStyleSheet을 사용하여 서버사이드렌더링을 하게 할 수 있다.
// 전체적으로 css를 주고 싶은 부분은 createGlobalStyle을 사용하여 가능하다.
const GlobalStyles = createGlobalStyle`
      html, body {
            height: 100%;
            overflow: auto;
          }
          #__next {
            height: 100%;
          }
`;
class MyDocument extends Document {
  static getInitialProps(context) { // 페이지 렌더링 이전에 데이터를 불러들임
    const sheet = new ServerStyleSheet(); // 서버사이드 렌더링 할 수 있게함.
    const page = context.renderPage(App => props =>
      sheet.collectStyles(
        <>
          <GlobalStyles />
          <App {...props} />
        </>
      )
    ); // 아래의 스타일들을 모아서 페이지를 그려준다. 원래는 <GlobalStyles/> 없이 하는데 글로벌 스타일을 지정해주기 위해 저렇게 적었다.
    const styleTags = sheet.getStyleElement();
    return { ...page, helmet: Helmet.renderStatic(), styleTags };
  }
  render() {
    const kakaoKey = "6b1d15bbaf39a88e8b8d9a3e4f5742d4";
    const { htmlAttributes, bodyAttributes, ...helmet } = this.props.helmet; // helmet으로 부터 받아온다.
    const htmlAttrs = htmlAttributes.toComponent();
    const bodyAttrs = bodyAttributes.toComponent();
    return (
      //html이랑 head, body 부분에 각각 props들을 넣어준다
      <Html {...htmlAttrs} lang="ko">
        <Head>
          {/* link는 폰트적용한거 */}
          <link rel="preconnect" href="https://fonts.googleapis.com"/>
          <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
          <link href="https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@100;300;400;500;700;900&display=swap" rel="stylesheet"/>
          {this.props.styleTags}
          {Object.values(helmet).map(el => el.toComponent())}

          <script
            type="text/javascript"
            src={`//dapi.kakao.com/v2/maps/sdk.js?appkey=${kakaoKey}&libraries=services`}/>

        </Head>
        <body {...bodyAttrs}>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;