import styled from '@emotion/styled';
import React from 'react';
import LabIcon from '../../public/icons/categories/lab.svg';
import MedicineIcon from '../../public/icons/categories/medicine.svg';
import RadiologyIcon from '../../public/icons/categories/radiology.svg';
import DevicesIcon from '../../public/icons/categories/devices.svg';

import mq from '../_media';
import SectionLanding from '../SectionLanding';

const CategoriesSection = () => {
  return (
    <SectionLanding title="Категории товаров">
      <CategoryListStyled>
        <li className="active"><LabIcon /><span>Лаболатория</span></li>
        <li><MedicineIcon /><span>Медицина</span></li>
        <li><RadiologyIcon /><span>Радиология</span></li>
        <li><DevicesIcon /><span>Девайсы</span></li>
      </CategoryListStyled>

      <div className="wrapper">
        <CountOfItemsStyled>
          <div className="delimiter hidden-sm" />
          <CountStyled>12 товаров в категории:&nbsp;</CountStyled>
          <CategoryTypeStyled>лаборатория</CategoryTypeStyled>
        </CountOfItemsStyled>
      </div>
    </SectionLanding>
  );
};

const CountOfItemsStyled = styled.div(({ theme }) => ({
  textAlign: 'left',
  display: 'flex',
  alignItems: 'center',
  marginTop: 20,
  marginBottom: 40,
  '& .delimiter': {
    width: 124,
    height: 1,
    backgroundColor: '#E7E7E7',
  },
  [mq[2]]: {
    justifyContent: 'center',
  },
  [mq[1]]: {
    flexDirection: 'column',
  },
}));

const CountStyled = styled.div(({ theme }) => ({
  color: '#B1B1B1',
  marginLeft: 14,
}));

const CategoryTypeStyled = styled.div(({ theme }) => ({
  color: theme.colors.primary,
  [mq[1]]: {
    marginTop: 6,
  },
}));

const SectionStyled = styled.section(({ theme }) => ({
  marginTop: 60,
  textAlign: 'center',
  '& svg': {
    marginTop: 6,
  },
}));

const Title = styled.h2(({ theme }) => ({
  fontSize: theme.typography.h2,
}));

const CategoryListStyled = styled.ul(({ theme }) => ({
  display: 'flex',
  justifyContent: 'center',
  listStyleType: 'none',
  alignItems: 'center',
  padding: 0,
  [mq[2]]: {
    display: 'block',
    padding: '0 36px',
    marginTop: 18,
  },
  '& svg': {
    width: 26,
    height: 26,
    marginRight: 14,
  },
  '& svg path': {
    fill: theme.colors.text,
    transition: '0.2s ease-in-out',
  },
  '& li': {
    backgroundColor: '#EFF0F1',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '14px 80px 14px 80px',
    cursor: 'pointer',
    transition: '0.2s ease-in-out',
    borderRight: 'solid 1px #fff',
    '&:hover': {
      backgroundColor: theme.colors.primary,
      color: theme.colors.background,
      ' svg path': {
        fill: theme.colors.background,
      },
    },
    '&:first-of-type': {
      borderRadius: '100px 0 0 100px',
    },
    '&:last-child': {
      borderRadius: '0 100px 100px 0',
    },
    [mq[4]]: {
      padding: '10px 0 10px 0',
      width: 182,
    },
    [mq[2]]: {
      width: '100%',
      marginTop: 8,
      borderRadius: '100px',
      '&:first-of-type': {
        borderRadius: '100px',
      },
      '&:last-child': {
        borderRadius: '100px',
      },
      ':first-of-type': {
        marginTop: 0,
      },
    },
  },
  '& .active': {
    backgroundColor: theme.colors.primary,
    color: theme.colors.background,
    ' svg path': {
      fill: theme.colors.background,
    },
  },
}));

export default CategoriesSection;
