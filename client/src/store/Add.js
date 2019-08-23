const items = {
  boardItems: [],
};

export const actionCreators = {
  add: (value) => {
    // eslint-disable-next-line no-console
    console.log('value', value);
    return {
      type: 'ADD',
      value,
    };
  },
  add2: (value) => ({ type: 'ADD', value }),
};


export const reducer = (state, actions) => {
//   eslint-disable-next-line no-param-reassign
  state = state || items;

  if (actions.type === 'ADD') {
    return {
      boardItems: [...state.boardItems, actions.value],
    };
  }

  return state;
};
