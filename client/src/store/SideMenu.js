const toggleMenu = 'TOGGLE_MENU';
const initialState = { smallMenu: false };

export const actionCreators = {
  toggleSideMenu: () => ({ type: toggleMenu }),
};

export const reducer = (state, action) => {
  // eslint-disable-next-line no-param-reassign
  state = state || initialState;

  if (action.type === toggleMenu) {
    return { ...state, smallMenu: !state.smallMenu };
  }

  return state;
};
