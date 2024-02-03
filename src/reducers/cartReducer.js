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
      const newItem = action.payload;

      const existingItem = state.cartItems.find(
        (i) => i.product === newItem.product
      );

      if (existingItem) {
        // If the item already exists in the cart, maintain the updated quantity
        return {
          ...state,
          cartItems: state.cartItems.map((item) =>
            item.product === existingItem.product
              ? {
                  ...item,
                  quantity:
                    existingItem.quantity + newItem.quantity <= newItem.stock
                      ? existingItem.quantity + newItem.quantity
                      : existingItem.quantity,
                }
              : item
          ),
          message: "Item has already been added!",
          icon: "info",
        };
      } else {
        // If the item is not in the cart, add it with the specified quantity
        return {
          ...state,
          cartItems: [...state.cartItems, newItem],
          message: "Item has been added successfully!",
          icon: "success",
        };
      }

    case INCREASE_QUANTITY:
      const increasedProduct = action.payload;

      return {
        ...state,
        cartItems: state.cartItems.map((item) =>
          item.product === increasedProduct.product
            ? { ...item, quantity: item.quantity + 1 }
            : item
        ),
      };

    case DECREASE_QUANTITY:
      const decreasedProduct = action.payload;

      return {
        ...state,
        cartItems: state.cartItems.map((item) =>
          item.product === decreasedProduct.product
            ? { ...item, quantity: item.quantity - 1 }
            : item
        ),
      };

    case REMOVE_CART_ITEM:
      return {
        ...state,
        cartItems: state.cartItems.filter((i) => i.product !== action.payload),
        message: "Item has been removed from cart!",
        icon: "success",
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
