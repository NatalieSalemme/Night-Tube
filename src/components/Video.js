import React from 'react';


const Video = ({ video, onVideoSelect }) => {
  let desc = video.snippet.description.slice(0,70);

      return (
        <div
          className="video"
          onClick={() => onVideoSelect(video)}>
          <div className="video-title">
            <h4>{video.snippet.title.length > 35 ?
              `${video.snippet.title.slice(0,1).toUpperCase()}${video.snippet.title.slice(1, 35).toLowerCase()}...` :
              `${video.snippet.title.slice(0,1).toUpperCase()}${video.snippet.title.slice(1).toLowerCase()}`}</h4>
          </div>
          <div className="img-wrap">
            <img
              className="video-thumbnail"
              src={video.snippet.thumbnails.medium.url}
              alt={video.snippet.title} />
            <p className="img-description">{desc}</p>
          </div>
        </div>
      );
}
export default Video;
