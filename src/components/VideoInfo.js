import React from 'react';

const VideoInfo = ({ video }) => {
  if(!video) {
    return <div>Loading...</div>
  }
  const videoSrc=`https://youtube.com/embed/${video.id.videoId}`;
  return (
    <div>
      <iframe src={videoSrc} title="video player" />
      <div>
        <h4>{video.snippet.title}</h4>
        <p>{video.snippet.description}</p>
      </div>
    </div>
  );
}
export default VideoInfo;
