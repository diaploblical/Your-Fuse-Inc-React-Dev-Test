import React from 'react';
import './App.css';
import {Container} from '@material-ui/core'
import CardDisplay from './components/CardDisplay'

function App() {
  return (
    <div className="App">
      <h1>Your Fuse Inc. React Dev Test</h1>
      <Container maxWidth='lg'>
        <CardDisplay/>
      </Container>
    </div>
  );
}

export default App