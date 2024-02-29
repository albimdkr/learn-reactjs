/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { useState } from 'react'

function App() {
  function Header() {
    return <h1 className="title">Simple Game Tic Tac Toe 🚀</h1>;
  }

  const [likes, setLikes] = useState(0);

  // Logic Function Like
  function HandleLikes() {
    setLikes(likes + 1);
  }

  // function LikeBtn() {
  //   return (
  //     <div className="btnLike" onClick={HandleLikes}>
  //       👍({likes})
  //     </div>
  //   );
  // }

  // Square
  function Square({ value, onSquareClick }) {
    return (
      <button className="square" onClick={onSquareClick}>
        {value}
      </button>
    );
  }

  // Manage Game
  function Game() {
    const [xIsNext, setXIsNext] = useState(true);
    const [history, setHistory] = useState([Array(9).fill(null)]);
    const currentSquares = history [history.length - 1];

    function handlePlay (nextSquares){
      setHistory([...history, nextSquares]);
      setXIsNext(!xIsNext);
    }

    const moves = history.map((squares, move) => {
      let description = ''
      if (move > 0) {
        description = 'Go To Move #' + move;
      } else {
        description = 'Go To Game Start';
      }

      return (
        <li key={move}>
          <button className='btn-time' onClick={() => jumpTo(move)}>{description}</button>
        </li>
      );
    });
    
    return (
      <div className="game">
        <div className="game-board">
          <Board xIsNext={xIsNext} squares={currentSquares} onPlay={handlePlay}/>
        </div>
        <div className="game-info">
          <ol>{moves}</ol>
        </div>
      </div>
    );
  }


    function Board({ xIsNext, squares, onPlay }) {
      function handleClick(i) {
        // Block event when the button !empty
        if (squares[i] || calculateWiner(squares)) return;

        const nextSquares = squares.slice();

        // Condition to check true or false
        nextSquares[i] = xIsNext ? 'X' : 'O';

        onPlay(nextSquares);
      }

      const winner = calculateWiner(squares);
      let status = '';
      if (winner) {
        status = 'The Winner Is: ' + winner;
      } else {
        status = 'Oke, next player: ' + (xIsNext ? 'X' : 'O');
      }

      return (
        <>
          <div className="status">{status}</div>
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
        </>
      );
    }

  return (
    <>
      <Header />
      <Game />
    </>
  );
}


// Determine line winner
function calculateWiner(squares) {
  const lines = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6],
  ];

  for (let i = 0; i < lines.length; i++) {
    const [a,b,c] = lines [i];
    if (squares[a] == squares[b] && squares[b] == squares[c]) {
      return squares[a];
    }
  }

  // case if not found a winner
  return false;
}


export default App
