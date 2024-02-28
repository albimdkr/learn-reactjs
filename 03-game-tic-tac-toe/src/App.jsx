/* eslint-disable no-unused-vars */
import { useState } from 'react'

function App() {

  function Header (){
    return (
      <h1 className="title">Simple Game Tic Tac Toe 🚀</h1>
    )
    
  }

  const [likes, setLikes ] = useState(0);

  // Logic Function Like
  function HandleLikes (){
    setLikes(likes + 1);
  }

  function LikeBtn(){
    return <div className="btnLike" onClick={HandleLikes}>👍({likes})</div>;
  }

  // Square 
  function Square(){
    // State
    const [value, setValue] = useState('');

    function handleClickX (){
      setValue('X');
    }

    return (
      <button className='square' onClick={handleClickX}>{value}</button>
    )
  }

  function Board() {
    return (
      <div className="board">
        <Square />
        <Square />
        <Square />
        <Square />
        <Square />
        <Square />
        <Square />
        <Square />
        <Square />
      </div>
    );
  }

  return (
    <>
      <Header />
      <Board />
      <LikeBtn />
    </>
  )
}

export default App
