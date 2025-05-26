import React from 'react';
import { Helmet } from 'react-helmet';
import { MapPin, Clock, Phone, Car, Bus, Train, Info, Mail } from 'lucide-react';
import SubpageHeader from '../../components/SubpageHeader/SubpageHeader';
import * as S from './style';

const LocationPage = () => {
  const breadcrumbs = [
    { name: '학교 소개', link: '/about' },
    { name: '오시는길', link: null }
  ];

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
            {/* 부산진구 연수로 15-1 위치 */}
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3262.1889292136304!2d129.04941247670993!3d35.15252397275693!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3568eb7f51f99f3d%3A0x8d30f4d1ea8bf8b1!2s15-1%20Yeonsu-ro%2C%20Busanjin-gu%2C%20Busan!5e0!3m2!1sen!2skr!4v1716367767097!5m2!1sen!2skr" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen="" 
              loading="lazy"
              title="금성기술직업전문학교 위치"
              aria-label="금성기술직업전문학교 위치 - 부산광역시 부산진구 연수로 15-1, 5층"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
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
                      <S.TransportationIcon color="#AA9872">가재맛이역</S.TransportationIcon>
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
