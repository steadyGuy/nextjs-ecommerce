export const ACTIONS = {
  NOTIFY: 'NOTIFY',
  AUTH: 'AUTH',
  ADD_CART: 'ADD_CART',
  ADD_CATEGORIES: 'ADD_CATEGORIES',
};

export const addToCart = (product, cart) => {
  if (product.inStock === 0) {
    return {
      type: ACTIONS.NOTIFY,
      payload: { error: 'This product is out of stock' },
    };
  }

  const checkIfAlreadyAdded = cart.every((item) => item.id !== product.id);

  if (!checkIfAlreadyAdded) {
    return {
      type: ACTIONS.NOTIFY,
      payload: { error: 'Продукт уже был добавлен в корзину' },
    };
  }
  product.quantity = 1;
  return {
    type: ACTIONS.ADD_CART,
    payload: [...cart, product],
  };
};

export const removeFromCart = (itemId, cart) => {
  const newProducts = cart.filter((item) => item.id !== itemId);
  return { type: ACTIONS.ADD_CART, payload: newProducts };
};

export const decreaseQuantity = (productId, cart) => {
  const newData = cart.slice(0);
  newData.forEach((item) => {
    if (item.id === productId) {
      item.quantity -= 1;
    }
  });

  return ({ type: ACTIONS.ADD_CART, payload: newData });
};

export const increaseQuantity = (productId, cart) => {
  const newData = cart.slice(0);
  newData.forEach((item) => {
    if (item.id === productId) {
      item.quantity += 1;
    }
  });

  return ({ type: ACTIONS.ADD_CART, payload: newData });
};


export const addCategories = (categories) => {
  return {
    payload: categories,
    type: ACTIONS.ADD_CATEGORIES,
  };
};
