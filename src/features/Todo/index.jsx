import { Route, Routes } from 'react-router-dom';
import DetailPage from './pages/DetailPage';
import ListPage from './pages/ListPage';

TodoFeature.propTypes = {};

function TodoFeature(props) {
  return (
    <div>
      Todo Share UI
      <Routes>
        <Route path="list" element={<ListPage />} />
        <Route path="detail" element={<DetailPage />} />
        <Route
          path="*"
          element={
            <div>
              <ListPage />
              <DetailPage />
            </div>
          }
        />
        {/* <Route path="*" element={<NotFound />} /> */}
      </Routes>
    </div>
  );
}

export default TodoFeature;
