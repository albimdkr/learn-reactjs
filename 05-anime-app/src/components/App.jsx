/* eslint-disable no-unused-vars */
import { useState } from 'react';

import animesData from '../assets/data/AnimesData';
import Main from './main/Main';
import Navbar from './navbar/Navbar';
import Search from './navbar/Search';
import NumResult from './navbar/NumResult';
import Box from './main/Box';
import AnimeList from './main/BoxList/AnimeList';
import AnimeDetail from './main/SelectedBox/AnimeDetail'

export default function App() {
  const [animes, setAnimes] = useState(animesData);
  const [selectedAnime, setSelectedAnime] = useState(animes[0]);

  function handleSelectedAnime(id) {
    const newAnime = animes.filter((anime) => anime.mal_id === id);
    setSelectedAnime(newAnime[0]);
  }

  return (
    <>
      <Navbar>
        <Search>
          <NumResult animes={animes}/>
        </Search>
      </Navbar>
      <Main>
        <Box>
          <AnimeList animes={animes} onSelectedAnime={handleSelectedAnime} />
        </Box>
        <Box>
          <AnimeDetail selectedAnime={selectedAnime} />;
        </Box>
      </Main>
    </>
  );
}
