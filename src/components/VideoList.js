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
    <div>
    {renderedList.slice(0,5)}
    <div className="ui container">
    <VideoInfo
      video={video} />
    </div>
    {renderedList.slice(5)}
    </div>
  );
}
export default VideoList;
