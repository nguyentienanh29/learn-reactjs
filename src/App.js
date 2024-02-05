//import './App.css';
import React from 'react';
import TodoFeature from './features/Todo';
import SongFeature from './features/Song';
import Counter from './features/Counter'
import { Route, Routes, Link, NavLink, Navigate, useParams } from 'react-router-dom';
import ListPage from './features/Todo/pages/ListPage';
import DetailPage from './features/Todo/pages/DetailPage';
import NotFound from './components/NotFound';


function App() {
  let params = useParams()

  return (
    <div className="App">
      HomePage
      {/* <p><Link to="/todos">Todos</Link></p>
      <p><Link to="/albums">Albums</Link></p> */}

      <p><NavLink to="/todos">Todos</NavLink></p>
      <p><NavLink to="/albums">Albums</NavLink></p>

      <Routes>
        <Route path="/home"
          element={<Navigate to="/" replace />} />
        <Route path="/post-list/:id"
          element={<Navigate to={`/posts/${params.id}`} replace />}
        />
        <Route path="/todos/*" element={<TodoFeature />} >

        </Route>
        <Route path="/albums" element={<SongFeature />} />

        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
