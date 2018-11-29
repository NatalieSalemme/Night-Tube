import React from 'react';
import Video from './Video';
import VideoInfo from './VideoInfo';

const VideoList = ({ videos, onVideoSelect, video }) => {
  const renderedList = videos.map(video => {
    return <Video
      key={video.id.videoId}
      video={video}
      onVideoSelect={onVideoSelect} />
  })
  return (
    <div className="ui grid">
      <div className="ui row">
        <div className="two wide column first-row">
        {renderedList.slice(0,3)}
        </div>
        <div className="ui container twelve wide column">
          <VideoInfo
            video={video} />
        </div>
        <div className="two wide column second-row">
          {renderedList.slice(3, 6)}
        </div>
      </div>


      <div className="second-video-row ">
        <div className="one-vid-row">
          {renderedList.slice(6, 15)}
        </div>
        <div className="one-vid-row">
          {renderedList.slice(15)}
        </div>
      </div>
    </div>
  );
}
export default VideoList;
