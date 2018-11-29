import React from 'react';
import Video from './Video';

const VideoList = ({ videos, onVideoSelect }) => {
  const renderedList = videos.map(video => {
    return <Video
      key={video.id.videoId}
      video={video}
      onVideoSelect={onVideoSelect} />
  })
  return (
    <div>
    {renderedList}
    </div>
  );
}
export default VideoList;
