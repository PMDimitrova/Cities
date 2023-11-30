import ReactDOM from 'react-dom/client';
import { StoreMe } from 'store-me';
import React from 'react';
import './index.css';

import generateInitialState from './_constants/stateMap';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));

const initialState = generateInitialState();

root.render(
  <StoreMe initialState={initialState}>
    <App />
  </StoreMe>
);
