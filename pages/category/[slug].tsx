import React, { useState, useContext, useEffect } from 'react';
import Head from 'next/head';
import styled from '@emotion/styled';
import Select from 'react-select';

import Button from '../../components/Button';
import ArrowRightIcon from '../../public/icons/arrowRight.svg';
import GridIcon from '../../public/icons/grid.svg';
import ListIcon from '../../public/icons/list.svg';
import Breadcrumbs from '../../components/Breadcrumbs';
import { getData } from '../../utils/fetchData';
import { DataContext } from '../../store/GlobalState';
import CategorySidebar from '../../components/CategorySidebar';
import ProductItem from '../../components/ProductItem';
import { darken, lighten } from 'polished';
import mq from '../../components/_media';

const Category = ({ products, category, subcategory, categories }) => {
  const options = [
    { value: 'asceding', label: 'По возрастанию' },
    { value: 'descending', label: 'По упаданию' },
    { value: 'price', label: 'По цене' },
  ];

  const [selectedOption, setSelectedOption] = useState(options[0]);

  const handleChange = (selectedOption) => {
    setSelectedOption(selectedOption);
  };

  return (
    <div>
      <Head>
        <title>{subcategory.title}</title>
      </Head>

      <Breadcrumbs crumbs={{
        Главная: '/',
        [subcategory.title]: subcategory.slug,
      }}
      />

      <SectionStyled className="wrapper">
        <div className="category">
          <CategorySidebar category={category} subcategory={subcategory} categories={categories} />
        </div>
        <StyledProductsSection>
          <div className="row-functions">
            <div className="display-method">
              <GridIcon />
              <ListIcon />
            </div>
            <Select
              value={selectedOption}
              onChange={handleChange}
              options={options}
              styles={dropwodnStyles}
              noOptionsMessage={() => 'Нету таких опций'}
            />
          </div>
          <div className="products">
            {products.map((product) => (
              <ProductItem key={product.id} product={product} />
            ))}
          </div>
          <Button className="load-more">Загрузить больше...</Button>
        </StyledProductsSection>
      </SectionStyled>

    </div>
  );
};

export async function getServerSideProps({ params: { slug } }) {
  const productsBySubcategory = await getData(`category/${slug}`);
  const { categories } = await getData('categories');
  const { category } = productsBySubcategory;
  const subcategory = category.subcategories.find((subcat) => subcat.slug === slug);
  return {
    props: {
      products: productsBySubcategory.products,
      category,
      subcategory,
      categories,
      key: subcategory._id,
    },
  };
}

const dropwodnStyles = {
  option: (provided, state) => ({
    ...provided,
    borderBottom: '1px solid #F7F7F7',
    color: state.isSelected ? '#687EF0' : '#111111',
    backgroundColor: '#fff',
    padding: 20,
    cursor: 'pointer',
    transition: '0.3s',
    '&:hover': {
      backgroundColor: lighten(0.3, '#687EF0'),
    },
    '&:active': {
      backgroundColor: darken(0.1, '#687EF0'),
      color: '#fff',
    },
  }),
  control: () => ({
    padding: '8px 16px',
    minWidth: 247,
    display: 'flex',
    backgroundColor: '#687EF0',
    borderRadius: 48,
    cursor: 'pointer',
    color: '#fff',
    zIndex: 1101,
    [mq[1]]: {
      minWidth: 212,
      padding: '6px 12px',
    },
  }),
  menuList: (provided) => ({
    ...provided,
    padding: 0,
    borderRadius: 3,
    border: 'none',
  }),
  menu: (provided) => ({
    ...provided,
    border: 'solid 1px #F7F7F7',
    zIndex: 10001,
  }),
  indicatorSeparator: () => ({
    display: 'none',
  }),
  indicatorsContainer: () => ({
    '& svg': {
      fill: '#fff',
    },
  }),
  input: () => ({
    color: '#fff',
    fontWeight: 400,
  }),
  singleValue: (provided, state) => {
    const opacity = state.isDisabled ? 0.5 : 1;

    const transition = 'opacity 300ms';

    return {
      ...provided,
      opacity,
      transition,
      color: '#fff',
      fontWeight: 400,
      padding: 1,
    };
  },
};

const SectionStyled = styled.section(({ theme }) => ({
  display: 'grid',
  gridTemplateColumns: '3fr 9fr',
  marginTop: 45,
  gap: 30,
  '& .product': {
    [mq[4]]: {
      '& .imgWrapper': {
        '& img': {
          [mq[4]]: {
            height: 258,
          },
        },
        '&::before': {
          [mq[4]]: {
            height: 258,
          },
        },
      },
    },
  },
  [mq[3]]: {
    display: 'flex',
    flexDirection: 'column-reverse',
    gridAutoFlow: 'dense',
  },
}));

const StyledProductsSection = styled.div(({ theme }) => ({
  '& .row-functions': {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  '& .display-method': {
    '& svg': {
      transition: '0.3s',
      width: 22,
      height: 22,
      cursor: 'pointer',
      '&:last-child': {
        marginLeft: 20,
        [mq[1]]: {
          marginLeft: 12,
        },
      },
      '&:hover': {
        fill: theme.colors.primary,
      },
    },
  },
  '& .products': {
    marginTop: 38,
    display: 'grid',
    gridTemplateColumns: '1fr 1fr 1fr',
    gap: 30,
    [mq[2]]: {
      gridTemplateColumns: '1fr 1fr',
    },
    [mq[1]]: {
      gridTemplateColumns: '1fr',
    },
    '& > div': {
      marginLeft: 0,
    },
  },
  '& .load-more': {
    margin: '0 auto',
    marginTop: 40,
    background: 'transparent',
    color: theme.colors.text,
    border: `solid 1px ${theme.colors.secondaryLight}`,
    transition: '0.3s',
    '&:hover': {
      border: `solid 1px ${theme.colors.secondarySuperLight}`,
      color: lighten(0.5, theme.colors.text),
      background: 'transparent',
    },
  },
}));

export default Category;
