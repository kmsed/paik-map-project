// import React, { useEffect } from 'react'
import { useRouter } from 'next/router' //Dynamic Routes를 이용한 페이지 이동
import Map from '../../components/Map';

const Post = () => {
    const router = useRouter()
    const { brand } = router.query
      return (
        <>
          {/* <p>브랜드 명: {brand}</p> */}
          <Map brand={brand}/>
        </>
      )
}

export async function getServerSideProps() {
  const res = await fetch(`http://theborndb.theborn.co.kr/wp-json/api/get_store`)
  const data = await res.json();

  return { props: { data } };
}

  export default Post

//11번쨰 줄 : brand={brand}가 props를 의미 -> 콘솔 찍어보면 {brand:"미정국수"} 이런식