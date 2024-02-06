//import './App.css';
import React, { useEffect } from 'react';
import { NavLink, Navigate, Route, Routes } from 'react-router-dom';
import NotFound from './components/NotFound';
import SongFeature from './features/Song';
import TodoFeature from './features/Todo';
import productApi from './api/productApi';

function App() {
  useEffect(() => {
    const fetchProducts = async () => {
      const productList = await productApi.getAll();
      console.log(productList);
    };

    fetchProducts();
  }, []);

  return (
    <div className="App">
      HomePage
      {/* <p><Link to="/todos">Todos</Link></p>
      <p><Link to="/albums">Albums</Link></p> */}
      <p>
        <NavLink to="/todos">Todos</NavLink>
      </p>
      <p>
        <NavLink to="/albums">Albums</NavLink>
      </p>
      <Routes>
        <Route path="/home" element={<Navigate to="/" replace />} />
        <Route path="/" element={<TodoFeature />} />
        {/* <Route path="/post-list/:id" element={<Navigate to={`/posts/${params.id}`} replace />} /> */}
        <Route path="/todos/*" element={<TodoFeature />}></Route>
        <Route path="/albums" element={<SongFeature />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
