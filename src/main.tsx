import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'

import "antd/dist/antd.css"
import "./styles/setting.css"
import "./styles/global.css"
import './index.css'

import { BrowserRouter } from 'react-router-dom'
ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter
      basename={"/"}
      forceRefresh={true}
    >
      <App/>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
)