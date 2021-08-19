import { messages } from "../constants/messageConstants";

const initialState = {
  message: {
    error: "",
    success: "",
  },
};

const messageReducer = (state = initialState, action) => {
  switch (action.type) {
    case messages.SHOW_ERROR_MESSAGES:
      return {
        ...state,
        error: action.payload,
      };

    case messages.SHOW_SUCCESS_MESSAGES:
      return {
        ...state,
        success: action.payload,
      };

    case messages.REMOVE_MESSAGES:
      return {
        ...state,
        error: "",
        success: "",
      };

    default:
      return state;
  }
};

export default messageReducer;
