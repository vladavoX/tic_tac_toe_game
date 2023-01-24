import { VscChromeClose, VscCircleLargeOutline } from 'react-icons/vsc'

interface Props {
  setBoard: React.Dispatch<React.SetStateAction<string[][]>>
  turn: 'X' | 'O'
  setTurn: (turn: 'X' | 'O') => void
  winner: 'X' | 'O' | 'TIE' | null
  setWinner: (winner: 'X' | 'O' | 'TIE' | null) => void
  setScore: React.Dispatch<
    React.SetStateAction<{
      X: number
      O: number
      TIE: number
    }>
  >
  newRound: () => void
}

const ResultModal = ({
  setBoard,
  turn,
  setTurn,
  winner,
  setWinner,
  setScore,
  newRound,
}: Props) => {
  const resetEverything = () => {
    setBoard([
      ['', '', ''],
      ['', '', ''],
      ['', '', ''],
    ])
    setTurn(turn === 'X' ? 'O' : 'X')
    setWinner(null)
    setScore({
      X: 0,
      O: 0,
      TIE: 0,
    })
  }

  return (
    <div className='absolute top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center z-50'>
      <div
        className='
        flex
        flex-col
        gap-4
        justify-center
        items-center
    bg-slate-800
        w-full
        h-48
      '
      >
        <div className='flex items-center gap-6'>
          {winner === 'TIE' && <h1>TIE</h1>}
          {winner === 'X' && (
            <>
              <VscChromeClose className='text-5xl text-cyan-300 stroke-2' />
              <h1 className='text-4xl text-cyan-300 font-bold'>
                TAKES THE ROUND
              </h1>
            </>
          )}
          {winner === 'O' && (
            <>
              <VscCircleLargeOutline className='text-5xl text-yellow-500 stroke-2' />
              <h1 className='text-4xl text-yellow-500 font-bold'>
                TAKES THE ROUND
              </h1>
            </>
          )}
        </div>
        <div className='flex gap-4'>
          <button
            className='bg-gray-300 px-4 py-2 rounded-md shadow-black shadow-md hover:bg-gray-100 font-bold text-sm'
            onClick={() => resetEverything()}
          >
            QUIT
          </button>
          <button
            className='bg-yellow-500 px-4 py-2 rounded-md shadow-black shadow-md hover:bg-yellow-300 font-bold text-sm'
            onClick={() => newRound()}
          >
            NEXT ROUND
          </button>
        </div>
      </div>
    </div>
  )
}

export default ResultModal
