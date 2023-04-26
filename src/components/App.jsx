import { Route, Routes } from 'react-router-dom';
import { useState, useEffect } from 'react';
import data from './data.json'

import './App.scss';

import Header from './Header/Header';
import CharacterList from './CharacterList';
import Filter from './Filter';
import CharacterDetail from './CharacterDetail';

export const App = () => {
  const [filterByName, setFilterByName] = useState('');
  const [dataCharacter, setDataCharacter] = useState([]);

  useEffect(() => {
    setDataCharacter(data);
  }, []);
  console.log(data);

  const handleFilterName = value => {
    setFilterByName(value);
  };

  const handleSubmit = event => {
    event.preventDefault();
  };

  const filteredCharacters = () => {
    return dataCharacter.filter(eachCharacter =>
      eachCharacter.name.toLowerCase().includes(filterByName.toLowerCase())
    );
  };

  const errorMessage =
    filteredCharacters().length === 0
      ? `There's no character that matches the word: ${filterByName.toLowerCase()}`
      : null;

  // const { pathname } = useLocation();
  // const dataUrl = matchPath('/character/:characterId', pathname);
  // const characterId = dataUrl !== null ? dataUrl.params.characterId : null;
  // const characterFound = dataCharacter.find(
  //   character => character.id === parseInt(characterId)
  // );

  return (
    <div>
      <Routes>
        <Route
          path="/"
          element={
            <main className="container">
              <Header />
              <Filter
                filterByName={filterByName}
                errorMessage={errorMessage}
                handleFilterName={handleFilterName}
                handleSubmit={handleSubmit}
              />
              <CharacterList
                filterByName={filterByName}
                characters={filteredCharacters(dataCharacter)}
              />
            </main>
          }
        ></Route>
        <Route
          path="/character/:characterId"
          element={<CharacterDetail character={dataCharacter} />}
        ></Route>
      </Routes>
    </div>
  );
};