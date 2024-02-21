//import './App.css';
import React, { useEffect } from 'react';
import { NavLink, Navigate, Route, Routes } from 'react-router-dom';
import NotFound from './components/NotFound';
import SongFeature from './features/Song';
import TodoFeature from './features/Todo';
import productApi from './api/productApi';
import Counter from './features/Counter';

function App() {
  useEffect(() => {
    const fetchProducts = async () => {
      //muốn truyền thêm param
      const params = {
        _limit: 10,
      };

      const productList = await productApi.getAll(params);
      console.log(productList);
    };

    fetchProducts();
  }, []);

  return (
    <div className="App">
      HomePage
      <p>
        <NavLink to="/todos">Todos</NavLink>
      </p>
      <p>
        <NavLink to="/albums">Albums</NavLink>
      </p>
      <Routes>
        <Route path="/" element={<Counter />} />
        {/* <Route path="/home" element={<Navigate to="/" replace />} />
        <Route path="/" element={<TodoFeature />} />
        <Route path="/todos/*" element={<TodoFeature />}></Route>
        <Route path="/albums" element={<SongFeature />} />
        <Route path="*" element={<NotFound />} /> */}
      </Routes>
    </div>
  );
}

export default App;
