import React from "react";
import { Routes, Route } from "react-router-dom";
import DetailPage from "./pages/DetailPage";
import ListPage from "./pages/ListPage";
import NotFound from "../../components/NotFound";

TodoFeature.propTypes = {};

function TodoFeature(props) {
  return (
    <div>
      <Routes>
        <Route path="list" element={<ListPage />} />
        <Route path="detail" element={<DetailPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default TodoFeature;
