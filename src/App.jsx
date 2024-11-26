import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee } from '@fortawesome/free-solid-svg-icons'; // Correct icon import
import './App.css';

function App() {
  return (
    <>
      <h1 className="text-3xl font-bold text-red-600">
        <FontAwesomeIcon icon={faCoffee} /> Hello world!
      </h1>
    </>
  );
}

export default App;
