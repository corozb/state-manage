import React from 'react'
import CharacterList from './components/CharacterList';
import HeroList from './components/HeroList';
import SquadStats from './components/SquadStats';

function App() {
  return (
    <div className="App">
      <h1>SuperSquad</h1>
      <div className="col-md-4">
        <CharacterList/>
      </div>
      <div className="col-md-4">
        <HeroList/>
      </div>
      <div className="col-md-4">
        <SquadStats/>
      </div>
    </div>
  );
}

export default App;
