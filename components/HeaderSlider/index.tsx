import React from 'react';
import styled from '@emotion/styled';
import Slider from 'react-slick';
import Button from '../Button';
import Link from 'next/link';
import mq from '../_media';

const HeaderSlider = () => {
  const settings = {
    dots: false,
    fade: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <SliderStyled>
      <div className="container">
        <Slider {...settings} className="slider">
          {new Array(4).fill(
            <div key={Math.random().toString()}>
              <div className="slide">
                <div className="text">
                  <NamedBlock>
                    <span>Защитные маски</span>
                  </NamedBlock>
                  <Title>15% скидка. <span>Поторопись!</span></Title>
                  <Text>
                    Получите лучшую защитную маску класса A по выгодной цене для защиты
                    вас, ваших близких
                  </Text>
                  <Link href="/">
                    <StyledButton>
                      <Button>Купить сейчас</Button>
                    </StyledButton>
                  </Link>
                </div>
                <div className="image">
                  <img src="images/headerMask.png" className="hidden-sm" alt="" />
                </div>
              </div>
            </div>,
          )}
        </Slider>
      </div>
    </SliderStyled>
  );
};

const StyledButton = styled.a(({ theme }) => ({
  textTransform: 'uppercase',
  '& button': {
    transition: '0.2s',
    backgroundColor: theme.colors.background,
    color: theme.colors.text,
    fontWeight: 300,
    [mq[1]]: {
      margin: '0 auto',
    },
  },
  '&:hover': {
    '& button': {
      color: theme.colors.background,
      background: 'transparent',
    },
  },
}));

const SliderStyled = styled.div(({ theme }) => ({
  width: '100%',
  overflowX: 'hidden',
  background: ['linear-gradient(109.9deg, #4970A8 31.28%, #5776C8 56.85%, #788CF4 74.83%)'],
  minHeight: '85vh',
  display: 'flex',
  alignItems: 'center',
  [mq[1]]: {
    textAlign: 'center',
  },
  '& .slider': {
    '& .slide': {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-around',
      color: theme.colors.background,
      fontWeight: 300,
      [mq[2]]: {
        flexDirection: 'column',
        padding: '60px 0',
      },
      '& img': {
        maxWidth: 480,
        maxHeight: 480,
        cursor: 'pointer',
        [mq[3]]: {
          maxWidth: 430,
          maxHeight: 430,
        },
      },
      '& .text': {
        maxWidth: 640,
        [mq[4]]: {
          position: 'relative',
          left: 24,
        },
        [mq[2]]: {
          left: 12,
        },
        [mq[1]]: {
          left: 0,
        },
      },
      [mq[4]]: {
        justifyContent: 'space-between',
      },
    },
    '& .slick-prev:before, .slick-next:before': {
      fontSize: 32,
    },
    '& .slick-arrow': {
      width: 32,
      height: 32,
      opacity: 0.7,
      zIndex: 100,
    },
    '& .slick-next': {
      right: '-16px',
      [mq[2]]: {
        right: '-24px',
      },
    },
    '& .slick-prev': {
      left: '-16px',
      [mq[2]]: {
        left: '-24px',
      },
    },
  },
}));

const Title = styled.h1(({ theme }) => ({
  fontSize: theme.typography.h1,
  fontWeight: 'bold',
  color: theme.colors.background,
  '& span': {
    color: theme.colors.secondary,
  },
  [mq[1]]: {
    fontSize: 36,
  },
}));

const NamedBlock = styled.div(({ theme }) => ({
  fontSize: theme.typography.h3,
  display: 'flex',
  fontWeight: 300,
  '& span': {
    display: 'block',
    backgroundColor: theme.colors.secondary,
    padding: '9px 20px 9px 20px',
    marginBottom: 24,
    letterSpacing: 1,
    [mq[1]]: {
      marginLeft: 'auto',
      marginRight: 'auto',
      fontSize: 18,
    },
  },
}));

const Text = styled.p(({ theme }) => ({
  marginTop: 24,
  marginBottom: 40,
  fontSize: 16,
  lineHeight: '152.34%',
  [mq[1]]: {
    marginTop: 18,
    marginBottom: 36,
    fontSize: 15,
  },
}));

export default HeaderSlider;
