import styled from '@emotion/styled';
import Link from 'next/link';
import React, { FC } from 'react'
import Button from './Button';

interface EmptyCartProps {
  text: string;
}

const EmptyCart: FC<EmptyCartProps> = ({ text }: EmptyCartProps): React.ReactElement => {
  return (
    <div className="wrapper">
      <EmptyCartStyled>
        <h2>Корзина</h2>
        <p>{text}</p>
        <Link href="/">
          <a>
            <Button>Продолжить покупки</Button>
          </a>
        </Link>
      </EmptyCartStyled>
    </div>
  );
};

const EmptyCartStyled = styled.div(({ theme }) => ({
  textAlign: 'center',
  margin: '200px 0',
  '& h2': {
    fontSize: theme.typography.h2,
    marginBottom: 18,
  },
  '& p': {
    marginBottom: 38,
  },
  '& button': {
    margin: '0 auto',
    boxShadow: '0px 1px 25px -6px #2C3D98',
    border: 'none',
  },
  '& a': {
    display: 'inline-block',
  },
}));

export default EmptyCart;
