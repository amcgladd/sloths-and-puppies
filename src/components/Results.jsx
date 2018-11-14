import React from 'react';
import AnimalCategory from './AnimalCategory';
import Animal from './Animal';

function Results(props) {
  const filterText = props.filterText;
  const starredOnly = props.starredOnly;

  const rows = [];
  let lastCategory = null;

  props.animals.forEach((animal) => {
    if (animal.name.indexOf(filterText) === -1) {
      return;
    }
    if (starredOnly && !animal.starred) {
      return;
    }
    if (animal.category !== lastCategory) {
      console.log(animal.key);
      rows.push(
        <AnimalCategory
          category = {animal.category}
          key = {animal.key} />
      );
    }
    rows.push(
      <Animal
        name={animal.name}
        city={animal.city}
        age={animal.age}
        url={animal.url}
        key={animal.key}
        uuid={animal.uuid}/>
    );
    lastCategory = animal.category;
  });
  return(
    <div>
      {rows}
    </div>
  );
}


export default Results;
