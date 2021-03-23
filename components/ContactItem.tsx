/** @jsxRuntime classic /
/* @jsx jsx */
import { jsx } from '@emotion/react';
import styled from '@emotion/styled';
import mq from './_media';

import EnvelopeIcon from '../public/icons/contacts/envelope.svg';
import CreditsIcon from '../public/icons/contacts/credits.svg';

const ContactItem = ({ image, email, surname }) => {
  return (
    <ItemStyled>
      <div className="image-wrapper" css={{ backgroundImage: `url(${image})` }} />
      <div className="credit-data">
        <h3>Email: </h3>
        <a href={`mailto:${email}`}>
          <p><EnvelopeIcon /><span className="email">{email}</span></p>
        </a>
      </div>
      <div className="credit-data">
        <h3>Имя & Фамилия: </h3>
        <p><CreditsIcon /><span>{surname}</span></p>
      </div>
    </ItemStyled>
  );
};

const ItemStyled = styled.div(({ theme }) => ({
  marginLeft: 30,
  border: `solid 1px ${theme.colors.secondarySuperLight}`,
  borderRadius: 10,
  padding: 20,
  minWidth: 255,
  [mq[3]]: {
    minWidth: '90%',
    marginLeft: 0,
    marginTop: 30,
    textAlign: 'center',
  },
  '&:first-of-type': {
    marginLeft: 0,
    [mq[3]]: {
      marginTop: 0,
    },
  },
  '& .image-wrapper': {
    backgroundColor: theme.colors.primary,
    width: 95,
    height: 95,
    borderRadius: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    boxShadow: '-2px 3px 25px -9px #1E2A69',
    backgroundSize: 'cover',
    [mq[3]]: {
      margin: '0 auto',
    },
    // '& svg': {

    // },
  },
  '& h3': {
    marginTop: 18,
    marginBottom: 8,
  },
  '& p': {
    display: 'flex',
    alignItems: 'center',
    [mq[3]]: {
      justifyContent: 'center',
    },
    '& svg': {
      fill: theme.colors.primary,
      marginRight: 12,
    },
  },
  '& .email': {
    textDecoration: 'underline',
  },
  '& a': {
    color: theme.colors.text,
    display: 'inline-block',
    '&:hover': {
      textDecoration: 'none',
    },
  },
}));

export default ContactItem;
