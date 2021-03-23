/* eslint-disable no-restricted-syntax */
import Head from 'next/head';
import React, { useContext, useState, useEffect } from 'react';
import styled from '@emotion/styled';
import { darken, lighten } from 'polished';
import Link from 'next/link';
import { useMediaQuery } from 'react-responsive';

import Breadcrumbs from '../components/Breadcrumbs';
import { DataContext } from '../store/GlobalState';
import { ACTIONS, decreaseQuantity, increaseQuantity } from '../store/actions';
import EmptyCart from '../components/EmptyCart';
import CloseIcon from '../public/icons/close.svg';
import Button from '../components/Button';
import Popup from '../components/Popup';

import { getData } from '../utils/fetchData';
import Advantages from '../components/Advantages';
import mq from '../components/_media';

const Cart = () => {
  const { state, dispatch } = useContext(DataContext);

  const [total, setTotal] = useState(0);
  const isMobile = useMediaQuery({ maxWidth: 768 });

  useEffect(() => {
    const getTotal = () => {
      const price = state.cart.reduce((prev, current) => {
        return prev + (current.price * current.quantity);
      }, 0);

      setTotal(price);
    };

    getTotal();
  }, [state.cart]);

  useEffect(() => {
    const fetchNewCart = async () => {
      const cartLocal = JSON.parse(localStorage.getItem('__next__cart01__medequip')) || [];
      if (cartLocal.length > 0) {
        Promise.all(await cartLocal.reduce(async (promisesArr, item) => {
          const res = await getData(`product/${item.slug}`);
          const { id, title, images, price, inStock, slug } = res.product;
          const arr = await promisesArr;
          if (inStock > 0) {
            arr.push({
              id,
              title,
              images,
              price,
              slug,
              inStock,
              quantity: item.quantity > inStock ? 1 : item.quantity,
            });
          }
          return arr;
        }, Promise.resolve([])))
          .then((items) => {
            dispatch({ type: ACTIONS.ADD_CART, payload: items });
          })
          .catch((reason) => {
            console.log(reason);
          });
      }
    };
    fetchNewCart();
  }, []);

  return (
    <>
      <Head>
        <title>Карта товаров</title>
      </Head>
      <Breadcrumbs crumbs={{
        Главная: '/',
        Корзина: '/cart',
      }}
      />
      {state.cart.length === 0 ? <EmptyCart text="Сейчас ваша корзина пустая. Добавьте продукт чтобы его купить" />
        : (
          <div className="wrapper">
            <CartStyled>
              <h2>Корзина</h2>
              <ul className="grid-titles">
                <li>Имя продукта</li>
                <li className="hidden-sm">Количество</li>
                <li className="hidden-sm">Цена</li>
                <li className="hidden-sm">Удалить</li>
              </ul>

              {state.cart.map((item) => {
                return (
                  <div className="item" key={item.id}>
                    <div className="image-wrapper">
                      <div className="image">
                        <img src={item.images[0]} alt={item.title} />
                      </div>
                      <Link href={`/product/${item.slug}`}>
                        <a>
                          <p>{item.title}</p>
                        </a>
                      </Link>
                    </div>
                    {isMobile && (
                      <>
                        <div className="grid-title-item">Количество</div>
                        <div className="grid-title-item">Цена</div>
                        <div className="grid-title-item">Удалить</div>
                      </>
                    )}
                    <div className="count">
                      <div className="count-block unselectable">
                        <button
                          className="plus"
                          type="button"
                          onClick={() => dispatch(increaseQuantity(item.id, state.cart))}
                          disabled={item.quantity === item.inStock}
                        >
                          +
                        </button>
                        <div className="text-count"><span>{item.quantity}</span></div>
                        <button
                          className="minus"
                          type="button"
                          onClick={() => dispatch(decreaseQuantity(item.id, state.cart))}
                          disabled={item.quantity === 1}
                        >
                          −
                        </button>
                      </div>
                    </div>
                    <div className="price">
                      <b>${item.price}</b>
                    </div>
                    <div className="remove unselectable">
                      <Popup id={item.id} title={item.title}><span><CloseIcon /></span></Popup>
                    </div>
                  </div>
                );
              })}

              <BottomInfoStyled>
                <p>Стоимость доставки, налоги и скидки рассчитываются при оформлении заказа.</p>
                <div className="checkout-data">
                  <div className="price">
                    <span>Сумма: </span>
                    <strong>${total}</strong>
                  </div>
                  <Button>Купить</Button>
                </div>
              </BottomInfoStyled>

            </CartStyled>
            <Advantages />
          </div>
        )}
    </>
  );
};

const alignFlexbox = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
};

