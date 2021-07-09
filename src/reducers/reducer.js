import {GET_COINS} from '../actions/actions'
import {GET_COINS_SUCCESS} from '../actions/actions'
import {GET_COINS_FAILURE} from '../actions/actions'

export const initialState = {
  coins: [],
  loading: false,
  hasErrors: false
}

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case GET_COINS:
      return {
        ...state, loading: true
      }
    case GET_COINS_SUCCESS:
      return {
        coins: action.payload, loading: false, hasErrors: false
      }
    case GET_COINS_FAILURE:
      return {
        ...state, loading: false, hasErrors: true
      }
    default:
      return state
  }
}