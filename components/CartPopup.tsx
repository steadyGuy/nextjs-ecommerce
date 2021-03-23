/* eslint-disable max-len */
/** @jsxRuntime classic /
/* @jsx jsx */
import { jsx } from '@emotion/react';
import styled from '@emotion/styled';
import LibPopup from 'reactjs-popup';
import { darken, lighten, rgba } from 'polished';
import React, { useContext, useEffect, useState } from 'react';
//import 'reactjs-popup/dist/index.css';

import CloseIcon from '../public/icons/close.svg';
import Button from './Button';
import { DataContext } from '../store/GlobalState';
import Link from 'next/link';
import Popup from './Popup';
import ShoppingCart from '../public/icons/shopping-cart.svg';
import Notify from './Notify';
import { ACTIONS } from '../store/actions';

const CartPopup = ({ children, addToCartAction, offSliderSwipes = {} }) => {
  // swipe: false,
  // swipeToSlide: false,
  // touchMove: false,
  // draggable: false,
  const { state, dispatch } = useContext(DataContext);
  const contentStyle = { margin: 0 };

  const [total, setTotal] = useState(0);

  useEffect(() => {
    const getTotal = () => {
      const price = state.cart.reduce((prev, current) => {
        return prev + (current.price * current.quantity);
      }, 0);

      setTotal(price);
    };

    getTotal();
  }, [state.cart]);

  return (
    <StyledPopup
      trigger={children}
      modal
      nested
      onOpen={addToCartAction}
      position="center center"
      {...{ contentStyle }}
    >
      {(close) => (
        <div className="modal">
          <div className="header">
            <div><span>Карта товаров</span></div>
            <div className="close" onClick={close} tabIndex={-1}>
              <CloseIcon />
            </div>
          </div>
          <div className="content">
            {state.cart && state.cart.map((item) => {
              return (
                <div className="item" key={item.id}>
                  <div className="image" css={{ backgroundImage: `url('${item.images[0]}')` }} />
                  <div className="data">
                    <div className="title">
                      <Link href={`/product/${item.slug}`}>
                        <a>
                          {item.title}
                        </a>
                      </Link>
                      <div className="remove unselectable">
                        <Popup id={item.id} title={item.title}><CloseIcon /></Popup>
                      </div>
                    </div>
                    <p className="count">количество: {item.quantity}</p>
                    <strong className="price">$ {item.price}</strong>
                  </div>
                </div>
              );
            })}
          </div>
          <BottomInfoStyled>
            <div className="price">
              <span>Всего: </span>
              <strong>${total}</strong>
            </div>
          </BottomInfoStyled>
          <ButtonsStyled>
            <Link href="/cart">
              <a tabIndex={-1}>
                <Button><ShoppingCart />Корзина</Button>
              </a>
            </Link>
            <Link href="/buy">
              <a tabIndex={-1}>
                <Button clickHandler={() => { close(); }}>
                  Купить
                </Button>
              </a>
            </Link>
          </ButtonsStyled>
        </div>
      )}
    </StyledPopup>
  );
};

const ButtonsStyled = styled.div(({ theme }) => ({
  display: 'flex',
  justifyContent: 'center',
  padding: '0 12px',
  fontSize: 14,
  marginTop: 26,
  '& button': {
    padding: '12px 32px',
    '&:last-child': {
      marginLeft: 14,
      boxShadow: '0px 1px 25px -6px #2C3D98',
      border: 'none',
    },
  },
}));

const StyledPopup = styled(LibPopup)`
 &-overlay {
  background-color: ${({ theme }) => rgba(theme.colors.text, 0.5)};
  display: flex;
  justify-content: flex-end;
  margin: 0;
  .modal {
    margin: 0;
    width: 320px;
    height: 100vh;
    font-size: 16px;
    background-color: ${({ theme }) => theme.colors.background};
  }
  .modal .header {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 14px 12px;
    background-color: ${({ theme }) => theme.colors.primary};
    .close {
      cursor: pointer;
      display: block;
      padding: 2px 5px;
      line-height: 20px;
      font-size: 4px;
      outline: none;
      display: flex;
      align-items: center;
      svg {
        width: 18px;
        height: 18px;
        fill: ${({ theme }) => theme.colors.background};
      }
    }
    span {
      color: ${({ theme }) => theme.colors.background};
      font-size: 14px;
      font-weight: normal;
      text-transform: uppercase;
    }
  }
  .modal > .content {
    width: 100%;
    padding: 0 12px;
    padding-top: 20px;
    max-height: 500px;
    overflow-y: auto;
    .item {
      display: flex;
      margin-top: 16px;
      :first-of-type {
        border-top: 1px solid ${({ theme }) => theme.colors.secondarySuperLight};
        padding-top: 20px;
        margin: 0;
      }
      :last-child {
        border-bottom: 1px solid ${({ theme }) => theme.colors.secondarySuperLight};
        padding-bottom: 20px;
      }
      .image {
        max-width: 64px;
        max-height: 80px;
        min-width: 64px;
        min-height: 80px;
        position: relative;
        border-radius: 5px;
        background-size: cover;
        ::before {
          content: '';
          position: absolute;
          width: 100%;
          height: 100%;
          background-color: ${({ theme }) => theme.colors.secondaryLight};
          border-radius: 5px;
          opacity: 0.1;
          border: solid 1px #F3F3F3;
        }
      }
      .data {
        padding-left: 12px;
        font-size: 12px;
        width: 100%;
        .title {
          display: flex;
          align-items: center;
          justify-content: space-between;
        }
        a {
          display: block;
          width: '100%';
          color: ${({ theme }) => theme.colors.text};
          font-size: 13px;
          line-height: 19px;
          :hover {
            text-decoration: underline;
          }
        }
        .remove {
          margin-left: 10px;
          svg path {
            fill: ${({ theme }) => theme.colors.text};
            transition: 0.2s;
          }
          svg {
            width: 13px;
            height: 13px;
            cursor: pointer;
            position: relative;
            :active {
              top: 1px;
            }
            :hover path {
              fill: ${({ theme }) => lighten(0.5, theme.colors.text)};
            }
          }
        }
        .count {
          color: #C0C0C0;
          padding: 0;
          margin: 0;
          line-height: 13px;
        }
        .price {
          font-size: 13px;
          display: block;
          margin-top: 8px;
        }
      }
    }
  }
  @keyframes anvil {
  0% {
    transform: scale(1) translateY(0px);
    opacity: 0;
    box-shadow: 0 0 0 rgba(241, 241, 241, 0);
  }
  1% {
    transform: scale(0.96) translateY(10px);
    opacity: 0;
    box-shadow: 0 0 0 rgba(241, 241, 241, 0);
  }
  100% {
    transform: scale(1) translateY(0px);
    opacity: 1;
    box-shadow: 0 0 500px rgba(241, 241, 241, 0);
  }
}
.popup-content {
  -webkit-animation: anvil 0.3s cubic-bezier(0.38, 0.1, 0.36, 0.9) forwards;
}
} 
`;

const BottomInfoStyled = styled.div(({ theme }) => ({
  width: '100%',
  '& button': {
    boxShadow: '0px 1px 25px -6px #2C3D98',
    border: 'none',
  },
  '& .price': {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    marginTop: 12,
    marginRight: 12,
    '& span': {
      fontSize: 18,
      fontWeight: 'bold',
    },
    '& strong': {
      marginLeft: 16,
      fontSize: 24,
      color: theme.colors.primary,
    },
  },
}));

export default CartPopup;
