import {
  NEW_DOCUMENT_REQUEST,
  NEW_DOCUMENT_SUCCESS,
  NEW_DOCUMENT_FAIL,
  NEW_DOCUMENT_RESET,
  CLEAR_ERRORS,
  ALL_DOCUMENT_REQUEST,
  ADMIN_DOCUMENT_REQUEST,
  ALL_DOCUMENT_SUCCESS,
  ADMIN_DOCUMENT_SUCCESS,
  ALL_DOCUMENT_FAIL,
  ADMIN_DOCUMENT_FAIL,
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

export const documentsReducer = (state = { documents: [] }, action) => {
  switch (action.type) {
    case ALL_DOCUMENT_REQUEST:
    case ADMIN_DOCUMENT_REQUEST:
      return {
        loading: true,
        documents: [],
      };
    case ALL_DOCUMENT_SUCCESS:
      return {
        loading: false,
        documents: action.payload.documents,
        documentsCount: action.payload.documentsCount,
        resultPerPage: action.payload.resultPerPage,
        filtereddocumentsCount: action.payload.filtereddocumentsCount,
      };

    case ADMIN_DOCUMENT_SUCCESS:
      return {
        loading: false,
        documents: action.payload,
      };
    case ALL_DOCUMENT_FAIL:
    case ADMIN_DOCUMENT_FAIL:
      return {
        loading: false,
        error: action.payload,
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
