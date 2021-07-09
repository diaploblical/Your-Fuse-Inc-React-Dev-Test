import React, {useEffect} from 'react'
import {connect} from 'react-redux'
import {Grid} from '@material-ui/core'
import {callCryptoApi} from '../actions/actions'
import {CryptoCard} from './CryptoCard'

const CardDisplay = ({dispatch, loading, coins, hasErrors}) => {
  useEffect(() => {
    dispatch(callCryptoApi())
  }, [dispatch])

  const renderCards = () => {
    if (loading) return <p>Loading cards...</p>
    if (hasErrors) return <p>Unable to display cards</p>
    return coins.map((coin) => <CryptoCard key={coin.id} coin={coin} />)
  }

  return(
    <Grid container align='center' spacing={4}>
     {renderCards()}
    </Grid>
  )
}

const mapStateToProps = (state) => {
  return {
    coins: state.coins,
    loading: state.loading,
    hasErrors: state.hasErrors
  }
}

export default connect(mapStateToProps)(CardDisplay)

