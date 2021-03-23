import styled from '@emotion/styled';
import { lighten } from 'polished';
import React from 'react';
import mq from './_media';

const SubmitForm = ({ inputText, buttonText }) => {
  return (
    <SearchStyled>
      <input
        placeholder={inputText}
        aria-label="Search"
        type="text"
      />
      <button type="submit">{buttonText}</button>
    </SearchStyled>
  );
};

const SearchStyled = styled.form(({ theme }) => ({
  display: 'flex',
  width: '100%',
  height: '100%',
  justifyContent: 'center',
  flexDirection: 'row',
  alignItems: 'center',
  [mq[1]]: {
    flexDirection: 'column',
    '& button': {
      marginLeft: 0,
      marginTop: 14,
      maxWidth: 196,
    },
    '& input': {
      width: '100%',
    },
  },
  '& input': {
    width: 472,
    paddingLeft: 32,
    paddingRight: 12,
    color: theme.colors.text,
    border: 'solid 2px transparent',
    '&::placeholder': {
      color: '#8B8B8B',
    },
    [mq[2]]: {
      fontSize: 15,
      textTransform: 'none',
      width: '85%',
    },
  },
  '& button': {
    width: 210,
    marginLeft: 24,
    boxShadow: '0px 1px 25px -6px #2C3D98',
    backgroundColor: theme.colors.primary,
    color: '#fff',
    position: 'relative',
    transition: '0.2s ease-in',
    border: 'solid 2px transparent',
    '&:active': {
      top: 1,
    },
    '&:hover': {
      backgroundColor: `${lighten(0.09, theme.colors.primary)}`,
      boxShadow: `0px 1px 25px -6px ${lighten(0.09, '#2C3D98')}`,
    },
    [mq[2]]: {
      fontSize: 15,
      marginLeft: 12,
    },
  },
  '& input, button': {
    height: 58,
    borderRadius: 60,
    fontFamily: 'Open Sans',
    '&:focus': {
      outline: 'none',
      border: `solid 2px ${theme.colors.primary}`,
    },
  },
}));

export default SubmitForm;
