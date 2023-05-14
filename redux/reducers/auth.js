import { LOG_IN, LOG_OUT } from "../actions/auth";

const initialState = {
  isAuth: false,
};

export default (state = initialState, action) => {
  switch (action?.type) {
    case LOG_IN:
      return {
        ...state,
        isAuth: true,
      };

    case LOG_OUT:
      return {
        ...state,
        isAuth: true,
      };
  }
  return state;
};