const BottomInfoStyled = styled.div(({ theme }) => ({
  display: 'grid',
  gridTemplateColumns: '1fr 1fr',
  marginBottom: 80,
  gap: 30,
  alignItems: 'center',
  marginTop: 34,
  [mq[2]]: {
    display: 'flex',
    flexDirection: 'column-reverse',
  },
  '& .checkout-data': {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    [mq[1]]: {
      flexDirection: 'column',
    },
  },
  '& button': {
    boxShadow: '0px 1px 25px -6px #2C3D98',
    border: 'none',
    paddingLeft: 72,
    paddingRight: 72,
  },
  '& p': {
    color: '#AFAFAF',
    paddingLeft: 30,
    [mq[2]]: {
      paddingLeft: 0,
    },
    [mq[1]]: {
      textAlign: 'center',
      paddingLeft: 0,
    },
  },
  '& .price': {
    display: 'flex',
    alignItems: 'center',
    marginRight: 42,
    [mq[1]]: {
      marginRight: 0,
      marginBottom: 18,
    },
    '& span': {
      fontSize: 18,
      [mq[1]]: {
        fontSize: 16,
      },
    },
    '& strong': {
      marginLeft: 16,
      fontSize: 28,
      color: theme.colors.secondary,
      [mq[1]]: {
        fontSize: 24,
      },
    },
  },
}));

const CartStyled = styled.section(({ theme }) => ({
  '& h2': {
    marginTop: theme.indent.h2Title,
    marginBottom: 38,
    fontSize: theme.typography.h2,
    textAlign: 'center',
  },
  '& .item': {
    display: 'grid',
    gridTemplateColumns: '6fr 2fr 2fr 2fr',
    gridTemplateRows: '1fr',
    gap: '30px',
    padding: '20px 0',
    borderBottom: 'solid 1px #DBEAFF',
    [mq[2]]: {
      gridTemplateColumns: '1fr 1fr 1fr',
      gridTemplateAreas: `"imageAndText imageAndText imageAndText"
      "countTitle priceTitle removeTitle"
      "count price remove"`,
      gap: 20,
    },
    '& .image-wrapper': {
      display: 'flex',
      alignItems: 'center',
      [mq[2]]: {
        gridArea: 'imageAndText',
      },
      '& .image': {
        position: 'relative',
        marginLeft: 32,
        [mq[1]]: {
          marginLeft: 16,
        },
        '&::before': {
          content: '""',
          position: 'absolute',
          background: theme.colors.secondaryLight,
          width: '100%',
          height: '100%',
          opacity: '0.1',
        },
        '& img': {
          minWidth: '146px',
          minHeight: '146px',
          maxWidth: '146px',
          maxHeight: '146px',
          [mq[1]]: {
            minWidth: '99px',
            minHeight: '120px',
            maxWidth: '99px',
            maxHeight: '120px',
          },
          objectFit: 'cover',
          display: 'block',
        },
      },
      '& p': {
        marginLeft: 20,
        marginRight: 30,
        [mq[1]]: {
          fontSize: 15,
          marginLeft: 12,
          marginRight: 16,
        },
      },
      '& a': {
        color: theme.colors.text,
        '&:hover': {
          textDecoration: 'underline',
        },
      },
    },
    '& .count': {
      ...alignFlexbox,
      [mq[2]]: {
        gridArea: 'count',
      },
      '& .count-block': {
        background: theme.colors.secondarySuperLight,
        width: 116,
        height: 42,
        borderRadius: 50,
        display: 'flex',
        alignItems: 'center',
        cursor: 'pointer',
        justifyContent: 'space-around',
        [mq[1]]: {
          width: 96,
          height: 38,
        },
      },
      '& .plus, .minus': {
        backgroundColor: theme.colors.secondaryLight,
        width: 28,
        height: 28,
        [mq[1]]: {
          width: 24,
          height: 24,
        },
        ...alignFlexbox,
        borderRadius: '100%',
        transition: '0.2s ease-in-out',
        position: 'relative',
        color: theme.colors.background,
        outline: 'none',
        '&:hover': {
          backgroundColor: `${darken(0.07, theme.colors.secondaryLight)}`,
        },
        '&:active': {
          top: 1,
        },
      },
    },
    '& .price': {
      ...alignFlexbox,
      [mq[2]]: {
        gridArea: 'price',
      },
      fontSize: 18,
      [mq[1]]: {
        fontSize: 16,
      },
    },
    '& .remove': {
      ...alignFlexbox,
      [mq[2]]: {
        gridArea: 'remove',
      },
      '& svg path': {
        fill: theme.colors.text,
        transition: '0.2s',
      },
      '& svg': {
        width: 24,
        height: 24,
        [mq[1]]: {
          width: 20,
          height: 20,
        },
        cursor: 'pointer',
        position: 'relative',
        '&:active': {
          top: 1,
        },
        '&:hover path': {
          fill: `${lighten(0.5, theme.colors.text)}`,
        },
      },
    },
  },
  '& .grid-titles': {
    display: 'grid',
    gridTemplateColumns: '6fr 2fr 2fr 2fr',
    gridTemplateRows: '1fr',
    gap: '30px',
    textAlign: 'center',
    listStyleType: 'none',
    padding: 0,
    background: theme.colors.secondarySuperLight,
    [mq[2]]: {
      gridTemplateColumns: '1fr',
    },
    '& li': {
      display: 'block',
      textTransform: 'uppercase',
      fontSize: 14,
      padding: '13px 0',
      '&:first-of-type': {
        textAlign: 'left',
        paddingLeft: 30,
        [mq[2]]: {
          textAlign: 'center',
          paddingLeft: 0,
        },
      },
    },
  },
  '& .grid-title-item': {
    textAlign: 'center',
    textTransform: 'uppercase',
    [mq[1]]: {
      fontSize: 13,
    },
  },
}));

export default Cart;
