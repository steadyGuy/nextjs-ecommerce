import styled from '@emotion/styled';
import React from 'react'
import SectionLanding from './SectionLanding';

import SubmitForm from './SubmitForm';
import mq from './_media';

const Newsletter = () => {
  return (
    <StyledSection>
      <SectionLanding title="Новостная рассылка">
        <div className="wrapper">
          <p className="text">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint</p>
          <SubmitForm inputText="E-mail адрес..." buttonText="Подписаться" />
        </div>
      </SectionLanding>
    </StyledSection>
  );
};

const StyledSection = styled.section(({ theme }) => ({
  backgroundColor: '#F7F7F7',
  paddingBottom: 64,
  marginTop: theme.indent.section,
  '& .text': {
    color: '#8B8B8B',
    fontSize: theme.typography.h4,
  },
  '& form': {
    marginTop: 32,
    '& input': {
      backgroundColor: '#444444',
      color: '#8B8B8B',
    },
    '& button': {
      textTransform: 'uppercase',
      fontWeight: 300,
    },
  },
}));

export default Newsletter;
