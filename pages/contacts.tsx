import Head from 'next/head';
import React, { useState, useContext, useEffect } from 'react';
import styled from '@emotion/styled';
import Link from 'next/link';
import valid from '../utils/valid';
import Notify from '../components/Notify';
import { DataContext } from '../store/GlobalState';
import { postData } from '../utils/fetchData';
import Breadcrumbs from '../components/Breadcrumbs';
import ContactItem from '../components/ContactItem';
import { ACTIONS } from '../store/actions';
import mq from '../components/_media';

const Contacts = () => {
  return (
    <>
      <Head>
        <title>Контакты</title>
      </Head>
      <Breadcrumbs crumbs={{
        Главная: '/',
        Контакты: '/contacts',
      }}
      />
      <div className="wrapper">
        <TitleStyled>
          <h2>Связаться с нами</h2>
        </TitleStyled>
        {/* onSubmit={handleSubmit} */}
        <form>
          <div className="input-wrapper">
            <label htmlFor="name"><span className="labelTitle">Имя: </span>
              <input
                type="name"
                name="name"
                id="name"
                placeholder="Введите ваше имя..."
              // onChange={handleChangeInput}
              />
              {/* {state.notify.error && <span>We&apos;ll never share your email with anyone else.</span>} */}
            </label>
          </div>
          <div className="input-wrapper">
            <label htmlFor="email"><span className="labelTitle">Email адрес:</span>
              <input
                type="email"
                name="email"
                id="email"
                // ariaDescribedby="email"
                placeholder="Введите email..."
              // onChange={handleChangeInput}
              />
              <span id="emailHelp">We&apos;ll never share your email with anyone else.</span>
            </label>
          </div>
          <div className="input-wrapper">
            <label htmlFor="cf_password"><span className="labelTitle">Подтверждения пароля: </span>
              <textarea
                id="cf_password"
                name="cf_password"
                placeholder="Подтвердите пароль..."
              // onChange={handleChangeInput}
              />
              <span id="emailHelp">We&apos;ll never share your email with anyone else.</span>
            </label>
          </div>
          <div className="input-wrapper buttonItems">
            <button type="submit">Отправить</button>
          </div>
        </form>
        <ContactsSectionStyled>
          <ContactItem image="/images/contacts/img1.png" email="alma.lawson@example.com" surname="Brooklyn Simmons" />
          <ContactItem image="/images/contacts/img2.png" email="bill.sanders@example.com" surname="Guy Hawkins" />
          <ContactItem image="/images/contacts/img3.png" email="debra.holt@example.com" surname="Cameron Williamson" />
        </ContactsSectionStyled>
      </div>
    </>
  );
};

const TitleStyled = styled.div(({ theme }) => ({
  textAlign: 'center',
  marginTop: 60,
  marginBottom: 0,
  '& h2': {
    color: theme.colors.text,
    fontSize: theme.typography.h2,
  },
}));

const ContactsSectionStyled = styled.section(({ theme }) => ({
  display: 'flex',
  justifyContent: 'center',
  marginTop: 64,
  [mq[3]]: {
    flexDirection: 'column',
    alignItems: 'center',
  },
}));

export default Contacts;
