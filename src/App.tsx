import { useState } from 'react'

import Game from './components/Game'
import Header from './components/Header'
import Score from './components/Score'

function App() {
  const [turn, setTurn] = useState<'X' | 'O'>('X')
  const [score, setScore] = useState<{ X: number; O: number; TIE: number }>({
    X: 0,
    O: 0,
    TIE: 0,
  })
  const [winner, setWinner] = useState<'X' | 'O' | 'TIE' | null>(null)
  return (
    <div className='bg-slate-800 min-h-screen flex flex-col gap-4 justify-center items-center'>
      <Header turn={turn} />
      <Game
        turn={turn}
        setTurn={setTurn}
        setScore={setScore}
        setWinner={setWinner}
      />
      <Score score={score} />
    </div>
  )
}

export default App
