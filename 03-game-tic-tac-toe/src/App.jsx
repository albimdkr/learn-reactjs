/* eslint-disable react/prop-types */
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
  function Square({ value, onSquareClick }){
    return (
      <button className='square' onClick={onSquareClick}>{value}</button>
    )
  }

  function Board() {
    const [squares, setSquares] = useState(Array(9).fill(null));

    // Changes Feature between X and O
    // Bolean If true X else O
    const [xIsNext, setXIsNext] = useState(true);

    function handleClick(i){
      // Block event when the button !empty
      if (squares[i]) return;

      const nextSquares = squares.slice();

      // Condition to check true or false
      nextSquares[i] = xIsNext ? 'X' : 'O';

      setSquares(nextSquares);
      setXIsNext(!xIsNext);
    }

    return (
      <div className="board">
        <Square value={squares[0]} onSquareClick={() => handleClick(0)} />
        <Square value={squares[1]} onSquareClick={() => handleClick(1)} />
        <Square value={squares[2]} onSquareClick={() => handleClick(2)} />
        <Square value={squares[3]} onSquareClick={() => handleClick(3)} />
        <Square value={squares[4]} onSquareClick={() => handleClick(4)} />
        <Square value={squares[5]} onSquareClick={() => handleClick(5)} />
        <Square value={squares[6]} onSquareClick={() => handleClick(6)} />
        <Square value={squares[7]} onSquareClick={() => handleClick(7)} />
        <Square value={squares[8]} onSquareClick={() => handleClick(8)} />
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
