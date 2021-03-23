import Head from 'next/head';
import React, { useState, useContext } from 'react';
import Cookie from 'js-cookie';

import valid from '../utils/valid';
import { DataContext } from '../store/GlobalState';
import { postData, getData } from '../utils/fetchData';
import Notify from '../components/Notify';
import Link from 'next/link';
import { useRouter } from 'next/router';
import styled from '@emotion/styled';
import Breadcrumbs from '../components/Breadcrumbs';
import mq from '../components/_media';

const SignIn = () => {
  const router = useRouter();
  const initialState = { email: '', password: '' };
  const [userData, setUserData] = useState(initialState);
  const { email, password } = userData;

  const { state, dispatch } = useContext(DataContext);

  const handleChangeInput = (e) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
    dispatch({ type: 'NOTIFY', payload: {} });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    dispatch({ type: 'NOTIFY', payload: { loading: true } });
    const res = await postData('login', userData);
    if (res.error) {
      return dispatch({ type: 'NOTIFY', payload: { error: res.error } });
    }
    dispatch({ type: 'NOTIFY', payload: { success: res.msg } });
    dispatch({ type: 'AUTH', payload: { token: res.accessToken, user: res.user } });
    Cookie.set('refreshtoken', res.refreshToken, {
      path: '/api/auth/accessToken',
      expires: 7,
    });

    localStorage.setItem('firstLogin', 'yes');
    router.push('/');
  };

  // const handleOauth = async () => {
  //   const data = await getData('oauth/github');
  //   // window.location.href = data.location;
  // };

  return (
    <>
      <Head>
        <title>Регистрация</title>
      </Head>
      <Breadcrumbs crumbs={{
        Главная: '/',
        Авторизация: '/signin',
      }}
      />
      <div className="container">
        <Notify />
        <TitleStyled>
          <h2>Войти в аккаунт</h2>
        </TitleStyled>
        <FormStyled onSubmit={handleSubmit}>
          <div className="input-wrapper">
            <label htmlFor="login-email"><span className="labelTitle">Email адрес:</span>
              <input
                type="email"
                name="email"
                id="login-email"
                // aria-describedby="email"
                placeholder="Введите email..."
                onChange={handleChangeInput}
                value={email}
              />
            </label>
          </div>
          <div className="input-wrapper">
            <label htmlFor="login-password"><span className="labelTitle">Пароль:</span>
              <input
                type="password"
                name="password"
                id="login-password"
                placeholder="Пароль..."
                onChange={handleChangeInput}
                value={password}
              />
            </label>
          </div>
          <div className="buttonItems input-wrapper">
            <button type="submit">Авторизироваться</button>
            <Link href="/"><a className="specialBtn">Назад в магазин</a></Link>
          </div>
          <div className="textItem">
            <p>Ёще нет аккаунта? <Link href="/register"><a> Зарегистрируйтесь сейчас</a></Link></p>
          </div>
        </FormStyled>

        {/* <div onClick={handleOauth}><strong>VIA GITHUB</strong></div> */}
      </div>
    </>
  );
};

const TitleStyled = styled.div(({ theme }) => ({
  textAlign: 'center',
  margin: '34px 0',
  '& h2': {
    color: theme.colors.text,
    fontSize: theme.typography.h2,
    [mq[1]]: {
      fontSize: theme.typography.h3,
    },
  },
}));

const FormStyled = styled.form(({ theme }) => ({
  '& .buttonItems': {
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center',
    '& .specialBtn': {
      fontWeight: 'bold',
      color: theme.colors.text,
      textDecoration: 'none',
      '&:hover': {
        textDecoration: 'underline',
      },
    },
    [mq[2]]: {
      flexDirection: 'column',
      justifyContent: 'center',
      '& .specialBtn': {
        marginTop: 18,
      },
    },
  },
  '& .textItem': {
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center',
    marginTop: 20,
    '& a': {
      color: theme.colors.primary,
      textDecoration: 'none',
      '&:hover': {
        textDecoration: 'underline',
      },
    },
    [mq[1]]: {
      textAlign: 'center',
    },
  },
}));


export default SignIn;
