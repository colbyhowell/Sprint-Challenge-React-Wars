import React, { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios'
import CharacterCreator from './components/StarWarsFeedCreator';

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the star wars api in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  const [characterInfo, setCharacterInfo] = useState([])

  useEffect( () => {
    axios
      .get('https://swapi.co/api/people/?page=')
      .then(res => {
        console.log(res)
        setCharacterInfo(res.data.results)
        console.log(res.data.results.name[0])
      })
      .catch(err =>{
        console.log(err)
      })
  },[])

  return (
    <div className="App">
      <h1 className="Header">React Wars</h1>

      <CharacterCreator 
        charInfo = {characterInfo}
      />
    </div>
  );
}

export default App;
