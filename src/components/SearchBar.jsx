import React from 'react';

class SearchBar extends React.Component{

  constructor(props) {
    super(props);
    this.handleFilterTextChange = this.handleFilterTextChange.bind(this);
    this.handleStarredOnlyChange = this.handleStarredOnlyChange.bind(this);
  }

  handleFilterTextChange(e) {
    this.props.onFilterTextChange(e.target.value);
  }

  handleStarredOnlyChange(e) {
    this.props.onStarredOnlyChange(e.target.checked);
  }

  render(){
    return (
      <form>
        <label>Search:</label>
        <input type="text"
          value={this.props.filterText}
          onChange={this.handleFilterTextChange}/>
        <label>Show only starred:</label>
        <input type="checkbox"
          checked={this.props.starredOnly}
          onChange={this.handleStarredOnlyChange}/>
      </form>
    );
  }
}


export default SearchBar;
