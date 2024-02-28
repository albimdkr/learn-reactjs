/* eslint-disable react/prop-types */
import { useState } from 'react'
import Header from './components/Header'

function App() {
  const [likes, setLikes] = useState(0);

  // State Updater Function (Logic)
  function handleClick() {
    setLikes(likes + 1);
  }

  // Component Button Like
  function BtnLike() {
    return (
      <button
        onClick={handleClick}>
        Like ({likes})
      </button>
    );
  }

  return (
    <div>
      <Header />
      <BtnLike />
    </div>
  );
}

export default App
