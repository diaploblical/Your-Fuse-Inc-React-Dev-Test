import React from 'react'
import ReactDOM from 'react-dom'
import thunk from 'redux-thunk'
import './index.css'
import App from './App'
import {createStore, applyMiddleware} from 'redux'
import {composeWithDevTools} from 'redux-devtools-extension'
import reducer from './reducers/reducer'
import {Provider} from 'react-redux'

const store = createStore(reducer, composeWithDevTools(applyMiddleware(thunk)))

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);