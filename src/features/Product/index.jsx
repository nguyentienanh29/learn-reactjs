import { Route, Routes } from 'react-router-dom';
import ListPage from './pages/ListPage';
import { Box } from '@material-ui/core';

ProductFeature.propTypes = {};

function ProductFeature(props) {
  return (
    <Box pt={4}>
      <Routes>
        <Route path="/" element={<ListPage />} />
      </Routes>
    </Box>
  );
}

export default ProductFeature;
