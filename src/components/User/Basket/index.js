import React, { useContext } from "react";
import { SlBasket } from "react-icons/sl";
import { Context } from "../../../context/context";
import BasketWrapper from "./BasketWrapper";

export const Basket = () => {
  const [data, setData, modal, setModal, onModal] = useContext(Context);
  const result = data.reduce((a, b) => a + b.qty, 0);
  const totalPrice = data.reduce((a, b) => a + b.qty * b.price, 0);

  return (
    <>
      {data.length > 0 && (
        <BasketWrapper>
          <div className="basket-row shadow">
            <div className="productPrice">
              <span>
                Your basket have <b>{result} product</b> on price{" "}
                <b>{totalPrice} sum</b>
              </span>
            </div>
            <div className="basketButton" onClick={() => onModal(modal)}>
              <div className="basketIcon">
                <SlBasket />
                <span>Basket</span>
              </div>
            </div>
          </div>
        </BasketWrapper>
      )}
    </>
  );
};
