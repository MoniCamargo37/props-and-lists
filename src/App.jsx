import './App.css';
import React, { useState } from 'react';
import animalData from './data.json';
import Card from './components/Card';

function App() { 
  const [animals, setAnimals] = useState(animalData);

  const handleSortByLife = () => {
    const sortedAnimals = [...animals].sort((a, b) => a.lifeExpectancy - b.lifeExpectancy);
    setAnimals(sortedAnimals);
  };

  const handleFilterDogs = () => {
    const dogAnimals = animals.filter(elem => elem.type === 'dog');
    setAnimals(dogAnimals);
  };

  return (
    <div className="App">
      <h1>Adopt me plz 🐾</h1>
      <div className="action_container">
        <button className="action-btn" onClick={handleSortByLife}>Sort by life</button>
        <button className="action-btn" onClick={handleFilterDogs}>Show only Dog </button>
      {animals.map(elem => {
        return <Card key={elem._id} animal={elem}/>
      })}
    </div>
    </div>
  );
}

export default App;
