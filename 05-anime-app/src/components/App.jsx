/* eslint-disable no-unused-vars */
import { useState } from 'react';

import Main from './main/Main';
import Navbar from './navbar/Navbar';
import Search from './navbar/Search';
import NumResult from './navbar/NumResult';
import animesData from '../assets/data/AnimesData';

export default function App() {
  const [animes, setAnimes] = useState(animesData);

  return (
    <>
      <Navbar>
        <Search>
          <NumResult animes={animes}/>
        </Search>
      </Navbar>
      <Main animes={animes} />
    </>
  );
}
