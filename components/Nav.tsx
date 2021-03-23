import styled from '@emotion/styled';
import Link from 'next/link';
import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import ToggleMenu from './ToggleMenu';
import { useMediaQuery } from 'react-responsive';

import ArrowDownIcon from '../public/icons/arrowDown.svg';
import BurgerMenu from './BurgerMenu';
import mq from './_media';
import RightIcons from './RightIcons';

const Nav = ({ isActive }) => {
  const [openMenu, setOpenMenu] = useState(false);
  const isMobile = useMediaQuery({ maxWidth: 768 });

  if (isMobile) {
    return (
      <>
        <BurgerMenu open={openMenu} setOpen={setOpenMenu} />
        <ListStyled open={openMenu}>
          <div className="mobile-menu">
            <RightIcons isActive={isActive} />
            <ul className="list-mobile">
              <li className={`item ${isActive('/')}`}>
                <Link href="/"><a>Главная</a></Link>
              </li>
              <ToggleMenu>
                <li className={`item with-icon ${isActive('/catalog')}`}>
                  <span>Каталог <ArrowDownIcon /></span>
                </li>
              </ToggleMenu>
              <li className={`item ${isActive('/contacts')}`}>
                <Link href="/contacts"><a>Контакты</a></Link>
              </li>
              <li className={`item ${isActive('/about')}`}>
                <Link href="/about"><a>О нас</a></Link>
              </li>
            </ul>
          </div>
        </ListStyled>
      </>
    );
  }

  return (
    <ListStyled>
      <ul className="list">
        <li className={`item ${isActive('/')}`}>
          <Link href="/"><a>Главная</a></Link>
        </li>
        <ToggleMenu>
          <li className={`item with-icon ${isActive('/catalog')}`}>
            <span>Каталог <ArrowDownIcon /></span>
          </li>
        </ToggleMenu>
        <li className={`item ${isActive('/contacts')}`}>
          <Link href="/contacts"><a>Контакты</a></Link>
        </li>
        <li className={`item ${isActive('/about')}`}>
          <Link href="/about"><a>О нас</a></Link>
        </li>
      </ul>
    </ListStyled>
  );
};

const ListStyled = styled.nav(({ theme, open }) => ({
  [mq[2]]: {
    position: 'absolute',
    background: theme.colors.background,
    top: 64,
    left: 0,
    zIndex: 100,
    width: '100%',
    transform: `${open ? 'translateX(0)' : 'translateX(-100%)'}`,
    transition: 'transform 0.3s ease-in-out',
    paddingTop: 24,
  },
  position: 'relative',
  '& .list': {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    listStyleType: 'none',
    padding: 0,
    margin: 0,
    height: '100%',
  },
  '& .list, .mobile-menu .list-mobile': {
    '& .with-icon': {
      '& span': {
        display: 'flex',
        alignItems: 'center',
        '& svg': {
          fill: '#7C7C7C',
          marginLeft: 6,
          position: 'relative',
          top: 1,
          transform: 'rotate(180deg)',
          transition: '0.3s',
        },
      },
      '&:hover': {
        '& svg': {
          transform: 'rotate(0deg)',
        },
      },
    },
    '& .item': {
      marginLeft: 24,
      fontWeight: 'bold',
      textTransform: 'uppercase',
      cursor: 'pointer',
      transition: '0.3s',
      [mq[3]]: {
        fontSize: 15,
      },
      '&:first-of-type': {
        marginLeft: 0,
      },
      '& a': {
        textDecoration: 'none',
        color: theme.colors.text,
      },
      '&:hover': {
        color: '#7C7C7C',
      },
    },
    '& .active': {
      '& a': {
        color: theme.colors.primary,
      },
    },
  },
  '& .mobile-menu': {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    paddingBottom: 16,
    '& .list-mobile': {
      width: '100%',
      textAlign: 'center',
      padding: 0,
      '& .with-icon': {
        '& span': {
          justifyContent: 'center',
          padding: '12px 0',
          marginLeft: 12,
        },
      },
      '& .item': {
        display: 'block',
        margin: 0,
        '& a': {
          display: 'block',
          padding: '12px 0',
        },
        '&:hover': {
          backgroundColor: theme.colors.secondarySuperLight,
        },
      },
    },
  },
}));

export default Nav;
