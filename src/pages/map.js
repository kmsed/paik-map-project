import React, { useEffect } from "react";
import KakaomapComponent from "../components/KakaomapComponent";
//오류를 쉽게 찾기 위해서 따로 파일을 만들어서 지도를 만들어 봤다.
const Map = () => {
  const kakaoMap = React.useRef(null);

  useEffect(() => {
    if (kakaoMap && kakaoMap.current) {
      const x = 126.570667;
      const y = 33.450701;
        console.log(window)
        console.log(window.kakao)
      const coords = new window.daum.maps.LatLng(y, x); // 지도의 중심좌표
      const options = {
        center: coords,
        level: 2,
      };
      const map = new window.daum.maps.Map(kakaoMap.current, options);
      const marker = new window.daum.maps.Marker({
        position: coords,
        map,
      });
      // 맵의 중앙으로 이동
      map.relayout();
      map.setCenter(coords);
      // 마커를 중앙으로 이동
      marker.setPosition(coords);

      // 일반 지도와 스카이뷰로 지도 타입을 전환할 수 있는 지도타입 컨트롤을 생성합니다
      const mapTypeControl = new window.daum.maps.MapTypeControl();

      // 지도에 컨트롤을 추가해야 지도위에 표시됩니다
      // kakao.maps.ControlPosition은 컨트롤이 표시될 위치를 정의하는데 TOPRIGHT는 오른쪽 위를 의미합니다
      map.addControl(
        mapTypeControl,
        window.kakao.maps.ControlPosition.TOPRIGHT
      );
      // 지도 확대 축소를 제어할 수 있는  줌 컨트롤을 생성합니다
      const zoomControl = new window.daum.maps.ZoomControl();
      map.addControl(
        zoomControl,
        window.daum.maps.ControlPosition.RIGHT
      );
    }
    }, [kakaoMap]);
  return <KakaomapComponent ref={kakaoMap} />;
};

export default Map;