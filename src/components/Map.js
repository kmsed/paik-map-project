import React, { useEffect } from 'react'
import KakaomapComponent from './KakaomapComponent'; //두 단계 상위 디렉토리로 이동(상대경로)
import mapData from "../pages/mapData-json.json"


const Map = (props) => {
    const kakaoMap = React.useRef(null);

    useEffect(() => {
        if (kakaoMap && kakaoMap.current) {
            const x = 127.68897492823065; //[]
            const y = 36.631960575555745;  //[]
            const coords = new window.daum.maps.LatLng(y, x); // 지도의 중심좌표
            const options = {
                center: coords,
                level: 13, // 확대 축소 레벨
            };
            const map = new window.daum.maps.Map(kakaoMap.current, options);

            // 맵의 중앙으로 이동
            map.relayout();
            map.setCenter(coords);
            // 마커를 중앙으로 이동

//========================== 데이터 고치기

        // const a = []

        // const newJson = {
        //   data: a
        // }

        // const address = []
        // for (let i = 0; i<mapData.data.length; i++) { //mapData.data.length
        //   address.push(mapData.data[i].store_address)
        // }
        // // console.log(mapData.data[12].store_gmap.lat)

        // for (let i = 0; i < address.length; i++) {
          //   // 주소-좌표 변환 객체를 생성합니다
        //   var geocoder = new kakao.maps.services.Geocoder();
        //   // 주소로 좌표를 검색합니다
        //   geocoder.addressSearch(address[i], function(result, status) {
        //     console.log(result)

        //     // if ( result[0].x && result[0].y) {
        //     //   result[0].x = Number(result[0].x)
        //     //   result[0].y = Number(result[0].y)
        //     // } else if ( mapData.data[0].store_gmap.lat && mapData.data[0].store_gmap.lng ) {
        //     //   mapData.data[0].store_gmap.lat = Number(mapData.data[0].store_gmap.lat)
        //     //   mapData.data[0].store_gmap.lng = Number(mapData.data[0].store_gmap.lng)
        //     // }
        //     result[0].x = Number(result[0].x)
        //     result[0].y = Number(result[0].y)

        //     result[0].road_address.x = Number(result[0].road_address.x)
        //     result[0].road_address.y = Number(result[0].road_address.y)

        //     result[0].address.x = Number(result[0].address.x)
        //     result[0].address.y = Number(result[0].address.y)
        //     // console.log(mapData.data[i])

        //     // console.log(typeof result[0].road_address.x)
        //     // ...{x: result[0].x , y: result.y }
        //     a.push(Object.assign(mapData.data[i], {x: result[0].x , y: result[0].y })) // ...이거 해야 하나의 배열 안에 들어간다.
        //     console.log(a)
        //     console.log(JSON.stringify(a.filter((data) => data.x || data.y )))

        //     // console.log(JSON.stringify(newJson))
        //   })
        // }

//=========== 위도 경도 만드는 코드
        // var geocoder = new kakao.maps.services.Geocoder();

        // // 주소로 좌표를 검색합니다
        // geocoder.addressSearch('충남 아산시 탕정면 명암리 924-7', function(result, status) {

        // // 정상적으로 검색이 완료됐으면
        // if (status === kakao.maps.services.Status.OK) {

        // var coords = new kakao.maps.LatLng(result[0].y, result[0].x);
        // console.log(coords)
        // }})

  //========================== 이미지 마커
        // var imageSrc = "https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/markerStar.png";
        // for ( var i = 0; i < positions.length ; i++) {
        //   // 마커 이미지의 이미지 크기 입니다
        //   var imageSize = new kakao.maps.Size(24, 35);
        //   // 마커 이미지를 생성합니다
        //   var markerImage = new kakao.maps.MarkerImage(imageSrc, imageSize);
        //   // 마커 생성
        //   var marker = new kakao.maps.Marker({
        //     map: map,
        //     position: new kakao.maps.LatLng(...positions[i]),
        //     image : markerImage // 마커 이미지
        //   });
        // }

  //==========================

            // console.log(mapData.data.filter((data) => data.store_brand === "홍콩반점0410")) //홍콩반점만 빼오기
            const newData = [] //특정 브랜드 자료만 들어있는 배열
            newData.push(mapData.data.filter((data) => data.store_brand === props.brand))
            console.log(props) //새로고침때 오류 확인용 -> 새로고침하면 props가 없음.

            const positions = [] //좌표
            for (let i = 0; i < newData[0].length ; i++) { //newData[0].length
                positions.push([newData[0][i].y, newData[0][i].x])
                // console.log(newData[0][i].y)
                console.log(newData[0][i].store_name)
            }
            // console.log(mapData.data[0])
            console.log(positions.length)


            for (let i = 0; i < positions.length; i ++) {
            // 마커를 생성합니다
                const marker = new kakao.maps.Marker({
                    map: map, // 마커를 표시할 지도
                    position: new kakao.maps.LatLng(...positions[i]), // 마커의 위치
                    clickable: true
            });

            marker.setMap(map); //마커를 지도에 표시 color:pink;

            const iwContent = '<div style="width:100%; padding:3px;">' +
                            `         <div style="margin-right: 20px; margin-left: 20px; text-align:center; font-size: 15px; font-weight: bold; ">${newData[0][i].store_brand} (${newData[0][i].store_name})</div>` +

                            // `         <div style=" text-align:center; font-size: 12px; font-weight: bold; ">${newData[0][i].store_name}</div>` +
                            `         <div style="font-size: 12px;"> - 전화번호 : ${newData[0][i].store_phone } </div> ` +
                            `         <div style="font-size: 12px;"> - 주소 : ${newData[0][i].store_address} </div> ` +
                            `         <a style="color:blue; font-weight: bold; font-size: 12px; margin-left: 10px;" href= "https://map.kakao.com/link/to/${newData[0][i].store_brand},${positions[i]} " target="_blank">길찾기</a> ` +
                            '</div>',
                iwRemoveable = true;

            const infowindow = new kakao.maps.InfoWindow({
                removable : iwRemoveable,
                content: iwContent,
            });

            kakao.maps.event.addListener(marker, 'click', function() {
                // 마커 위에 인포윈도우를 표시합니다
                infowindow.open(map, marker);
            })
        }
  //========================== 확대 축소 조절

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

      // console.log(mapData.data)

    return <KakaomapComponent ref={kakaoMap} />;
};

export default Map;