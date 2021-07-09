import axios from 'axios'

export const GET_COINS = 'GET_COINS'
export const GET_COINS_SUCCESS = 'GET_COINS_SUCCESS'
export const GET_COINS_FAILURE = 'GET_COINS_FAILURE'

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

export function callCryptoApi() {
  return async (dispatch) => {
    dispatch(getCoins())
    try {
      let response = await axios.get('https://jsonplaceholder.typicode.com/posts')
      const data = await response
      console.log([data.data])
      dispatch(getCoinsSuccess(data.data))
    } catch (error) {
      console.log(error)
      dispatch(getCoinsFailure())
    }
  }
}