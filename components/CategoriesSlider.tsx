import styled from '@emotion/styled';
import Slider from 'react-slick';
import ProductItem from './ProductItem';
import mq from './_media';

const CategoriesSlider = ({ products }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    // swipe: false,
    // swipeToSlide: false,
    // touchMove: false,
    // draggable: false,
    // arrows: false,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <StyledSlider>
      <div className="wrapper">
        <Slider {...settings} className="categoriesSlider">
          {products.map((product) => (
            <ProductItem key={product.id} product={product} />
          ))}
        </Slider>
      </div>
    </StyledSlider>
  );
};

const StyledSlider = styled.div(({ theme }) => ({
  [mq[2]]: {
    '& .wrapper': {
      paddingLeft: 25,
      paddingRight: 25,
    },
  },
  '& .slick-track': {
    display: 'flex',
    cursor: 'pointer',
    alignItems: 'stretch',
    paddingBottom: 28,
    '& .slick-slide, .slick-slide > div': {
      display: 'flex',
      alignItems: 'stretch',
      height: 'auto',
      marginLeft: 7.5,
      marginRight: 7.5,
      [mq[1]]: {
        margin: 0,
      },
    },
  },
  '& .slick-dots': {
    position: 'relative',
    bottom: 0,
  },
  '& .slick-dots button': {
    backgroundColor: 'transparent',
    width: 16,
    height: 16,
    border: 'solid 1px #B4B4B4',
    borderRadius: '100%',
    '&::before': {
      display: 'none',
    },
  },
  '& .slick-dots .slick-active button': {
    border: `solid 1px ${theme.colors.primary}`,
    backgroundColor: theme.colors.primary,
  },
}));

export default CategoriesSlider;
