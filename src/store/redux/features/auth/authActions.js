import { setUser, setLang } from './authSlice';

export const setUserData =
  ({ nickname, users, usersError }) =>
  async dispatch => {
    if (users && !usersError) {
      const loginedUser = users.filter(user => user.username === nickname);
      dispatch(setUser.fulfilled({ data: loginedUser }));
    }

    if (usersError) {
      console.log('Get users error: ', usersError);
    }
  };

export const changeLang = lang => dispatch => {
  dispatch(setLang(lang));
};
