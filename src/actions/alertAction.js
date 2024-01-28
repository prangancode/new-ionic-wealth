import { ALERT_INITIATE } from "../constants/alertConstants";

export const Toastify = (type, message) => async (dispatch) => {
  dispatch({ type: ALERT_INITIATE, payload: { type, message } });
};
