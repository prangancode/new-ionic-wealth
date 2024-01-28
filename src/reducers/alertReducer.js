import { ALERT_INITIATE } from "../constants/alertConstants";

export const toastAlertReducer = (state = { toastifyAlert: {} }, action) => {
  switch (action.type) {
    case ALERT_INITIATE:
      return {
        type: action.payload.type,
        message: action.payload.message,
      };

    // case ALERT_RESET:
    //   return {
    //     type: null,
    //     message: null,
    //   };
    default:
      return state;
  }
};
