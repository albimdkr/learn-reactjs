/* eslint-disable no-unused-vars */
import { useState } from "react";

import SelectedBox from "./SelectedBox/SelectedBox";
import ListBox from "./ListBox/ListBox";
import animesData from '../../assets/data/AnimesData';

export default function Main (){
    const [animes, setAnimes] = useState(animesData);
    const [selectedAnime, setSelectedAnime] = useState(animes[0]);

    function handleSelectedAnime(id) {
      const newAnime = animes.filter((anime) => anime.mal_id === id);
      setSelectedAnime(newAnime[0]);
    }
    
    return (
      <main className="main">
        <ListBox animes={animes} onSelectedAnime={handleSelectedAnime} />
        <SelectedBox selectedAnime={selectedAnime} />
      </main>
    );
}


