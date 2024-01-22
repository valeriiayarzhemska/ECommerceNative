import { setUser, setLang, setUserId } from './authSlice';

export const setUserData =
  ({ nickname, users, usersError }) =>
  async dispatch => {
    if (users && !usersError) {
      const loginedUser = users.filter(user => user.username === nickname);

      await dispatch(setUser.fulfilled({ data: loginedUser[0] }));
      await dispatch(setUserId.fulfilled({ data: loginedUser[0].id }));
    }

    if (usersError) {
      console.log('Get users error: ', usersError);
    }
  };

export const setUserInfo = info => async dispatch => {
  await dispatch(setUser.fulfilled({ data: info }));
};

export const changeLang = lang => async dispatch => {
  await dispatch(setLang(lang));
};
