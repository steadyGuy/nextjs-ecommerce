import styled from '@emotion/styled';
import React from 'react';

import SpecialIcon from '../public/icons/titleSpec.svg';

const SectionLanding = ({ title, children }) => {
  return (
    <SectionStyled>
      <Title>{title}</Title>
      <SpecialIcon />

      {children}
    </SectionStyled>
  );
};

const SectionStyled = styled.section(({ theme }) => ({
  paddingTop: 64,
  textAlign: 'center',
  '& > svg': {
    marginTop: 8,
    marginBottom: 32,
  },
}));

const Title = styled.h2(({ theme }) => ({
  fontSize: theme.typography.h2,
}));

export default SectionLanding;
