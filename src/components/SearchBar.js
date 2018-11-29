import React from 'react';
import './App.css';

class SearchBar extends React.Component {
  state = {
    searchTerm: ''
  }
  onInputChange = e => {
    this.setState({
      searchTerm: e.target.value
    });
  }
  render() {
    return (
      <div className="ui fluid icon input search-bar">
        <input
          onChange={this.onInputChange}
          type="text"
          value={this.state.searchTerm}
          placeholder="Search videos..." />
        <i className="search icon"></i>
      </div>
    );
  }
}
export default SearchBar;
