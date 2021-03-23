import styled from '@emotion/styled';
import React from 'react';
import { useMediaQuery } from 'react-responsive';
import Logo from './Logo';

import PaperPlaneIcon from '../public/icons/paperPlane.svg';
import LocationIcon from '../public/icons/location.svg';
import Link from 'next/link';
import SocialIcon from './SocialIcon';
import mq from './_media';

const Footer = () => {
  const isTabletOrMobile = useMediaQuery({ maxWidth: 768 });
  return (
    <FooterStyled>
      <div className="wrapper">
        <div className="left-data">
          <div className="logo-data">
            <Logo position="bottom" />
            <p>
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.
              Velit officia consequat duis enim velit mollit.
              Exercitation veniam consequat sunt nostrud amet.
            </p>
          </div>
          <ul className="location-data">
            <li><LocationIcon />4517 Washington Ave. Manchester, Kentucky 39495</li>
            <li><PaperPlaneIcon />nevaeh.simmons@example.com</li>
          </ul>
          {!isTabletOrMobile && <span className="corp">© 2021 medequip. steadyguy</span>}
        </div>
        <ListsStyled>
          <ul className="list-1">
            <li><Link href="/"><a>Новые продукты</a></Link></li>
            <li><Link href="/"><a>Контакты</a></Link></li>
            <li><Link href="/"><a>Оплата & доставка</a></Link></li>
            <li><Link href="/about"><a>О нас</a></Link></li>
            <li><Link href="/"><a>Другое</a></Link></li>
          </ul>
          <ul className="list-2">
            <li><Link href="/"><a>Мои заказы</a></Link></li>
            <li><Link href="/cart"><a>Корзина</a></Link></li>
            <li><Link href="/"><a>Мой кабинет</a></Link></li>
            <li><Link href="/"><a>Мои возвраты</a></Link></li>
          </ul>
        </ListsStyled>
        <SocialsStyled>
          <SocialIcon iconName="twitter" />
          <SocialIcon iconName="facebook" />
          <SocialIcon iconName="youtube" />
          <SocialIcon iconName="vk" />
        </SocialsStyled>
        {isTabletOrMobile && <span className="corp">© 2021 medequip. steadyguy</span>}
      </div>
    </FooterStyled>
  );
};

const FooterStyled = styled.footer(({ theme }) => ({
  background: 'linear-gradient(103.04deg, #788CF4 12.65%, #5776C8 43.56%, #4970A8 61.48%), #785353',
  display: 'block',
  color: '#fff',
  fontWeight: 300,
  padding: '72px 0',
  marginTop: 80,
  '& .wrapper': {
    display: 'grid',
    gridTemplateColumns: '4fr 6fr 2fr',
    gap: 30,
    gridTemplateRows: '1fr',
    [mq[2]]: {
      display: 'flex',
      flexDirection: 'column',
      gap: 0,
    },
  },
  [mq[2]]: {
    '& .left-data': {
      display: 'flex',
      justifyContent: 'space-around',
      '& .logo-data': {
        marginRight: 40,
        width: '100%',
      },
      '& .location-data': {
        width: '100%',
      },
    },
  },
  [mq[1]]: {
    '& .left-data': {
      display: 'flex',
      flexDirection: 'column',
      fontSize: 15,
      alignItems: 'center',
      '& .logo-data': {
        marginRight: 0,
        margin: '0 auto',
      },
    },
  },
  '& p': {
    marginTop: 15,
  },
  '& ul': {
    padding: 0,
    margin: 0,
    listStyleType: 'none',
  },
  '& .location-data': {
    width: 280,
    fontSize: 15,
    marginLeft: 6,
    '& svg': {
      marginRight: 8,
    },
    '& li': {
      marginTop: 18,
      lineHeight: '24px',
      '&:first-of-type': {
        marginTop: 28,
      },
    },
  },
  '& .corp': {
    display: 'block',
    marginTop: 72,
    textTransform: 'uppercase',
    fontSize: 14,
    [mq[2]]: {
      textAlign: 'center',
      marginTop: 24,
    },
  },
}));

const ListsStyled = styled.div(({ theme }) => ({
  display: 'flex',
  justifyContent: 'space-around',
  marginTop: 34,
  [mq[2]]: {
    justifyContent: 'center',
    marginTop: 60,
    marginBottom: 60,
    '& .list-1': {
      marginRight: 48,
    },
  },
  [mq[1]]: {
    '& .list-1': {
      marginRight: 0,
    },
  },
  '& li': {
    display: 'block',
    paddingLeft: 20,
    marginTop: 30,
    lineHeight: '21px',
    '&:first-of-type': {
      marginTop: 0,
    },
  },
  '& .list-1': {
    '& li': {
      paddingLeft: 0,
    },
  },
  '& a': {
    color: '#fff',
    display: 'inline-block',
    fontWeight: 'bold',
    textTransform: 'uppercase',
    [mq[3]]: {
      fontSize: 15,
    },
    '&:hover': {
      textDecoration: 'underline',
    },
  },
}));

const SocialsStyled = styled.div(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  [mq[2]]: {
    flexDirection: 'row',
  },
  '& > div': {
    width: 40,
    height: 40,
    borderRadius: '100%',
    marginTop: 36,
    [mq[2]]: {
      marginTop: 0,
      marginLeft: 36,
      '&:first-of-type': {
        marginLeft: 0,
      },
    },
    '&:first-of-type': {
      marginTop: 0,
    },
    '& svg': {
      width: 19,
      height: 19,
      fill: '#4970A8',
    },
  },
}));

export default Footer;
