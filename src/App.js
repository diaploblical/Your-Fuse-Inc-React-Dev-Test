import React from 'react';
import './App.css';
import {Container} from '@material-ui/core'
import CardDisplay from './components/CardDisplay'

function App() {
  return (
    <div className="App">
      <Container maxWidth='lg'>
        <CardDisplay/>
      </Container>
    </div>
  );
}

export default App
