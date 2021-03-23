// @ts-nocheck
import React from 'react'
import styled from '@emotion/styled';

import { lighten, rgba } from 'polished';
import SubmitForm from './SubmitForm';
import CloseIcon from '../public/icons/close.svg';

const SearchPopup = ({ visible, closeHandler }) => {
  return (
    <StyledPopup opacity={+visible} visible={visible ? 'visible' : 'hidden'}>
      <CloseIcon tabIndex="0" onClick={closeHandler} />
      <SubmitForm inputText="Поиск..." buttonText="Искать" />
    </StyledPopup>
  );
};

const StyledPopup = styled.div(({ theme, visible, opacity }) => ({
  width: '100%',
  height: '100vh',
  backgroundColor: `${rgba(theme.colors.text, 0.97)}`,
  zIndex: 10001,
  position: 'fixed',
  top: 0,
  left: 0,
  transition: '0.2s',
  opacity: `${opacity}`,
  visibility: `${visible}`,
  '& svg': {
    position: 'fixed',
    right: 44,
    top: 44,
    cursor: 'pointer',
    width: 24,
    height: 24,
    fill: theme.colors.background,
    '&:active': {
      top: 45,
    },
  },
}));

export default SearchPopup;
