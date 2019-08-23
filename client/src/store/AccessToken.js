const ADD_TOKEN = 'ADD_TOKEN';

const accessToken = {
  token: '',
};


export const actionCreators = {
  userToken: (token) => {
    // eslint-disable-next-line no-console
    console.log('fullname:', token);
    return {
      type: ADD_TOKEN,
      token,
    };
  },
};

export const reducer = (state, actions) => {
  // eslint-disable-next-line no-param-reassign
  state = state || accessToken;

  if (actions.type === ADD_TOKEN) {
    return {
      token: actions.token,
    };
  }
  return state;
};
