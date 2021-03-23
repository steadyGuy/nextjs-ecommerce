import styled from '@emotion/styled';
import React, { FC, MouseEventHandler, ReactNode } from 'react'

interface ButtonProps {
  children: ReactNode | FC<React.SVGAttributes<SVGElement>>;
  clickHandler?: MouseEventHandler<HTMLButtonElement>;
}

const Button: FC<ButtonProps> = React.forwardRef(({ children, clickHandler, ...props }:
  ButtonProps, ref): React.ReactElement => {
  return (
    <ButtonStyled type="button" onClick={clickHandler} {...props} ref={ref}>
      {children}
    </ButtonStyled>
  );
});

const ButtonStyled = styled.button(({ theme }) => ({
  textTransform: 'uppercase',
  textDecoration: 'none',
  color: theme.colors.background,
  backgroundColor: theme.colors.primary,
  padding: '14px 42px',
  borderRadius: 100,
  fontWeight: 300,
  position: 'relative',
  border: 'solid 1px #fff',
  zIndex: 100,
  cursor: 'pointer',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  '&:hover': {
    background: 'linear-gradient(90deg, #4970A8 0%, #8497F9 108%)',
    color: '#fff',
  },
  '&:active': {
    top: 1,
    outline: 'none',
    background: theme.colors.secondary,
  },
  '&:focus': {
    outline: 'none',
    border: `solid 1px ${theme.colors.secondary}`,
  },
  '& svg': {
    width: '18px',
    height: '18px',
    marginRight: 12,
    fill: theme.colors.background,
  },
}));

export default Button;
