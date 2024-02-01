//import './App.css';
import React from 'react';
import TodoFeature from './features/Todo';
import SongFeature from './features/Song';
import Counter from './features/Counter'
import { Route } from 'react-router-dom';
import { Routes } from 'react-router-dom';

function App() {

  return (
    <div className="App">
      HomePage
      <Routes>
        <Route path="/todos" element={<TodoFeature />} />
        <Route path="/albums" element={<SongFeature />} />

      </Routes>
    </div>
  );
}

export default App;
