import React, {useEffect} from 'react'
import {connect} from 'react-redux'
import {Grid} from '@material-ui/core'
import {callCryptoApi} from '../actions/actions'
import {CryptoCard} from './CryptoCard'
import {BasicPagination} from './Pagination'

const CardDisplay = ({dispatch, coins, loading, hasErrors, currentPage, coinsPerPage}) => {
  useEffect(() => {
    dispatch(callCryptoApi())
  }, [dispatch])

  const indexOfLastCoin = currentPage * coinsPerPage
  const indexOfFirstCoin = indexOfLastCoin - coinsPerPage
  const currentCoins = coins.slice(indexOfFirstCoin, indexOfLastCoin)

  const renderCards = () => {
    if (loading) return <p>Loading cards...</p>
    if (hasErrors) return <p>Unable to display cards</p>
    return currentCoins.map((coin) => <CryptoCard key={coin.id} coin={coin} />)
  }
  return(
    <Grid container align='center' spacing={4}>
     {renderCards()}
     <BasicPagination/>
    </Grid>  
  )
}

const mapStateToProps = (state) => {
  return {
    coins: state.coins,
    loading: state.loading,
    hasErrors: state.hasErrors,
    currentPage: state.currentPage,
    coinsPerPage: state.coinsPerPage
  }
}

export default connect(mapStateToProps)(CardDisplay)