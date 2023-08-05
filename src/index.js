import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'//Le dice a React que ahora tiene un state global
import store from './redux/store'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <Provider  store={ store }>
    <BrowserRouter>
        <App />
    </BrowserRouter>
  </Provider>
)

