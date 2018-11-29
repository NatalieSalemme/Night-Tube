import React from 'react';
import SearchBar from './SearchBar';
import Youtube from '../apis/Youtube';
import VideoInfo from './VideoInfo';
import VideoList from './VideoList';

import './App.css';

class App extends React.Component {
  state = {
    videos: [],
    selectedVideo: null
  }
  onInputSubmit = async searchTerm => {
    const response = await
    Youtube.get('/search', {
      params: {
        q: searchTerm
      }
    });
    this.setState({
      videos: response.data.items,
      selectedVideo: response.data.items[1]
    });
  }
  onVideoSelect = (video) => {
    this.setState({
      selectedVideo: video
    });
  }
  render() {
    return (
      <div>
        <div>
          <SearchBar
            onInputSubmit={this.onInputSubmit}/>
          <div className="ui container">
          <VideoInfo
            video={this.state.selectedVideo} />
          </div>
          <VideoList
            videos={this.state.videos}
            onVideoSelect={this.onVideoSelect} />
        </div>
      </div>
    );
  }
}
export default App;
