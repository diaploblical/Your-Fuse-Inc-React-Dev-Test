import React from 'react';
import {CardMedia} from '@material-ui/core';
import {Card} from '@material-ui/core';
import {CardContent} from '@material-ui/core';
import {Typography} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  media: {
    height: 100
  }
}))

export default function CryptoCard() {
  const classes = useStyles()
  return (
    <Card variant="outlined">
      <CardContent>
        <Typography color="textPrimary" gutterBottom>
          Title
        </Typography>
        <CardMedia className={classes.media} image="../test.gif" title="yes yes y'all" />
        <Typography color="textSecondary">
          adjective
        </Typography>
        <Typography variant="body2" component="p">
          well meaning and kindly.
          <br />
          {'"a benevolent smile"'}
        </Typography>
      </CardContent>
    </Card>
  );
}