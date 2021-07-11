import React from 'react'
import {connect} from 'react-redux'
import {makeStyles} from '@material-ui/core/styles'
import {Grid} from '@material-ui/core'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import Collapse from '@material-ui/core/Collapse'
import ExpandLess from '@material-ui/icons/ExpandLess'
import ExpandMore from '@material-ui/icons/ExpandMore'

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
  nested: {
    paddingLeft: theme.spacing(4),
  },
}))

export const CryptoList = ({coin}) => {
  const classes = useStyles()
  const [open, setOpen] = React.useState(false)

  const handleClick = () => {
    setOpen(!open)
  }

  return (
    <Grid item xs={12}>
      <List component='nav' aria-labelledby='nested-list-subheader'className={classes.root}>
        <ListItem button onClick={handleClick}>
          <ListItemText primary={coin.name} />
          {open ? <ExpandLess /> : <ExpandMore />}
        </ListItem>
        <Collapse in={open} timeout='auto' unmountOnExit>
          <List component='div' disablePadding>
            <ListItem button className={classes.nested}>
              <ListItemText primary='All prices are in USD' />
            </ListItem>
          </List>
          <List component='div' disablePadding>
            <ListItem button className={classes.nested}>
              <ListItemText secondary={'Coin price: $' + coin.current_price} />
            </ListItem>
          </List>
          <List component='div' disablePadding>
            <ListItem button className={classes.nested}>
              <ListItemText secondary={'Total volume: ' + coin.total_volume} />
            </ListItem>
          </List>
          <List component='div' disablePadding>
            <ListItem button className={classes.nested}>
              <ListItemText secondary={'24 hour high: $' + coin.high_24h} />
            </ListItem>
          </List>
          <List component='div' disablePadding>
            <ListItem button className={classes.nested}>
              <ListItemText secondary={'24 hour low: $' + coin.low_24h} />
            </ListItem>
          </List>
        </Collapse>
      </List>
    </Grid>
  )
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

export default connect(mapStateToProps)(CryptoList)