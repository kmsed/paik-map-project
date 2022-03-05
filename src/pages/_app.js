import GlobalStyle from "../styles/GlobalStyle"

const Map = ({ Component, pageProps }) => {
  return (
    <>
    <GlobalStyle />
    <Component {...pageProps} />
    </>
  )
}

export default Map

//공통으로 적용되는 부분