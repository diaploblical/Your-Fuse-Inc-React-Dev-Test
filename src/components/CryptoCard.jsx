import React from 'react'
import {Card} from '@material-ui/core'
import {CardMedia} from '@material-ui/core'
import {CardContent} from '@material-ui/core'
import {Typography} from '@material-ui/core'
import {Grid} from '@material-ui/core'
import {makeStyles} from '@material-ui/core/'
import test from '../test.jpg'

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
    minHeight: 300
  },
  media: {
    height: 140,
  },
})

export const CryptoCard = ({coin}) => {
  const classes = useStyles()
  return(
    <Grid item xs={12} md={6}>
      <Card className={classes.root}>
        <CardMedia
          className={classes.media}
          image={test}
          title='Test Image'
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {coin.title}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {coin.id}
          </Typography>
        </CardContent>
      </Card>
    </Grid>
  )
}