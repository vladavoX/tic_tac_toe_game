import { VscCircleLargeOutline, VscChromeClose } from 'react-icons/vsc'
import { AiOutlineReload } from 'react-icons/ai'

const Header = () => {
  return (
    <div className='flex justify-evenly w-[400px]'>
      <div className='flex items-center gap-1'>
        <VscChromeClose className='text-cyan-300 text-xl stroke-2' />
        <VscCircleLargeOutline className='text-yellow-500 text-xl stroke-2' />
      </div>
      <div className='bg-slate-700 flex items-center px-2 py-1 gap-1 shadow-black shadow-sm rounded-md'>
        <VscChromeClose className='text-gray-400 text-md stroke-2' />
        <p className='text-xs text-gray-400'>TURN</p>
      </div>
      <div className='p-2 bg-gray-400 shadow-black shadow-sm rounded-md'>
        <AiOutlineReload className='stroke-2' />
      </div>
    </div>
  )
}

export default Header
