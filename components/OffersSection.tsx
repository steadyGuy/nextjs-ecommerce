/** @jsxRuntime classic /
/* @jsx jsx */
import { jsx } from '@emotion/react';
import styled from '@emotion/styled';
import Link from 'next/link';

import Button from './Button';
import CollectionIcon from '../public/icons/collection.svg';
import mq from './_media';
import { darken } from 'polished';

const OffersSection = () => {
  return (
    <OffersSectionStyled>
      <div className="left-side">
        <div className="box-1" css={{ backgroundImage: 'url(\'/images/offers/img-1.png\')' }}>
          <article>
            <h3>Испаритель озона с ароматом горячего давления</h3>
            <p>
              Благодаря круглосуточной трансляции в режиме реального времени,
              универсальной магнитной подставке, оповещениям о людях.
            </p>
            <Link href="/">
              <a>
                <Button><CollectionIcon />Смотреть коллекцию</Button>
              </a>
            </Link>
          </article>
        </div>
        <div className="box-2" css={{ backgroundImage: 'url(\'/images/offers/img-2.png\')' }}>
          <div className="box-wrapper">
            <div className="special-title">
              <h2>20% скидка на антисептики</h2>
            </div>
            <div className="images">
              <Link href="/">
                <a>
                  <div className="arrow-down" />
                  <img src="/images/offers/bottle1.png" alt="Спец антисептик 1" />
                </a>
              </Link>
              <Link href="/">
                <a>
                  <div className="arrow-down" />
                  <img src="/images/offers/bottle2.png" alt="Спец антисептик 2" />
                </a>
              </Link>
              <Link href="/">
                <a>
                  <div className="arrow-down" />
                  <img src="/images/offers/bottle3.png" alt="Спец антисептик 3" />
                </a>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="right-side" css={{ backgroundImage: 'url(\'/images/offers/img-3.png\')' }}>
        <article>
          <h2>Сохраните до <span>20%</span></h2>
          <p>На дезинфицирующих средствах</p>
          <Button>Купить сейчас</Button>
          <div className="bg-effect" css={{ backgroundImage: 'url(\'/images/offers/side-effect.png\')' }} />
          <img src="/images/offers/specialBottle.png" alt="Специальный антисептик" />
        </article>
      </div>
    </OffersSectionStyled>
  );
};

