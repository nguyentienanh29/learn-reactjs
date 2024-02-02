//import './App.css';
import React from 'react';
import TodoFeature from './features/Todo';
import SongFeature from './features/Song';
import Counter from './features/Counter'
import { Route, Routes, Link, NavLink } from 'react-router-dom';


function App() {

  return (
    <div className="App">
      HomePage
      <p><Link to="/todos">Todos</Link></p>
      <p><Link to="/albums">Albums</Link></p>

      <p><NavLink to="/todos">Todos</NavLink></p>
      <p><NavLink to="/albums">Albums</NavLink></p>

      <Routes>


        <Route path="/todos" element={<TodoFeature />} />
        <Route path="/albums" element={<SongFeature />} />
      </Routes>
    </div>
  );
}

export default App;
