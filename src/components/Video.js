import React from 'react';

const Video = ({ video, onVideoSelect }) => {
  return (
    <div
      className="video"
      onClick={() => onVideoSelect(video)}>
      <div className="video-title">
        <h4>{video.snippet.title} </h4>
      </div>
      <img
        className="video-thumbnail"
        src={video.snippet.thumbnails.medium.url}
        alt={video.snippet.title} />

    </div>
  );
}
export default Video;
