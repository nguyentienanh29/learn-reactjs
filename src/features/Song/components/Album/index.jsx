import React from "react";
import PropTypes from "prop-types";
import "./album.scss";

Album.propTypes = {
  album: PropTypes.object.isRequired,
};

Album.defaultProps = {
  album: {
    id: 0,
    albumName: "Nguyễn Tiến Anh",
    albumThumnailUrl: "https://www.facebook.com/nguyen.tien.anh.2906/",
  },
};

function Album({ album }) {
  return (
    <div className="album">
      <div className="album-img">
        <img src={album.albumThumnailUrl} alt={album.albumName} />
      </div>
      <p className="album-name">{album.albumName}</p>
    </div>
  );
}

export default Album;
