import { ThemeProvider } from '@emotion/react';
import NProgress from 'nprogress'; //nprogress module
import Router from 'next/router';
import GlobalStyles from '../components/GlobalStyles';
import Navigation from '../components/Navigation';
import RowDashBoard from '../components/RowDashboard';
import Footer from '../components/Footer';
import { DataProvider } from '../store/GlobalState';

import 'nprogress/nprogress.css'; //styles of nprogress

//Binding events. 
Router.events.on('routeChangeStart', () => NProgress.start());
Router.events.on('routeChangeComplete', () => NProgress.done());
Router.events.on('routeChangeError', () => NProgress.done());

const theme = {
  colors: {
    primary: '#687EF0',
    secondary: '#18355F',
    text: '#111111',
    background: '#ffffff',
    secondaryLight: '#B7D4FF',
    secondarySuperLight: '#DBEAFF',
  },
  typography: {
    h1: 48,
    h2: 34,
    h3: 24,
    h4: 18,
    p: 16,
  },
  indent: {
    product: 30,
    section: 64,
    h2Title: 58,
  },
};

function MyApp({ Component, pageProps }) {
  return (
    <>
      <ThemeProvider theme={theme}>
        <DataProvider>
          <GlobalStyles />
          <RowDashBoard />
          <Navigation />
          <Component {...pageProps} />
          <Footer />
        </DataProvider>
      </ThemeProvider>
    </>
  );
}
export default MyApp;
