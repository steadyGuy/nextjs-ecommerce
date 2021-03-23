import Head from 'next/head';
import React, { useState, useContext, useEffect } from 'react';
import styled from '@emotion/styled';
import Link from 'next/link';
import valid from '../utils/valid';
import Notify from '../components/Notify';
import { DataContext } from '../store/GlobalState';
import { postData } from '../utils/fetchData';
import Breadcrumbs from '../components/Breadcrumbs';
import mq from '../components/_media';
import { ACTIONS } from '../store/actions';

const Register = () => {
  const initialState = { name: '', surname: '', email: '', password: '', cf_password: '' };
  const [userData, setUserData] = useState(initialState);
  const { name, surname, email, password, cf_password: cfPassword } = userData;

  const { state, dispatch } = useContext(DataContext);

  const handleChangeInput = (e) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
    dispatch({ type: 'NOTIFY', payload: {} });
  };

  useEffect(() => {
    return () => {
      dispatch({ type: 'NOTIFY', payload: {} });
    };
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const errMsg = valid(name, surname, email, password, cfPassword);
    console.log(errMsg)
    if (errMsg) return dispatch({ type: 'NOTIFY', payload: { error: errMsg } });

    dispatch({ type: 'NOTIFY', payload: { loading: true } });
    const res = await postData('register', userData);
    if (res.error) return dispatch({ type: 'NOTIFY', payload: { error: res.error } });
    console.log('res.status', res.status)
    dispatch({ type: ACTIONS.NOTIFY, payload: { success: res.status } });
  };

  return (
    <>
      <Breadcrumbs crumbs={{
        Главная: '/',
        Регистрация: '/register',
      }}
      />
      <div className="container">
        <Head>
          <title>Регистрация</title>
        </Head>

        <Notify />
        <TitleStyled>
          <h2>Создать новый аккаунт</h2>
        </TitleStyled>
        <FormStyled onSubmit={handleSubmit}>
          <div className="input-wrapper">
            <label htmlFor="name"><span className="labelTitle">Имя:</span>
              <input
                type="text"
                id="name"
                name="name"
                // aria-describedby="name"
                placeholder="Введите имя..."
                onChange={handleChangeInput}
              />
              <span id="nameHelp">We&apos;ll never share your email with anyone else.</span>
            </label>
            <label htmlFor="surname" className="specialInputArea"><span className="labelTitle">Фамилия:</span>
              <input
                type="text"
                id="surname"
                name="surname"
                // aria-describedby="surname"
                placeholder="Введите фамилию..."
                onChange={handleChangeInput}
                className="specialInput"
              />
              <span id="nameHelp">We&apos;ll never share your email with anyone else.</span>
            </label>
          </div>
          <div className="input-wrapper">
            <label htmlFor="email"><span className="labelTitle">Email адрес:</span>
              <input
                type="email"
                name="email"
                id="email"
                // aria-describedby="email"
                placeholder="Введите email..."
                onChange={handleChangeInput}
              />
              <span id="emailHelp">We&apos;ll never share your email with anyone else.</span>
            </label>
          </div>
          <div className="input-wrapper">
            <label htmlFor="password"><span className="labelTitle">Пароль: </span>
              <input
                type="password"
                name="password"
                id="password"
                placeholder="Пароль..."
                onChange={handleChangeInput}
              />
              {state.notify.error && <span>We&apos;ll never share your email with anyone else.</span>}
            </label>
          </div>
          <div className="input-wrapper">
            <label htmlFor="cf_password"><span className="labelTitle">Подтверждения пароля: </span>
              <input
                type="password"
                id="cf_password"
                name="cf_password"
                placeholder="Подтвердите пароль..."
                onChange={handleChangeInput}
              />
              <span id="emailHelp">We&apos;ll never share your email with anyone else.</span>
            </label>
          </div>
          <div className="input-wrapper buttonItems">
            <button type="submit">Зарегистрироваться</button>
            <Link href="/"><a className="specialBtn">Назад в магазин</a></Link>
          </div>
          <div className="textItem">
            <p>Уже есть аккаунт? <Link href="/signin"><a>Войдите сейчас</a></Link></p>
          </div>
        </FormStyled>
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

export default Register;
