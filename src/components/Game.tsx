import { VscChromeClose, VscCircleLargeOutline } from 'react-icons/vsc'
import { useEffect } from 'react'

interface Props {
  board: string[][]
  setBoard: React.Dispatch<React.SetStateAction<string[][]>>
  turn: 'X' | 'O'
  setTurn: (turn: 'X' | 'O') => void
  setScore: React.Dispatch<
    React.SetStateAction<{
      X: number
      O: number
      TIE: number
    }>
  >
  winner: 'X' | 'O' | 'TIE' | null
  setWinner: (winner: 'X' | 'O' | 'TIE' | null) => void
}

const Game = ({
  board,
  setBoard,
  turn,
  setTurn,
  setScore,
  winner,
  setWinner,
}: Props) => {
  const checkWinner = async () => {
    for (let i = 0; i < 3; i++) {
      if (
        board[i][0] === board[i][1] &&
        board[i][1] === board[i][2] &&
        board[i][0] !== ''
      ) {
        setWinner(board[i][0] as 'X' | 'O')
        return
      }
    }
    for (let i = 0; i < 3; i++) {
      if (
        board[0][i] === board[1][i] &&
        board[1][i] === board[2][i] &&
        board[0][i] !== ''
      ) {
        setWinner(board[0][i] as 'X' | 'O')
        return
      }
    }
    if (
      board[0][0] === board[1][1] &&
      board[1][1] === board[2][2] &&
      board[0][0] !== ''
    ) {
      setWinner(board[0][0] as 'X' | 'O')
      return
    }
    if (
      board[0][2] === board[1][1] &&
      board[1][1] === board[2][0] &&
      board[0][2] !== ''
    ) {
      setWinner(board[0][2] as 'X' | 'O')
      return
    }
    let isTie = true
    for (let i = 0; i < 3; i++) {
      for (let j = 0; j < 3; j++) {
        if (board[i][j] === '') {
          isTie = false
        }
      }
    }
    if (isTie) {
      setWinner('TIE')
    }
  }

  useEffect(() => {
    checkWinner()
  }, [turn])

  useEffect(() => {
    if (winner === 'X') {
      setScore((prev) => ({
        ...prev,
        X: prev.X + 1,
      }))
      return
    }
    if (winner === 'O') {
      setScore((prev) => ({
        ...prev,
        O: prev.O + 1,
      }))
      return
    }
    if (winner === 'TIE') {
      setScore((prev) => ({
        ...prev,
        TIE: prev.TIE + 1,
      }))
      return
    }
  }, [winner])

  return (
    <div className='flex flex-col gap-4'>
      {board.map((row, rowIndex) => (
        <div
          key={rowIndex}
          className='flex gap-4'
        >
          {row.map((cell, cellIndex) => (
            <div
              key={cellIndex}
              className='bg-slate-700 w-20 h-20 shadow-black shadow-md rounded-md hover:bg-slate-500 
              cursor-pointer flex items-center justify-center'
              onClick={() => {
                if (board[rowIndex][cellIndex] !== '') return
                board[rowIndex][cellIndex] = turn
                console.log(board)
                setTurn(turn === 'X' ? 'O' : 'X')
              }}
              {...(cell === 'X' && {
                children: (
                  <VscChromeClose className='text-cyan-300 text-5xl stroke-2' />
                ),
              })}
              {...(cell === 'O' && {
                children: (
                  <VscCircleLargeOutline className='text-yellow-500 text-5xl stroke-2' />
                ),
              })}
            />
          ))}
        </div>
      ))}
    </div>
  )
}

export default Game
