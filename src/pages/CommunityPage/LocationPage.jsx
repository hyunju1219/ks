/** @jsxImportSource @emotion/react */
import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import { MapPin, Clock, Phone, Car, Bus, Train, Info, Mail } from 'lucide-react';
import SubpageHeader from '../../components/SubpageHeader/SubpageHeader';
import * as S from './style';
import { Map, MapMarker, useKakaoLoader } from 'react-kakao-maps-sdk';

const LocationPage = () => {
  // .env 파일에서 VITE_KAKAO_API_KEY를 가져옵니다.
  // Vite를 사용하지 않는다면, process.env.REACT_APP_KAKAO_API_KEY 와 같이 환경에 맞게 수정해야 합니다.
  const mySecret = import.meta.env.VITE_KAKAO_API_KEY;

  const breadcrumbs = [
    { name: '학교 소개', link: '/about' },
    { name: '오시는길', link: null }
  ];

  // useKakaoLoader 훅을 사용하여 카카오맵 SDK 로딩 상태를 관리합니다.
  const [isSdkLoading, sdkError] = useKakaoLoader({
    appkey: mySecret,
    libraries: ['services'], // 'services' 라이브러리(Geocoder 등)만 필요합니다.
  });

  // 위도와 경도를 저장할 상태
  const [mapCenter, setMapCenter] = useState({
    lat: 0, // 초기값은 유효하지 않은 값으로 설정하여 로딩 상태를 구분
    lng: 0,
  });
  const [isGeocoding, setIsGeocoding] = useState(true); // 주소 변환 로딩 상태

  useEffect(() => {
    // SDK 로딩이 완료되지 않았거나, kakao 객체가 없으면 함수 종료
    if (isSdkLoading || !window.kakao || !window.kakao.maps) {
      // SDK 로딩 중이거나 실패 시 아무것도 하지 않음
      if(sdkError) {
        console.error("카카오맵 SDK 로딩 실패:", sdkError);
        setIsGeocoding(false); // SDK 로딩 실패 시 주소 변환도 중단
      }
      return;
    }


    // Geocoder 객체 생성
    const geocoder = new window.kakao.maps.services.Geocoder();
    const address = "부산광역시 부산진구 연수로 15-1"; // 정확한 주소

    setIsGeocoding(true); // 주소 변환 시작
    // 주소로 좌표를 검색합니다.
    geocoder.addressSearch(address, (result, status) => {
      // 정상적으로 검색이 완료됐으면
      if (status === window.kakao.maps.services.Status.OK && result && result.length > 0) {
        setMapCenter({
          lat: parseFloat(result[0].y),
          lng: parseFloat(result[0].x),
        });
      } else {
        console.error('주소로부터 좌표를 가져오는데 실패했습니다:', status, result);
        // 주소 변환 실패 시 기본 좌표 (예: 부산 시청) 또는 다른 처리
        setMapCenter({ lat: 35.1795543, lng: 129.0756416 }); // 예시: 부산 시청 좌표
      }
      setIsGeocoding(false); // 주소 변환 완료
    });
  }, [isSdkLoading, sdkError]); // isSdkLoading 또는 sdkError가 변경될 때마다 실행

  return (
    <S.PageContainer>
      <Helmet>
        <title>오시는길 - 금성기술직업전문학교</title>
        <meta name="description" content="금성기술직업전문학교의 위치와 찾아오시는 방법을 안내합니다. 대중교통, 자가용 등 다양한 교통편 정보를 확인하세요." />
      </Helmet>

      <SubpageHeader
        title="오시는길"
        subtitle="금성기술직업전문학교의 위치와 찾아오시는 방법을 안내해 드립니다"
        breadcrumbs={breadcrumbs}
      />

      <S.ContentSection>
        <S.SectionInner>
          <S.MapContainer>
            {/* 카카오맵 SDK 로딩 및 주소 변환 상태에 따른 조건부 렌더링 */}
            {isSdkLoading || isGeocoding ? (
              <div style={{ width: "100%", height: "100%", display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <p>지도 정보를 불러오는 중입니다...</p>
              </div>
            ) : sdkError ? (
                <div style={{ width: "100%", height: "100%", display: 'flex', justifyContent: 'center', alignItems: 'center', color: 'red' }}>
                    <p>지도 SDK를 불러오는데 실패했습니다. API 키를 확인해주세요.</p>
                </div>
            ) : mapCenter.lat !== 0 && mapCenter.lng !== 0 ? ( // 유효한 좌표가 설정된 경우에만 맵 렌더링
              <Map
                center={mapCenter}
                style={{ width: "100%", height: "100%" }}
                level={4} // 확대 레벨 (숫자가 작을수록 확대)
              >
                <MapMarker position={mapCenter}>
                  {/* 마커에 표시될 내용 (선택 사항) */}
                  <div style={{color:"#000"}}>금성기술직업전문학교</div>
                </MapMarker>
              </Map>
            ) : (
              <div style={{ width: "100%", height: "100%", display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <p>지도의 위치 정보를 설정할 수 없습니다.</p>
              </div>
            )}
          </S.MapContainer>

          <S.LocationInfoContainer>
            <S.LocationInfoCard>
              <S.LocationInfoTitle>학교 정보</S.LocationInfoTitle>
              <S.LocationInfoList>
                <S.LocationInfoItem>
                  <S.LocationInfoIcon>
                    <MapPin size={20} />
                  </S.LocationInfoIcon>
                  <S.LocationInfoContent>
                    <S.LocationInfoLabel>주소</S.LocationInfoLabel>
                    <S.LocationInfoText>부산광역시 부산진구 연수로 15-1, 5층</S.LocationInfoText>
                  </S.LocationInfoContent>
                </S.LocationInfoItem>

                <S.LocationInfoItem>
                  <S.LocationInfoIcon>
                    <Phone size={20} />
                  </S.LocationInfoIcon>
                  <S.LocationInfoContent>
                    <S.LocationInfoLabel>연락처</S.LocationInfoLabel>
                    <S.LocationInfoText>051-806-2200</S.LocationInfoText>
                  </S.LocationInfoContent>
                </S.LocationInfoItem>

                <S.LocationInfoItem>
                  <S.LocationInfoIcon>
                    <Mail size={20} />
                  </S.LocationInfoIcon>
                  <S.LocationInfoContent>
                    <S.LocationInfoLabel>이메일</S.LocationInfoLabel>
                    <S.LocationInfoText>kstg35@naver.com</S.LocationInfoText>
                  </S.LocationInfoContent>
                </S.LocationInfoItem>

                <S.LocationInfoItem>
                  <S.LocationInfoIcon>
                    <Clock size={20} />
                  </S.LocationInfoIcon>
                  <S.LocationInfoContent>
                    <S.LocationInfoLabel>운영시간</S.LocationInfoLabel>
                    <S.LocationInfoText>평일 09:00 - 18:00 (주말/공휴일 제외)</S.LocationInfoText>
                  </S.LocationInfoContent>
                </S.LocationInfoItem>

                <S.LocationInfoItem>
                  <S.LocationInfoIcon>
                    <Info size={20} />
                  </S.LocationInfoIcon>
                  <S.LocationInfoContent>
                    <S.LocationInfoLabel>주차</S.LocationInfoLabel>
                    <S.LocationInfoText>학교 내 주차장 이용 가능 (무료)</S.LocationInfoText>
                  </S.LocationInfoContent>
                </S.LocationInfoItem>
              </S.LocationInfoList>
            </S.LocationInfoCard>

            <S.LocationInfoCard>
              <S.LocationInfoTitle>교통편 안내</S.LocationInfoTitle>

              <S.LocationInfoItem>
                <S.LocationInfoIcon>
                  <Train size={20} />
                </S.LocationInfoIcon>
                <S.LocationInfoContent>
                  <S.LocationInfoLabel>지하철</S.LocationInfoLabel>
                  <S.TransportationGrid>
                    <S.TransportationItem>
                      <S.TransportationIcon color="#0052A4">양정역</S.TransportationIcon>
                      <S.TransportationText>(1호선) 2번 출구 도보 13분</S.TransportationText>
                    </S.TransportationItem>
                    <S.TransportationItem>
                      <S.TransportationIcon color="#996CAC">시청역</S.TransportationIcon>
                      <S.TransportationText>(1호선) 6번 출구 도보 2분</S.TransportationText>
                    </S.TransportationItem>
                    <S.TransportationItem>
                      <S.TransportationIcon color="#AA9872">거제해맞이역</S.TransportationIcon>
                      <S.TransportationText>(동해선) 3번 출구 도보 20분</S.TransportationText>
                    </S.TransportationItem>
                  </S.TransportationGrid>
                </S.LocationInfoContent>
              </S.LocationInfoItem>

              <S.LocationInfoItem>
                <S.LocationInfoIcon>
                  <Bus size={20} />
                </S.LocationInfoIcon>
                <S.LocationInfoContent>
                  <S.LocationInfoLabel>버스</S.LocationInfoLabel>
                  <S.TransportationGrid>
                    <S.TransportationItem>
                      <S.TransportationIcon color="#1E6FBA">양정역방면</S.TransportationIcon>
                      <S.TransportationText>5-1번, 20번, 57번, 62번, 63번, 141(심야)번</S.TransportationText>
                    </S.TransportationItem>
                    <S.TransportationItem>
                      <S.TransportationIcon color="#5CB94E">상수도사업본부</S.TransportationIcon>
                      <S.TransportationText>29번, 86번, 87번, 99번, 110-1번, 131번, 141번</S.TransportationText>
                    </S.TransportationItem>
                  </S.TransportationGrid>
                </S.LocationInfoContent>
              </S.LocationInfoItem>

              <S.LocationInfoItem>
                <S.LocationInfoIcon>
                  <Car size={20} />
                </S.LocationInfoIcon>
                <S.LocationInfoContent>
                  <S.LocationInfoLabel>자가용</S.LocationInfoLabel>
                  <S.LocationInfoText>
                    네비게이션에 '금성기술직업전문학교' 또는 '부산광역시 부산진구 연수로 15-1'로 검색하시면 됩니다.
                  </S.LocationInfoText>
                </S.LocationInfoContent>
              </S.LocationInfoItem>
            </S.LocationInfoCard>
          </S.LocationInfoContainer>
        </S.SectionInner>
      </S.ContentSection>
    </S.PageContainer>
  );
};

export default LocationPage;