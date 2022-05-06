import { AUTHENTICATION } from "../actions/auth";

const initialState = {
  token: null,
  userId: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case AUTHENTICATION:
      return {
        token: action.token,
        userId: action.userId,
      };
    
    default:
      return state;
  }
};
