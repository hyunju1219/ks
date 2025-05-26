import React from 'react';
import { Helmet } from 'react-helmet';
import { Phone, Mail, MapPin } from 'lucide-react';
import SubpageHeader from '../../components/SubpageHeader/SubpageHeader';
import ContactForm from '../../components/ContactForm/ContactForm';
import * as S from './style';

const ContactPage = () => {
  const breadcrumbs = [
    { name: '고객지원', link: '/notice' },
    { name: '문의하기', link: null }
  ];

  return (
    <S.PageContainer>
      <Helmet>
        <title>문의하기 - 금성기술직업전문학교</title>
        <meta name="description" content="금성기술직업전문학교에 문의하세요. 교육과정, 입학, 취업 상담 등 다양한 문의를 받고 있습니다." />
      </Helmet>
      
      <SubpageHeader 
        title="문의하기" 
        subtitle="금성기술직업전문학교에 궁금한 점이 있으시면 언제든지 문의해 주세요"
        breadcrumbs={breadcrumbs}
      />
      
      <S.ContentSection>
        <S.SectionInner>
          <S.ContactFormContainer>
            <S.ContactInfo>
              <S.ContactGrid>
                <S.ContactItem>
                  <S.ContactIcon>
                    <Phone size={24} />
                  </S.ContactIcon>
                  <S.ContactLabel>전화</S.ContactLabel>
                  <S.ContactText>
                    <S.ContactLink href="tel:051-806-2200">051-806-2200</S.ContactLink>
                  </S.ContactText>
                  <S.ContactText>평일 09:00 - 18:00 (주말/공휴일 제외)</S.ContactText>
                </S.ContactItem>
                
                <S.ContactItem>
                  <S.ContactIcon>
                    <Mail size={24} />
                  </S.ContactIcon>
                  <S.ContactLabel>이메일</S.ContactLabel>
                  <S.ContactText>
                    <S.ContactLink href="mailto:kstg35@naver.com">kstg35@naver.com</S.ContactLink>
                  </S.ContactText>
                  <S.ContactText>24시간 접수 가능</S.ContactText>
                </S.ContactItem>
                
                <S.ContactItem>
                  <S.ContactIcon>
                    <MapPin size={24} />
                  </S.ContactIcon>
                  <S.ContactLabel>주소</S.ContactLabel>
                  <S.ContactText>부산광역시 부산진구 연수로 15-1, 5층</S.ContactText>
                  <S.ContactText>금성기술직업전문학교</S.ContactText>
                </S.ContactItem>
              </S.ContactGrid>
            </S.ContactInfo>
            
            <S.SectionTitle>문의하기</S.SectionTitle>
            <S.SectionSubtitle>아래 양식을 작성하시면 담당자가 확인 후 빠른 시일 내에 답변 드리겠습니다</S.SectionSubtitle>
            
            <ContactForm />
          </S.ContactFormContainer>
        </S.SectionInner>
      </S.ContentSection>
    </S.PageContainer>
  );
};

export default ContactPage;
