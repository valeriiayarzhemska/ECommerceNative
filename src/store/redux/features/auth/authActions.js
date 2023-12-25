import { setUser, setLang, setUserId } from './authSlice';

export const setUserData =
  ({ nickname, users, usersError }) =>
  async dispatch => {
    if (users && !usersError) {
      const loginedUser = users.filter(user => user.username === nickname);

      dispatch(setUser.fulfilled({ data: loginedUser[0] }));
      dispatch(setUserId.fulfilled({ data: loginedUser[0].id }));
    }

    if (usersError) {
      console.log('Get users error: ', usersError);
    }
  };

export const changeLang = lang => dispatch => {
  dispatch(setLang(lang));
};
