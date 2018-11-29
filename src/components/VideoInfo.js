import React from 'react';

const VideoInfo = ({ video }) => {
  if(!video) {
    return <div>Loading...</div>
  }
  const videoSrc=`https://youtube.com/embed/${video.id.videoId}?autoplay=1`;
  console.log(`https://youtube.com/embed/${video.id.videoId}?autoplay=1`);
  return (
    <div className="ui embed video-container container">
      <iframe
        src={videoSrc}
        title="video player"
        className="video-player"
        frameBorder="0"
        />
      <div>
        <h4>{video.snippet.title}</h4>
        <p>{video.snippet.description}</p>
      </div>
    </div>
  );
}
export default VideoInfo;
