import { createGlobalStyle } from "styled-components"

const GlobalStyle = createGlobalStyle`
  * {
      margin: 0;
      padding: 0;
      font-family: 'Noto Sans KR', sans-serif;
  }
`;
//기본 적용되는 값 없애주기 ( 스크롤 )
export default GlobalStyle;