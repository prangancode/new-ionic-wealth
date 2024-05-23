import axios from "axios";

import {
  NEW_DOCUMENT_REQUEST,
  NEW_DOCUMENT_SUCCESS,
  NEW_DOCUMENT_FAIL,
  CLEAR_ERRORS,
} from "../constants/documentConstants";

// Create document
export const createDocument = (documentData) => async (dispatch) => {
  try {
    dispatch({ type: NEW_DOCUMENT_REQUEST });

    const config = {
      headers: { "Content-Type": "multipart/form-data" },
    };

    const { data } = await axios.post(
      `/api/v1/document/new`,
      documentData,
      config
    );

    dispatch({
      type: NEW_DOCUMENT_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: NEW_DOCUMENT_FAIL,
      payload: error.response.data.message,
    });
  }
};

// Clearing Errors
export const clearErrors = () => async (dispatch) => {
  dispatch({ type: CLEAR_ERRORS });
};
