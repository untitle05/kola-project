const INFOS_USER = 'INFOS_USER';
const credences = { fullname: '' };

export const actionCreators = {
  infosUser: (fullname) => {
    // eslint-disable-next-line no-console
    console.log('fullname:', fullname);
    return {
      type: INFOS_USER,
      fullname,
    };
  },
};

export const reducer = (state, actions) => {
  // eslint-disable-next-line no-param-reassign
  state = state || credences;

  if (actions.type === INFOS_USER) {
    return {
      fullname: actions.fullname,
    };
  }
  return state;
};
