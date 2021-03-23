import { createContext, useReducer, useEffect } from 'react';
import { ACTIONS } from './actions';
import rootReducer from './reducers';

export const DataContext = createContext(null);

export const DataProvider = ({ children }) => {
  const initialState = { notify: {}, auth: {}, cart: [], categories: [] };
  const [state, dispatch] = useReducer(rootReducer, initialState);

  // useEffect(() => {
  //   console.log('GLOBAL EFFECT!');
  //   const firstLogin = localStorage.getItem('firstLogin');
  //   if (firstLogin) {
  //     getData('auth/accessToken').then((res) => {
  //       if (res.err) return localStorage.removeItem("firstLogin");

  //       dispatch({
  //         type: 'AUTH',
  //         payload: {
  //           token: res.accessToken,
  //           user: res.user,
  //         },
  //       });
  //     });
  //   }
  // }, []);

  useEffect(() => {
    const cartData = JSON.parse(localStorage.getItem('__next__cart01__medequip'));
    if (cartData) {
      dispatch({ type: ACTIONS.ADD_CART, payload: cartData });
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('__next__cart01__medequip', JSON.stringify(state.cart));
  }, [state.cart]);

  return (
    <DataContext.Provider value={{ state, dispatch }}>
      {children}
    </DataContext.Provider>
  );
};
