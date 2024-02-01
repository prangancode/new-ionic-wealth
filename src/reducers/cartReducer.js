import {
  ADD_TO_CART,
  CLEAR_MESSAGE,
  DECREASE_QUANTITY,
  INCREASE_QUANTITY,
  REMOVE_CART_ITEM,
  SAVE_SHIPPING_INFO,
} from "../constants/cartConstants";

export const cartReducer = (
  state = { cartItems: [], shippingInfo: {}, message: null, icon: null },
  action
) => {
  switch (action.type) {
    case ADD_TO_CART:
      const item = action.payload;

      const isItemExist = state.cartItems.find(
        (i) => i.product === item.product
      );

      if (isItemExist) {
        return {
          ...state,
          cartItems: state.cartItems.map((i) =>
            i.product === isItemExist.product ? item : i
          ),
          message: "Item has already been added!",
          icon: "info",
        };
      } else {
        return {
          ...state,
          cartItems: [...state.cartItems, item],
          message: "Item has been added successfully!",
          icon: "success",
        };
      }

    case INCREASE_QUANTITY:
    case DECREASE_QUANTITY:
      const product = action.payload;

      const isProductExist = state.cartItems.find(
        (i) => i.product === product.product
      );

      if (isProductExist) {
        return {
          ...state,
          cartItems: state.cartItems.map((i) =>
            i.product === isProductExist.product ? product : i
          ),
        };
      } else {
        return {
          ...state,
          cartItems: [...state.cartItems, product],
        };
      }

    case REMOVE_CART_ITEM:
      return {
        ...state,
        cartItems: state.cartItems.filter((i) => i.product !== action.payload),
      };

    case SAVE_SHIPPING_INFO:
      return {
        ...state,
        shippingInfo: action.payload,
      };

    case CLEAR_MESSAGE:
      return {
        ...state,
        message: null,
        icon: null,
      };

    default:
      return state;
  }
};
