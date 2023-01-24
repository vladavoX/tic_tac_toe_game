interface Props {
  score: { X: number; O: number; TIE: number }
}

const Score = ({ score }: Props) => {
  return (
    <div className='flex justify-between w-[272px] gap-4 text-xs'>
      <div className='flex flex-col items-center bg-cyan-300 w-20 py-2 rounded-md shadow-black shadow-sm'>
        <p>X (P1)</p>
        <p className='font-bold text-sm'>{score.X}</p>
      </div>
      <div className='flex flex-col items-center bg-gray-300 w-20 py-2 rounded-md shadow-black shadow-sm'>
        <p>TIES</p>
        <p className='font-bold text-sm'>{score.TIE}</p>
      </div>
      <div className='flex flex-col items-center bg-yellow-500 w-20 py-2 rounded-md shadow-black shadow-sm'>
        <p>O (P2)</p>
        <p className='font-bold text-sm'>{score.O}</p>
      </div>
    </div>
  )
}

export default Score
