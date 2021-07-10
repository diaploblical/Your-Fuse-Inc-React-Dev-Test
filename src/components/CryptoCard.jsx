import React from 'react'
import {Card} from '@material-ui/core'
import {CardMedia} from '@material-ui/core'
import {CardContent} from '@material-ui/core'
import {Typography} from '@material-ui/core'
import {Grid} from '@material-ui/core'
import {makeStyles} from '@material-ui/core/'

const useStyles = makeStyles({
  root: {
    maxWidth: 300,
    minHeight: 550
  },
  media: {
    height: 250,
    width: 250
  },
})

export const CryptoCard = ({coin}) => {
  const classes = useStyles()
  return(
    <Grid item xs={12} md={6} lg={3}>
      <Card className={classes.root}>
        <CardContent>
          <Typography gutterBottom variant='h5' component='p'>
            {coin.name}
          </Typography>
        </CardContent>
        <CardMedia
          className={classes.media}
          image={coin.image}
          title={coin.symbol}
        />
        <CardContent>
          <Typography variant='h6' component='p'>
            All prices are in USD
          </Typography>
          <Typography variant='h6' color='textSecondary' component='p'>
            Price: ${coin.current_price}
          </Typography>
          <Typography variant='h6' color='textSecondary' component='p'>
            Total volume: {coin.total_volume}
          </Typography>
          <Typography variant='h6' color='textSecondary' component='p'>
            24 hour high: ${coin.high_24h}
          </Typography>
          <Typography variant='h6' color='textSecondary' component='p'>
            24 hour low: ${coin.low_24h}
          </Typography>
        </CardContent>
      </Card>
    </Grid>
  )
}