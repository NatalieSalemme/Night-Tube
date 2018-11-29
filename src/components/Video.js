import React from 'react';

const Video = ({ video, onVideoSelect }) => {
  return (
    <div
      className="video"
      onClick={() => onVideoSelect(video)}>
      <div className="video-title">
        <h4>{video.snippet.title.length > 35 ?
          `${video.snippet.title.slice(0,1).toUpperCase()}${video.snippet.title.slice(1, 35).toLowerCase()}...` :
          `${video.snippet.title.slice(0,1).toUpperCase()}${video.snippet.title.slice(1).toLowerCase()}`}</h4>
      </div>
      <img
        className="video-thumbnail"
        src={video.snippet.thumbnails.medium.url}
        alt={video.snippet.title} />

    </div>
  );
}
export default Video;
