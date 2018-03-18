import 'fonts/avant-garde-demi-bold';
import 'fonts/avant-garde-medium';
import 'fonts/avant-garde-bold';
import 'fonts/avant-garde-book';
import './index.scss';

import React from 'react';
import ReactDOM from 'react-dom';
import { getAll, get } from 'data';
import App from './App';

document.addEventListener('DOMContentLoaded', () => {
  getAll().then(data => {
    ReactDOM.render(
      <App data={data} />,
      document.getElementById('createCharacterApp')
    );
  });
});