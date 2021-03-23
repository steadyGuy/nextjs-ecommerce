import styled from '@emotion/styled';
import Head from 'next/head';
import React from 'react';
import Advantages from '../components/Advantages';
import Breadcrumbs from '../components/Breadcrumbs';

import mq from '../components/_media';

const About = () => {
  return (
    <div>
      <Head>
        <title>О нас</title>
      </Head>

      <Breadcrumbs crumbs={{
        Главная: '/',
        'О нас': '/about',
      }}
      />

      <SectionStyled>
        <div className="image-wrapper">
          <img src="/images/aboutBlock.png" alt="О нас" />
        </div>
        <article className="text">
          <h2>Что мы делаем?</h2>
          <p>
            От парков Торонто до Тюильри в Париже - у нас есть склонность сохранять лучший уличный
            стиль со всего мира круглый год. Если вам нравится мерцающие слои, Susie Bubble и
            обнаружение монтажных матриц в их естественной среде обитания, не ищите ничего,
            кроме этого.
          </p>
          <h2 className="who-we">Кто мы?</h2>
          <p>
            Вам нравится мерцающие слои, Susie Bubble и обнаружение монтажников в их естественной
            среде обитания, не ищите ничего, кроме этой, нашей постоянно обновляемой страницы
            уличного стиля!
          </p>
          <ul>
            <li>
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint and
              much more text could be here;
            </li>
            <li>
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint and
              much more text could be here;
            </li>
            <li>
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint and
              much more text could be here;
            </li>
          </ul>
        </article>
      </SectionStyled>

      <AdvantagesSectionStyled>
        <h2>Наши гарантии</h2>
        <div className="wrapper">
          <Advantages />
        </div>
      </AdvantagesSectionStyled>

    </div>
  );
};

const AdvantagesSectionStyled = styled.section(({ theme }) => ({
  marginTop: 80,
  width: '100%',
  '& h2': {
    textAlign: 'center',
    fontSize: theme.typography.h2,
    lineHeight: '47.81px',
    marginBottom: 40,
    '& div': {
      marginTop: 0,
    },
  },
}));

const SectionStyled = styled.section(({ theme }) => ({
  marginTop: 45,
  display: 'flex',
  width: '100%',
  [mq[3]]: {
    flexDirection: 'column',
  },
  '& .image-wrapper': {
    height: 388,
    position: 'relative',
    flexBasis: '90%',
    [mq[3]]: {
      flexBasis: '100%',
      marginLeft: 30,
      marginRight: 30,
    },
    [mq[1]]: {
      height: 250,
    },
    '&::before': {
      content: '""',
      backgroundColor: theme.colors.text,
      position: 'absolute',
      width: '100%',
      height: '100%',
      opacity: 0.15,
    },
    '& img': {
      width: '100%',
      height: 388,
      objectFit: 'cover',
      [mq[1]]: {
        height: 250,
      },
    },
  },
  '& .text': {
    display: 'block',
    flexBasis: '100%',
    padding: '0 30px',
    maxWidth: 680,
    [mq[3]]: {
      paddingTop: 32,
      maxWidth: '100%',
    },
    '& h2': {
      fontSize: theme.typography.h2,
      lineHeight: '47.81px',
      [mq[2]]: {
        fontSize: theme.typography.h3,
        lineHeight: '33.75px',
      },
    },
    '& .who-we': {
      marginTop: 36,
    },
    '& p': {
      lineHeight: '24px',
      marginTop: 14,
    },
    '& ul': {
      lineHeight: '24px',
      marginTop: 14,
      [mq[3]]: {
        padding: 0,
        paddingLeft: 18,
      },
      '& li': {
        marginTop: 6,
      },
    },
  },
}));

export default About;
