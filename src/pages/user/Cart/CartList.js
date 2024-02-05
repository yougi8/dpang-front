import React, { useState, useEffect } from "react";
import data from "@data/user/UserCartData";
import CartItem from "./CartItem";
import styled from "styled-components";
import { GET_CartList } from "@api/cart";

const CartList = () => {
  const [cartItems, setCartItems] = useState(data);

  const getItemList = () => {
    GET_CartList()
      .then((data) => {
        console.log("cartItem data: ", data.data);
        setCartItems(data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    getItemList();
  }, []);

  const calculateTotalPrice = () => {
    let totalPrice = 0;
    cartItems.forEach((item) => {
      if (item.checked) {
        totalPrice += item.price * item.quantity;
      }
    });
    return totalPrice;
  };

  const updateQuantity = (itemId, quantity) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === itemId ? { ...item, quantity } : item
      )
    );
  };

  const updateChecked = (itemId, checked) => {
    setCartItems((prevItems) =>
      prevItems.map((prevItem) => {
        if (prevItem.id === itemId) {
          return {
            ...prevItem,
            checked: checked,
          };
        }
        console.log("장바구니 상품 선택:", cartItems);
        return prevItem;
      })
    );
  };

  const deleteItem = (itemId) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== itemId));
  };

  return (
    <Wrap>
      <Container>
        {cartItems.map((item) => (
          <CartItem
            key={item.itemId}
            item={item}
            updateQuantity={updateQuantity}
            updateChecked={updateChecked}
            deleteItem={deleteItem}
          />
        ))}
        <TotalPrice>
          <p className="cm-SBold16 col-Black">
            총 가격: {calculateTotalPrice()}원
          </p>
        </TotalPrice>
      </Container>
      <PriceBox>
        <p className="cm-SBold16 col-Navy">
          상품금액 {calculateTotalPrice()}원
        </p>
        <p className="cm-SBold16 col-Navy">+</p>
        <p className="cm-SBold16 col-Navy">배송비 3000원</p>
        <p className="cm-SBold16 col-Navy">=</p>
        <p className="cm-SBold16 col-Navy">
          주문 예상 금액 {calculateTotalPrice() + 3000}원
        </p>
      </PriceBox>
    </Wrap>
  );
};

export default CartList;

const Wrap = styled.div`
  width: 74.8125rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Container = styled.div`
  width: 74.8125rem;
  background: var(--light-grey, #f4f4f4);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2rem;
  padding: 4rem 0rem 4rem 0rem;
`;

const TotalPrice = styled.div`
  width: 74.8125rem;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1.2rem;
`;

const PriceBox = styled.div`
  width: 74.8125rem;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 11rem;
  margin-top: 2rem;
`;
