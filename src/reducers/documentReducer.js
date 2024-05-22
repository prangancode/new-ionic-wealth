import {
  NEW_DOCUMENT_REQUEST,
  NEW_DOCUMENT_SUCCESS,
  NEW_DOCUMENT_FAIL,
  NEW_DOCUMENT_RESET,
  CLEAR_ERRORS,
} from "../constants/documentConstants";

export const newDocumentReducer = (state = { document: {} }, action) => {
  switch (action.type) {
    case NEW_DOCUMENT_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case NEW_DOCUMENT_SUCCESS:
      return {
        loading: false,
        success: action.payload.success,
        document: action.payload.document,
      };
    case NEW_DOCUMENT_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case NEW_DOCUMENT_RESET:
      return {
        ...state,
        success: false,
      };
    case CLEAR_ERRORS:
      return {
        ...state,
        error: null,
      };
    default:
      return state;
  }
};
