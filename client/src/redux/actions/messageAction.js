import { messages } from "../constants/messageConstants";

export const errorMessage = (message) => {
  return {
    type: messages.SHOW_ERROR_MESSAGES,
    payload: message,
  };
};

export const successMessage = (message) => {
  return {
    type: messages.SHOW_SUCCESS_MESSAGES,
    payload: message,
  };
};

export const clearMessage = (message) => {
  return {
    type: messages.REMOVE_MESSAGES,
    payload: message,
  };
};
