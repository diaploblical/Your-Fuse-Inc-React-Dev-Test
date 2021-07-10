import {GET_COINS} from '../actions/actions'
import {GET_COINS_SUCCESS} from '../actions/actions'
import {GET_COINS_FAILURE} from '../actions/actions'
import {PAGE_SELECT} from '../actions/actions'

export const initialState = {
  coins: [],
  loading: false,
  hasErrors: false,
  currentPage: 1,
  coinsPerPage: 4
}

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case GET_COINS:
      return {
        ...state, loading: true
      }
    case GET_COINS_SUCCESS:
      return {
        ...state, coins: action.payload, loading: false, hasErrors: false
      }
    case GET_COINS_FAILURE:
      return {
        ...state, loading: false, hasErrors: true
      }
    case PAGE_SELECT:
      return {
        ...state, currentPage: action.payload
      }
    default:
      return state
  }
}