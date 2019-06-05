import axios from "axios";
import * as constants from './constants';

const changeLogin = () => ({
  type: constants.CHANGE_LOGIN,
  value: true,
});

export const login = (account: string | number, pwd: string | number) => {
  return dispatch => {
    axios.get("https://cnodejs.org/api/v1/topics").then(res => {
      console.log(res);
      if (res.data.success) {
        dispatch(changeLogin())
      }
    });
  };
};

export const add = (text: any) => ({
  type: constants.ADD,
  text
})