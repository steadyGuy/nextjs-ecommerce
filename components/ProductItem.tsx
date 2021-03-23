import styled from '@emotion/styled';
import React, { useContext, useCallback } from 'react';
import Link from 'next/link';

import Button from './Button';
import ShoppingCart from '../public/icons/shopping-cart.svg';
import LinkIcon from '../public/icons/link.svg';
import { DataContext } from '../store/GlobalState';
import { addToCart } from '../store/actions';
import CartPopup from './CartPopup';
import mq from './_media';

const ProductItem = ({ product }) => {
  const { state, dispatch } = useContext(DataContext);
  const { cart } = state;

  const handleAddToCart = useCallback(
    () => {
      dispatch(addToCart(product, cart));
    },
    [product, cart],
  );


  return (
    <StyledProduct className="product">
      <div className="imgWrapper">
        <img src={product.images[0]} alt={product.title} />
        <Link href={`/product/${encodeURIComponent(product.slug)}`} passHref>
          <a>
            <IconListStyled className="icon-list">
              <LinkIcon />
            </IconListStyled>
          </a>
        </Link>
      </div>
      <div className="data-wrapper">
        <Link href={`/product/${product.slug}`} passHref>
          <a>
            <Title>{product.title}</Title>
          </a>
        </Link>
        <Price>${product.price}</Price>
        <CartPopup addToCartAction={handleAddToCart}>
          <Button><ShoppingCart />Добавить</Button>
        </CartPopup>
      </div>
    </StyledProduct>
  );
};

const IconListStyled = styled.div(({ theme }) => ({
  width: 36,
  height: 36,
  borderRadius: '100%',
  position: 'absolute',
  backgroundColor: theme.colors.background,
  top: 12,
  right: 12,
  zIndex: 1000,
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  transition: '0.2s ease-in-out',
  border: 'solid 1px #fff',
  visibility: 'hidden',
  opacity: 0,
  '&:hover': {
    backgroundColor: 'transparent',
    '& svg path': {
      fill: '#fff',
    },
  },
  '&:active': {
    top: 13,
  },
  '& svg path': {
    transition: '0.2s ease-in-out',
  },
}));

const StyledProduct = styled.div(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  margin: '0 auto',
  backgroundColor: theme.colors.background,
  border: 'solid 1px #E5E5E5',
  borderRadius: '0 0 25px 25px',
  position: 'relative',
  paddingBottom: 36,
  maxWidth: 400,
  [mq[2]]: {
    '& button': {
      padding: '14px 30px',
    },
  },
  '& .data-wrapper': {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%',
  },
  '& a': {
    textDecoration: 'none',
    textAlign: 'center',
    zIndex: 100,
  },
  '& .imgWrapper': {
    position: 'relative',
    '& img': {
      height: 258,
      width: '100%',
      [mq[4]]: {
        height: 324,
      },
      [mq[3]]: {
        height: 380,
      },
      [mq[2]]: {
        height: 310,
      },
      [mq[1]]: {
        height: 350,
      },
    },
    '&::before': {
      content: '""',
      position: 'absolute',
      width: '100%',
      height: 258,
      outline: 'solid 2px #fff',
      left: 0,
      top: 0,
      [mq[4]]: {
        height: 324,
      },
      [mq[3]]: {
        height: 380,
      },
      [mq[2]]: {
        height: 310,
      },
      [mq[1]]: {
        height: 350,
      },
    },
    '&:hover': {
      '&::after': {
        opacity: 0.7,
      },
      '& .icon-list': {
        visibility: 'visible',
        opacity: 1,
      },
    },
    '&::after': {
      content: '""',
      position: 'absolute',
      width: '100%',
      height: '100%',
      outline: 'solid 2px #fff',
      left: 0,
      top: 0,
      backgroundColor: theme.colors.secondaryLight,
      opacity: 0.1,
      transition: '0.2s ease-in-out',
    },
  },
}));

const Price = styled.p(({ theme }) => ({
  fontWeight: 'bold',
  fontSize: 18,
  color: theme.colors.primary,
  marginTop: 10,
  marginBottom: 16,
  [mq[3]]: {
    marginTop: 14,
    marginBottom: 24,
  },
  [mq[2]]: {
    marginTop: 8,
    marginBottom: 14,
  },
  [mq[1]]: {
    marginTop: 14,
    marginBottom: 24,
  },
}));

const Title = styled.p(({ theme }) => ({
  fontWeight: 500,
  margin: '0 10px',
  marginTop: 6,
  color: theme.colors.text,
  transition: '0.2s ease-in-out',
  lineHeight: '150%',
  [mq[2]]: {
    fontSize: 15,
  },
  [mq[1]]: {
    fontSize: 16,
  },
  '&:hover': {
    color: theme.colors.secondary,
  },
}));

export default ProductItem;
