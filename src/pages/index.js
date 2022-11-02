import styled from 'styled-components';
import Link from 'next/link'
import setting from '../utils/setting'

const HeadBlock = styled.div`
  width: auto;
  height: 160px;
  background-color: #D9E8F5;
  text-align: center;
  border-bottom: 1px solid #e9ecef;
  padding-top: 30px;
  h1 {
    margin-bottom: 20px;
  }
  .tag {
    margin-top: 15px;
    color: #868e96;
    font-size: 21px;
  }
`;

const Main = styled.div` //브랜드 들어있는 큰 메인 화면
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  align-items: center;
  justify-items: center;
  margin: 60px 250px;
  grid-column-gap: 20px;
  grid-row-gap: 30px;
`;

const MainBlock = styled.div` //브랜드 블럭 하나하나
  background-image: ${props => {console.log(props)
    return `url('${props.url}')`}};
  width: 300px;
  height: 150px;
  background-repeat: no-repeat;
  background-position: center center;
  border: 2px solid #dfdfdf;
  .imgSize {
    width: 230px;
    height: 80px;
    margin: 35px 35px;
  }
`;

const Footer = styled.div`
  width: auto;
  height: 80px;
  background-color: #9bbcd9;
  font-size: 20px;
  color: white;
  text-align: center;
  padding-top: 20px;
`;

const App = () => {
  return (
    <HeadBlock>
      <h1>백종원의 프랜차이즈 위치를 알아보세요!</h1>
      <div>원하는 지점의 위치 확인과 길찾기도 가능합니다💕</div>
      <div className="tag">#맛집 &nbsp; #백세권 &nbsp; #더본코리아 &nbsp; #백종원거리</div>
      <Main>
        <Link href={"/paik/빽다방"+setting.extention}>
            <a>
                <MainBlock url='https://start.theborn.co.kr/vd/upload/prebrand/L_353829001621998289.png' />
            </a>
        </Link>

        <Link href={"/paik/홍콩반점0410"+setting.extention}>
            <a>
                <MainBlock>
                    <img className='imgSize' src={'/images/HongKong.png'} alt="profile"/>
                </MainBlock>
            </a>
        </Link>

        <Link href={"/paik/막이오름"+setting.extention}>
            <a>
                <MainBlock url='https://start.theborn.co.kr/vd/upload/prebrand/L_758167001636103375.png'/>
            </a>
        </Link>

        <Link href={"/paik/백스비어"+setting.extention}>
            <a>
                <MainBlock url='https://start.theborn.co.kr/vd/upload/prebrand/L_42407001616033669.png'/>
            </a>
        </Link>

        <Link href={"/paik/성성식당"+setting.extention}>
            <a>
                <MainBlock url='https://start.theborn.co.kr/vd/upload/prebrand/L_457528001614215033.png'/>
            </a>
        </Link>

        <Link href={"/paik/롤링파스타"+setting.extention}>
            <a>
                <MainBlock url='https://start.theborn.co.kr/vd/upload/prebrand/L_369436001614215664.png'/>
            </a>
        </Link>

        <Link href={"/paik/인생설렁탕"+setting.extention}>
            <a>
                <MainBlock url='https://start.theborn.co.kr/vd/upload/prebrand/L_80713001614215708.png'/>
            </a>
        </Link>

        <Link href={"/paik/한신포차"+setting.extention}>
            <a>
                <MainBlock>
                    <img className='imgSize' src={'/images/hanshin.png'} alt="profile"/>
                </MainBlock>
            </a>
        </Link>

        <Link href={"/paik/백철판0410"+setting.extention}>
            <a>
                <MainBlock>
                    <img className='imgSize' src={'/images/ironPlate.png'} alt="profile"/>
                </MainBlock>
            </a>
        </Link>

        <Link href={"/paik/리춘시장"+setting.extention}>
            <a>
                <MainBlock url='https://www.theborn.co.kr/wp-content/uploads/2021/11/%EB%8D%94%EB%B3%B8_%EA%B3%B5%ED%99%88_%EB%A6%AC%EC%B6%98%EC%8B%9C%EC%9E%A5.png'/>
            </a>
        </Link>

        <Link href={"/paik/역전우동0410"+setting.extention}>
            <a>
                <MainBlock url='https://start.theborn.co.kr/vd/upload/prebrand/L_585795001616033648.png'/>
            </a>
        </Link>

        <Link href={"/paik/새마을식당"+setting.extention}>
            <a>
                <MainBlock url='https://start.theborn.co.kr/vd/upload/prebrand/L_109670001614215114.png'/>
            </a>
        </Link>

        <Link href={"/paik/미정국수0410"+setting.extention}>
            <a>
                <MainBlock url='https://start.theborn.co.kr/vd/upload/prebrand/L_634431001614215547.png'/>
            </a>
        </Link>

        <Link href={"/paik/원조쌈밥집"+setting.extention}>
            <a>
                <MainBlock url='https://start.theborn.co.kr/vd/upload/prebrand/L_798953001614215161.png'/>
            </a>
        </Link>

        <Link href={"/paik/본가"+setting.extention}>
            <a>
                <MainBlock url='https://start.theborn.co.kr/vd/upload/prebrand/L_729150001614215273.png'/>
            </a>
        </Link>

        <Link href={"/paik/돌배기집"+setting.extention}>
            <a>
                <MainBlock url='https://start.theborn.co.kr/vd/upload/prebrand/L_261001001614215644.png'/>
            </a>
        </Link>

      </Main>
      <Footer>
          <div>메일: kimysblockb@naver.com</div>
          <div> 연락처: 010-6370-5846 </div>
      </Footer>
      </HeadBlock>
  )
}

export default App;