import React, {useEffect} from 'react'
import {connect} from 'react-redux'
import {Grid} from '@material-ui/core'
import {callCryptoApi} from '../actions/actions'
import {CryptoCard} from './CryptoCard'
import {CryptoList} from './CryptoList'
import {BasicPagination} from './Pagination'

const CardDisplay = ({dispatch, coins, loading, hasErrors, currentPage, coinsPerPage, listToggle}) => {
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
  const renderListItems = () => {
    if (loading) return <p>Loading list...</p>
    if (hasErrors) return <p>Unable to display list</p>
    return currentCoins.map((coin) => <CryptoList key={coin.id} coin={coin} />)
  }

  if (listToggle) {
    return(
      <Grid container align='center' spacing={4}>
       {renderListItems()}
       <BasicPagination/>
      </Grid>
    )
  }
  else {
    return(
      <Grid container align='center' spacing={4}>
       {renderCards()}
       <BasicPagination/>
      </Grid>  
    )
  } 
}

const mapStateToProps = (state) => {
  return {
    coins: state.coins,
    loading: state.loading,
    hasErrors: state.hasErrors,
    currentPage: state.currentPage,
    coinsPerPage: state.coinsPerPage,
    listToggle: state.listToggle
  }
}

export default connect(mapStateToProps)(CardDisplay)