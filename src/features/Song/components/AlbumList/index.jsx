import React from "react";
import PropTypes from "prop-types";
import Album from "../Album";
import "./albumList.scss";

AlbumList.propTypes = {
  albumList: PropTypes.array.isRequired,
};

AlbumList.defaultProps = {
  albumList: [],
};

function AlbumList({ albumList }) {
  return (
    <ul className="albumList">
      {albumList.map((album) => (
        <li key={album.id}>
          <Album album={album} />
        </li>
      ))}
    </ul>
  );
}

export default AlbumList;
