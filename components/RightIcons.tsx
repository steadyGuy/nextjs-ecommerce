import styled from '@emotion/styled';
import Link from 'next/link';
import React, { useContext, useState } from 'react';

import SearchIcon from '../public/icons/search.svg';
import ShoppingCart from '../public/icons/shopping-cart.svg';
import CabinetIcon from '../public/icons/user.svg';
import { DataContext } from '../store/GlobalState';
import SearchPopup from './SearchPopup';
import mq from './_media';

const RightIcons = ({ isActive }) => {
  const { state } = useContext(DataContext);
  const [searchPopupState, setSearchPopupState] = useState(false);
  const handleSearchPopup = () => {
    setSearchPopupState(!searchPopupState);
  };

  return (
    <>
      <SearchPopup visible={searchPopupState} closeHandler={handleSearchPopup} />
      <RightStyledIcons>
        <div className={searchPopupState ? 'active' : ''} onClick={handleSearchPopup}><SearchIcon /></div>
        <div className={`${isActive('/signin')}`}>
          <Link href="/signin">
            <a><CabinetIcon /></a>
          </Link>
        </div>
        <div className={`shopping-cart ${isActive('/cart')}`}>
          <Link href="/cart">
            <a>
              <ShoppingCart />
              <div className="data"><span>{state.cart.length}</span></div>
            </a>
          </Link>
        </div>
      </RightStyledIcons>
    </>
  );
};

const RightStyledIcons = styled.div(({ theme }) => ({
  display: 'flex',
  justifyContent: 'flex-end',
  alignItems: 'center',
  position: 'relative',
  top: 2,
  '& div': {
    marginLeft: 20,
    cursor: 'pointer',
    [mq[2]]: {
      marginBottom: 24,
      '&:first-of-type': {
        marginLeft: 0,
      },
    },
  },
  '& .shopping-cart': {
    position: 'relative',
    '& .data': {
      position: 'absolute',
      top: -10,
      right: -10,
      backgroundColor: theme.colors.primary,
      width: 16,
      height: 16,
      borderRadius: 30,
      verticalAlign: 'middle',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      '& span': {
        position: 'relative',
        top: 1.5,
        left: 0.5,
        fontSize: 12,
        fontWeight: 300,
        color: '#fff',
      },
    },
  },
  '& .active': {
    '& svg path': {
      fill: theme.colors.primary,
    },
  },
  '& svg': {
    width: 20,
    height: 20,
  },
}));

export default RightIcons;