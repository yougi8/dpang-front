import React from 'react';
import styled from 'styled-components';
import Header from '../../../components/common/HeaderBar/Index';
import EventBanner from '../mainPage/EventBanner';
import ItemSection from '../mainPage/ItemSection';
import Footer from '../../../components/common/Footer/Index';

const MyPage = () => {
    return (
        <>
            <Wrap>
                {/* 헤더 */}
                <Header/>
                {/* 이벤트 배너 */}
                <EventBanner/>
                {/* 상품 슬라이더 모음 */}
                <Section>
                    <ItemSection title="이 상품 어때요?" filter="hot"/>
                    <ItemSection title="지금 가장 핫한 상품🔥" filter="hot"/>
                    <ItemSection title="록시땅 원데이 찬스✨" filter="event"/>
                </Section>
                <Footer />
            </Wrap>
        </>
    );
};

export default MyPage;

const Wrap = styled.div`
    width: 100vw;
    align-items: center;
    min-width: 1550px;
`;
const Section = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    padding-top: 4rem;

`;
