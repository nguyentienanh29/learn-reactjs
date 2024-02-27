//import './App.css';
import ProductFeature from 'features/Product';
import SongFeature from 'features/Song/index';
import TodoFeature from 'features/Todo/index';
import { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import productApi from './api/productApi';
import Header from './components/Header';

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
      <Header />
      <Routes>
        <Route path="/todos/*" element={<TodoFeature />}></Route>
        <Route path="/albums" element={<SongFeature />} />
        <Route path="/products" element={<ProductFeature />} />
        {/* <Route path="/" element={<Counter />} /> */}
        {/* <Route path="/home" element={<Navigate to="/" replace />} />
        <Route path="/" element={<TodoFeature />} />
        <Route path="*" element={<NotFound />} /> */}
      </Routes>
    </div>
  );
}

export default App;
