import axios from 'axios'
import endpoint from '../endpoint'

export const GET_COINS = 'GET_COINS'
export const GET_COINS_SUCCESS = 'GET_COINS_SUCCESS'
export const GET_COINS_FAILURE = 'GET_COINS_FAILURE'
export const PAGE_SELECT = 'PAGE_SELECT'
export const LIST_TOGGLE = 'LIST_TOGGLE'

export const getCoins = () => ({
  type: GET_COINS
})

export const getCoinsSuccess = (coins) => ({
  type: GET_COINS_SUCCESS,
  payload: coins
})

export const getCoinsFailure = () => ({
  type: GET_COINS_FAILURE
})

export const pageSelect = (page) => ({
  type: PAGE_SELECT,
  payload: page
})

export const listToggle = () => ({
  type: LIST_TOGGLE
})

export function callCryptoApi() {
  return async (dispatch) => {
    dispatch(getCoins())
    try {     
      let response = await axios.get(endpoint)
      const data = await response
      dispatch(getCoinsSuccess(data.data))
    } catch (error) {
      dispatch(getCoinsFailure())
    }
  }
}