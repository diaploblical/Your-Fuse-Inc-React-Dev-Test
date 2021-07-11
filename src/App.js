import React from 'react';
import './App.css';
import {Container} from '@material-ui/core'
import CardDisplay from './components/CardDisplay'
import StandaloneToggleButton from './components/ToggleButton'

function App() {
  return (
    <div className="App">
      <Container maxWidth='lg'>
      <h1>Your Fuse Inc. React Dev Test</h1>
        <StandaloneToggleButton/>
        <CardDisplay/>
      </Container>
    </div>
  )
}

export default App