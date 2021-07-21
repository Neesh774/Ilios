import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { ColorModeScript } from '@chakra-ui/react';
import theme from './theme.jsx';
import { BrowserRouter as Router} from "react-router-dom";
const routing = (
  <React.StrictMode>
    <ColorModeScript initialColorMode={theme.config.initialColorMode} />
    <App />
  </React.StrictMode>
)
ReactDOM.render(routing, document.getElementById('root')
);