const OffersSectionStyled = styled.section(({ theme }) => ({
  display: 'grid',
  gridTemplateColumns: '8fr 6fr',
  marginTop: theme.indent.section,
  color: theme.colors.background,
  gridTemplateRows: '1fr',
  [mq[3]]: {
    gridTemplateColumns: '1fr',
  },
  '& article, .box-wrapper': {
    zIndex: 1,
    position: 'relative',
  },
  '& button': {
    backgroundColor: theme.colors.background,
    color: theme.colors.text,
    padding: '16px 42px',
    transition: '0.3s',
    [mq[1]]: {
      padding: '14px 24px',
      fontSize: '15px',
    },
    '& svg': {
      fill: theme.colors.text,
      transition: '0.3s',
    },
    '&:hover': {
      background: 'transparent',
      color: theme.colors.background,
      '& svg': {
        fill: theme.colors.background,
      },
    },
    '&:active': {
      borderColor: theme.colors.background,
    },
    '&:focus': {
      borderColor: darken(0.1, theme.colors.background),
    },
  },
  '& .left-side': {
    display: 'flex',
    flexDirection: 'column',
    '& .box-1, .box-2': {
      backgroundSize: 'cover',
      position: 'relative',
      '&::before': {
        content: '""',
        position: 'absolute',
        width: '100%',
        height: '100%',
        zIndex: 1,
        top: 0,
        left: 0,
      },
    },
    '& .box-1': {
      minHeight: 277,
      display: 'flex',
      flexGrow: 1,
      justifyContent: 'center',
      padding: '60px 96px',
      alignItems: 'center',
      [mq[2]]: {
        padding: '38px 38px',
      },
      [mq[1]]: {
        padding: '24px 20px',
      },
      '&::before': {
        backgroundColor: theme.colors.secondaryLight,
        opacity: 0.92,
      },
      '& h3': {
        fontSize: theme.typography.h3,
      },
      '& p': {
        maxWidth: 585,
        fontWeight: 400,
        lineHeight: '24px',
        letterSpacing: '0.5px',
        marginTop: 15,
        marginBottom: 30,
      },
    },
    '& .box-2': {
      '&::before': {
        backgroundColor: '#8CB6FF',
        opacity: 0.25,
      },
      '& .special-title': {
        backgroundColor: theme.colors.background,
        textAlign: 'center',
        '& h2': {
          fontSize: theme.typography.h2,
          color: theme.colors.text,
          lineHeight: '47.81px',
          padding: '6px 0',
          [mq[2]]: {
            padding: '6px 12px',
          },
          [mq[1]]: {
            fontSize: theme.typography.h3,
            lineHeight: '36px',
          },
        },
      },
      '& .images': {
        display: 'flex',
        alignItems: 'flex-end',
        justifyContent: 'center',
        overflowY: 'hidden',
        height: 277,
        [mq[2]]: {
          height: 200,
        },
        '& a': {
          display: 'block',
          position: 'relative',
          textAlign: 'center',
          maxHeight: 277,
          [mq[2]]: {
            height: 200,
          },
          '&:hover': {
            '& img': {
              transform: 'translateY(4%)',
              [mq[4]]: {
                transform: 'translateY(18%)',
              },
              [mq[3]]: {
                transform: 'translateY(4%)',
              },
              [mq[2]]: {
                transform: 'translateY(0%)',
              },
              [mq[1]]: {
                transform: 'translateY(20%)',
              },
            },
            '& .arrow-down': {
              opacity: 1,
            },
          },
          '& .arrow-down': {
            display: 'inline-block',
            width: 0,
            height: 0,
            borderLeft: '17px solid transparent',
            borderRight: '17px solid transparent',
            borderTop: `17px solid ${theme.colors.background}`,
            opacity: 0,
            transition: '0.3s',
          },
        },
        '& img': {
          minHeight: 340,
          transition: '0.3s',
          transform: 'translateY(10%)',
          [mq[4]]: {
            minHeight: 300,
            transform: 'translateY(25%)',
          },
          [mq[3]]: {
            minHeight: 340,
            transform: 'translateY(10%)',
          },
          [mq[2]]: {
            minHeight: 220,
            transform: 'translateY(8%)',
          },
          [mq[1]]: {
            minHeight: 180,
            transform: 'translateY(35%)',
          },
        },
      },
    },
  },
  '& .right-side': {
    backgroundSize: 'cover',
    position: 'relative',
    padding: '0 70px',
    paddingTop: 58,
    overflow: 'hidden',
    [mq[4]]: {
      padding: '0 40px',
      paddingTop: 58,
    },
    [mq[1]]: {
      padding: '0 20px',
      paddingTop: 58,
    },
    '&::before': {
      content: '""',
      position: 'absolute',
      width: '100%',
      height: '100%',
      zIndex: 1,
      top: 0,
      left: 0,
      backgroundColor: theme.colors.primary,
      opacity: '0.5',
    },
    '& h2': {
      fontSize: 38,
      '& span': {
        color: '#2A4C7D',
      },
      [mq[1]]: {
        fontSize: theme.typography.h3,
        lineHeight: '36px',
      },
    },
    '& p': {
      marginTop: 18,
      marginBottom: 30,
      fontSize: theme.typography.h3,
      lineHeight: '33.75px',
      [mq[1]]: {
        fontSize: '16px',
        lineHeight: '24px',
        marginTop: 8,
        marginBottom: 24,
      },
    },
    '& .bg-effect': {
      position: 'absolute',
      minWidth: '600px',
      minHeight: '600px',
      right: '-210px',
      top: '50%',
      [mq[4]]: {
        top: '60%',
      },
      [mq[1]]: {
        top: '15%',
        right: '-180px',
      },
    },
    '& article img': {
      width: 284,
      height: 328,
      display: 'block',
      float: 'right',
      marginTop: 30,
      [mq[1]]: {
        float: 'none',
        margin: '0 auto',
        marginTop: 48,
      },
    },
  },
}));

export default OffersSection;
