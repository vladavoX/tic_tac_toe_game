import { useState } from 'react'

import Game from './components/Game'
import Header from './components/Header'
import Score from './components/Score'
import ResultModal from './components/ResultModal'

function App() {
  const newRound = () => {
    setBoard([
      ['', '', ''],
      ['', '', ''],
      ['', '', ''],
    ])
    setTurn(turn === 'X' ? 'O' : 'X')
    setWinner(null)
  }

  const [board, setBoard] = useState([
    ['', '', ''],
    ['', '', ''],
    ['', '', ''],
  ])
  const [turn, setTurn] = useState<'X' | 'O'>('X')
  const [score, setScore] = useState({
    X: 0,
    O: 0,
    TIE: 0,
  })
  const [winner, setWinner] = useState<'X' | 'O' | 'TIE' | null>(null)
  return (
    <div className='bg-slate-800 min-h-screen flex flex-col gap-4 justify-center items-center'>
      <Header
        turn={turn}
        newRound={newRound}
      />
      <Game
        board={board}
        setBoard={setBoard}
        turn={turn}
        setTurn={setTurn}
        setScore={setScore}
        winner={winner}
        setWinner={setWinner}
      />
      <Score score={score} />
      {winner && (
        <ResultModal
          setBoard={setBoard}
          turn={turn}
          setTurn={setTurn}
          winner={winner}
          setWinner={setWinner}
          setScore={setScore}
          newRound={newRound}
        />
      )}
    </div>
  )
}

export default App
