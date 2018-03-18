// Node Modules
import React from 'react';

// Helpers
import escapeForRegex from './escapeForRegex';

// https://stackoverflow.com/questions/29652862/highlight-text-using-reactjs/43235785#43235785
export default function (str, search) {
  let parts = str.split(new RegExp(`(${search})`, 'gi')).filter(part => {
    return part.length !== 0
  });

  return parts.map((part, i) => part.toLowerCase() === search.toLowerCase() ? <b key={i}>{part}</b> : <span key={i}>{part}</span>);
}
