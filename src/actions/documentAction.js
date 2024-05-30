import axios from "axios";

import {
  NEW_DOCUMENT_REQUEST,
  NEW_DOCUMENT_SUCCESS,
  NEW_DOCUMENT_FAIL,
  CLEAR_ERRORS,
  ADMIN_DOCUMENT_REQUEST,
  ADMIN_DOCUMENT_SUCCESS,
  ADMIN_DOCUMENT_FAIL,
  NEW_DOCUMENT_RESET,
} from "../constants/documentConstants";

import { Toastify } from "./alertAction";

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

    if (data.success === true) {
      dispatch(Toastify("success", "Documents uploaded successfully!"));
      dispatch({
        type: NEW_DOCUMENT_SUCCESS,
        payload: data,
      });
    }
  } catch (error) {
    dispatch({
      type: NEW_DOCUMENT_FAIL,
      payload: error.response.data.message,
    });
  }
};

// Get All Documents
export const getAllDocuments = (email) => async (dispatch) => {
  try {
    dispatch({ type: ADMIN_DOCUMENT_REQUEST });

    const { data } = await axios.get(`/api/v1/documents?email=${email}`);

    dispatch({
      type: ADMIN_DOCUMENT_SUCCESS,
      payload: data.documents,
    });
  } catch (error) {
    dispatch({
      type: ADMIN_DOCUMENT_FAIL,
      payload: error.response.data.message,
    });
  }
};

// Clearing Errors
export const clearErrors = () => async (dispatch) => {
  dispatch({ type: CLEAR_ERRORS });
};

export const documentFormReset = () => async (dispatch) => {
  dispatch({ type: NEW_DOCUMENT_RESET });
};
