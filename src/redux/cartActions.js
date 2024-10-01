export const addToCart = (product) => (dispatch) => {
  dispatch({
    type: "ADD_TO_CART",
    payload: product,
  });
};

export const updateQuantity = (_id, quantity) => (dispatch) => {
  dispatch({
    type: "UPDATE_QUANTITY",
    payload: { _id, quantity },
  });
};

export const removeFromCart = (_id) => {
  return {
    type: "REMOVE_FROM_CART",
    payload: _id,
  };
};
