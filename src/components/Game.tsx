const board = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
]

const Game = () => {
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
              className='bg-slate-700 w-20 h-20 shadow-black shadow-md rounded-md hover:bg-slate-500 cursor-pointer'
            />
          ))}
        </div>
      ))}
    </div>
  )
}

export default Game
