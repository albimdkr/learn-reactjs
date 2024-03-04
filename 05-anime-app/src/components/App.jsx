/* eslint-disable no-unused-vars */
import { useState } from 'react';

import Main from './main/Main';
import Navbar from './navbar/Navbar';
import animesData from '../assets/data/AnimesData';

export default function App() {
  const [animes, setAnimes] = useState(animesData);

  return (
    <>
      <Navbar animes={animes} />
      <Main animes={animes} />
    </>
  );
}
