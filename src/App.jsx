import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';

import Header from './components/Header/Header';
import NotesList from './components/NotesList/NotesList';
import Note from './components/Note/Note';
import './App.css';

function App() {
  return (
    <>
      <div className="flex flex-col h-screen">
        <Header />
        <NotesList />
      </div>
    </>
  );
}

export default App;
