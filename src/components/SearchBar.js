import React from 'react';
import './App.css';

class SearchBar extends React.Component {
  state = {
    searchTerm: '',
    videos: []
  }
  onInputChange = e => {
    this.setState({
      searchTerm: e.target.value
    });
  }
  onFormSubmit = e => {
    e.preventDefault();

  }
  render() {
    return (
      <div className="ui form search-container">
        <form
          onSubmit={this.onFormSubmit}>
          <div className="ui icon input search-bar">
            <input
              onChange={this.onInputChange}
              type="text"
              value={this.state.searchTerm}
              placeholder="Search videos..." />
            <i className="search icon"></i>
          </div>
        </form>
      </div>
    );
  }
}
export default SearchBar;
