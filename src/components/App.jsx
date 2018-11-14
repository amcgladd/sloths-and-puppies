import React from 'react';
import SearchBar from './SearchBar';
import Results from './Results';
import PropTypes from 'prop-types';

const ANIMALS = [

  {category: 'Dog', age: '4', starred: false, name: 'Ginger', city: 'Portland', url: 'https://s3.amazonaws.com/cdn-origin-etr.akc.org/wp-content/uploads/2017/11/12224759/Saluki-On-White-03.jpg', uuid: '2'},
  {category: 'Dog', age: '1', starred: false, name: 'Marv', city: 'Portland', url: 'https://s3.amazonaws.com/cdn-origin-etr.akc.org/wp-content/uploads/2017/11/12235346/Bull-Terrier-On-White-02.jpg', uuid: '3'},
  {category: 'Dog', age: '6', starred: false, name: 'Foo', city: 'Seattle', url: 'https://s3.amazonaws.com/cdn-origin-etr.akc.org/wp-content/uploads/2017/11/12225627/Pomeranian-On-White-01.jpg', uuid: '4'},
  {category: 'Sloth', age: '97', starred: false, name: 'Ringo', city: 'Seattle', url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3tMOChtllpg9WJz1xVqezHHrzVKjbAQQZEF7RXAjPfm0cD2O1', uuid: '5'},
  {category: 'Sloth', age: '81', starred: false, name: 'Hugh', city: 'Portland', url: 'https://i.kym-cdn.com/photos/images/original/000/923/819/9ce.jpg', uuid: '6'},
  {category: 'Sloth', age: '109', starred: false, name: 'Bubbles', city: 'Portland', url: 'https://dingo.care2.com/pictures/causes/3180/3179130.large.jpg', uuid: '1'},
];

class App extends React.Component{

  constructor(props) {
    super(props);
    this.state = {
      filterText: '',
      starredOnly: false,
      animals: ANIMALS
    };
    this.handleFilterTextChange = this.handleFilterTextChange.bind(this);
    this.handleStarredOnlyChange = this.handleStarredOnlyChange.bind(this);
    this.handleStarAnimalChange = this.handleStarAnimalChange.bind(this);
  }

  handleStarAnimalChange() {
    let newAnimalList = this.state.animals.slice();
    let newAnimal = Object.assign({}, newAnimalList[0]);
    newAnimal.starred = true;
    newAnimalList[0] = newAnimal;

    this.setState({
      animals: newAnimalList
    });
  }

  handleFilterTextChange(filterText) {
    this.setState({
      filterText: filterText
    });
  }

  handleStarredOnlyChange(starredOnly) {
    this.setState({
      starredOnly: starredOnly
    });
  }

  render(){
    return (
      <div>
        <SearchBar
          filterText={this.state.filterText}
          starredOnly={this.state.starredOnly}
          onFilterTextChange={this.handleFilterTextChange}
          onStarredOnlyChange={this.handleStarredOnlyChange}
        />
      <button onClick={this.handleStarAnimalChange}>click me</button>
        <Results animals={this.state.animals}
          filterText={this.state.filterText}
          starredOnly={this.state.starredOnly}
        />
      </div>
    );
  }
}

App.propTypes = {
  category: PropTypes.string,
  age: PropTypes.string,
  starred: PropTypes.boolean,
  name: PropTypes.string,
  city: PropTypes.string,
  url: PropTypes.string,
  uuid: PropTypes.string
};

export default App;
