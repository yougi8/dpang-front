import styled from "styled-components";
import React, { useState } from "react";
import CartList from "./CartList";
import Header from "@components/UserHeaderBar/Index";
import { useNavigate } from "react-router-dom";

const Index = () => {
  const [selectedItems, setSelectedItems] = useState([]);
  const navigate = useNavigate();
  const handleOrderSave = () => {
    console.log("주문 넘길게요 selectedItems: ", selectedItems);
    navigate(`/user/order`);
  };

  return (
    <>
      <Wrap>
        <Header />
        <Title className="cm-LBold30 col-DarkNavy">장바구니</Title>
        <InputSection>
          <CartList setSelectedItems={setSelectedItems} />
        </InputSection>
        <OrderButton onClick={handleOrderSave}>
          <p className="cm-SBold16 col-White">주문하기</p>
        </OrderButton>
      </Wrap>
    </>
  );
};

export default Index;

const Wrap = styled.div`
  width: 100vw;
  align-items: center;
  min-width: 1550px;
  display: flex;
  flex-direction: column;
`;

const Title = styled.div`
  display: flex;
  align-items: center;
  padding: 2.25rem 15.9375rem 2.25em 15.9375rem;
`;
const InputSection = styled.div`
  display: flex;
  min-height: calc(100vh - 30rem);
  box-sizing: border-box; // padding까지 합쳐서 width 설정하기
  flex-direction: column;
  align-items: center;
  gap: 2.3125rem;
  justify-content: center;
  padding: 2.25rem 15.9375rem 2.25em 15.9375rem;
`;
const OrderButton = styled.button`
  display: flex;
  width: 74.625rem;
  height: 4.1875rem;
  justify-content: center;
  align-items: center;
  gap: 0.3125rem;
  flex-shrink: 0;
  border-radius: 0.1875rem;
  border: 1px solid var(--semi-light-grey, #cfcfcf);
  background: var(--navy, #043277);
  margin-bottom: 2rem;
`;
