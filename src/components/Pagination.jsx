import React from 'react'
import {makeStyles} from '@material-ui/core/'
import {Grid} from '@material-ui/core'
import {Pagination} from '@material-ui/lab/'
import {pageSelect} from '../actions/actions'
import {useDispatch} from 'react-redux'

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      marginTop: theme.spacing(2)
    },
  },
  ul: {
    paddingLeft: 100,
    paddingRight: 100
  }
}))

export const BasicPagination = () => {
  const classes = useStyles()
  const dispatch = useDispatch()
  const handleChange = (event, value) => {
    dispatch(pageSelect(value))
  }
  return(
    <Grid item xs={12}>
      <div className={classes.root}>
        <Pagination className={classes.ul} siblingCount={20} count={25} color='primary' onChange={handleChange} />
      </div>
    </Grid>
  )
}