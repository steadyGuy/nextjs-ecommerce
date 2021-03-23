import styled from '@emotion/styled';
import React from 'react';
import ProductItem from './ProductItem';
import SectionLanding from './SectionLanding';
import mq from './_media';

const LastProductSection = ({ products }) => {
  return (
    <SectionLanding title="Последние поступления">
      <StyledSection className="wrapper">
        <ProductItem product={products[0]} />
        <ProductItem product={products[1]} />
        <ProductItem product={products[2]} />
        <ProductItem product={products[3]} />
      </StyledSection>
    </SectionLanding>
  );
};

const StyledSection = styled.div(({ theme }) => ({
  display: 'grid',
  gridTemplateColumns: '3fr 3fr 3fr 3fr',
  gap: '30px 30px',
  [mq[4]]: {
    gridTemplateColumns: '4fr 4fr',
  },
  [mq[1]]: {
    gridTemplateColumns: '1fr',
  },
}));

export default LastProductSection;
