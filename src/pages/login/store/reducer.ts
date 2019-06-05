import {fromJS} from 'immutable'
import * as constants from './constants';

const defaultState = fromJS({
  login: false,
  text: 'origin1'
})

export default (state = defaultState, action) => {
  console.log(action)
  switch (action.type) {
    case constants.CHANGE_LOGIN:
      return state.set('login', action.value)
    case constants.ADD:
      return state.set('text', action.value)
    default:
      return state  
  }
}