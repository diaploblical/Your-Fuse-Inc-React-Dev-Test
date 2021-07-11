import React from 'react'
import ToggleButton from '@material-ui/lab/ToggleButton'
import {makeStyles} from '@material-ui/core/styles'
import {listToggle} from '../actions/actions'
import {useDispatch} from 'react-redux'

const useStyles = makeStyles((theme) => ({
  root: {
    height: 30,
    marginBottom: 30
  }
}))

export default function StandaloneToggleButton() {
  const [selected, setSelected] = React.useState(false)
  const classes = useStyles()
  const dispatch = useDispatch()

  const handleChange = () => {
    setSelected(!selected)
    dispatch(listToggle())
  }

  if (selected) {
    return (
      <ToggleButton value={1} className={classes.root} onChange={() => {handleChange()}}>
        <p>Card View</p>
      </ToggleButton>
    )
  } else {
    return (
      <ToggleButton value={1} className={classes.root} onChange={() => {handleChange()}}>
        <p>List View</p>
      </ToggleButton>
    )
  }
}