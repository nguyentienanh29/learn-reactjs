import React from "react";
import AlbumList from "./components/AlbumList";

SongFeature.propTypes = {};

function SongFeature(props) {
  const albumList = [
    {
      id: 1,
      albumName: "Nụ Cười Xuân 1",
      albumThumnailUrl:
        "https://photo-resize-zmp3.zmdcdn.me/w165_r1x1_jpeg/cover/f/7/1/4/f714fdfe60f01c7a2409ad1129e75fe6.jpg",
    },

    {
      id: 2,
      albumName: "Nụ Cười Xuân 2",
      albumThumnailUrl:
        "https://photo-resize-zmp3.zmdcdn.me/w165_r1x1_jpeg/cover/f/7/1/4/f714fdfe60f01c7a2409ad1129e75fe6.jpg",
    },

    {
      id: 3,
      albumName: "Nụ Cười Xuân 3",
      albumThumnailUrl:
        "https://photo-resize-zmp3.zmdcdn.me/w165_r1x1_jpeg/cover/f/7/1/4/f714fdfe60f01c7a2409ad1129e75fe6.jpg",
    },
  ];

  return (
    <div>
      <h3>Có Thể Bạn Sẽ Thích</h3>
      <AlbumList albumList={albumList} />
    </div>
  );
}

export default SongFeature;
