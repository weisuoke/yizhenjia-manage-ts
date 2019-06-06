import { fromJS } from 'immutable'
import * as constants from './constants'

const defaultState = fromJS({
  loadingStatus: false
})

export default (state = defaultState, action) => {
  switch (action.type) {
    case constants.SHOW_LOADING:
      return state.set('loginStatus', true)
    case constants.HIDE_LOADING:
      return state.set('loginStatus', true)
    default:
      return state;
  }
}