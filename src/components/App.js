import React from 'react';
import SearchBar from './SearchBar';
import Youtube from '../apis/Youtube';
import VideoList from './VideoList';

import './App.css';

class App extends React.Component {
  state = {
    videos: [],
    selectedVideo: null
  }
  componentDidMount() {
    this.onInputSubmit('vine compilation');
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
          <VideoList
            videos={this.state.videos}
            onVideoSelect={this.onVideoSelect}
            video={this.state.selectedVideo}/>
        </div>
      </div>
    );
  }
}
export default App;
