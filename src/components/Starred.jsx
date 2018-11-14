import React from 'react';

class Starred extends React.Component {

  constructor(props) {
    super(props);
    this.handleStarAnimalChange = this.handleStarAnimalChange.bind(this);
  }

  handleStarAnimalChange(e) {
    this.props.onStarAnimalChange(e.target.checked);
  }

  render() {
    console.log(this.starred);
    return (
      <div>
        <input id="star" type="checkbox"
          checked={this.props.starred}
          onChange={this.props.handleStarAnimalChange}/>
      </div>
    );
  }
}

export default Starred;
