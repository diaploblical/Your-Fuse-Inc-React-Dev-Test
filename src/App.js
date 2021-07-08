import React from 'react';
import './App.css';
import {Grid} from '@material-ui/core'
import {Container} from '@material-ui/core'
import CryptoCard from './components/CryptoCard'

function App() {
  return (
    <div className="App">
      <Container maxWidth='lg'>
        <Grid container spacing={5}>
          <Grid item xs={12} md={6}>
            <CryptoCard/>
          </Grid>
          <Grid item xs={12} md={6}>
            <CryptoCard/>
          </Grid>
          <Grid item xs={12} md={6}>
            <CryptoCard/>
          </Grid>
          <Grid item xs={12} md={6}>
            <CryptoCard/>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

export default App;
