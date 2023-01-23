import { VscCircleLargeOutline, VscChromeClose } from 'react-icons/vsc'
import { AiOutlineReload } from 'react-icons/ai'

const Header = () => {
  return (
    <div className='flex justify-between w-[272px]'>
      <div className='flex items-center gap-1'>
        <VscChromeClose className='text-cyan-300 text-xl stroke-2' />
        <VscCircleLargeOutline className='text-yellow-500 text-xl stroke-2' />
      </div>
      <div className='bg-slate-700 flex items-center px-5 py-1 gap-1 shadow-black shadow-sm rounded-md'>
        <VscChromeClose className='text-gray-300 text-md stroke-2' />
        <p className='text-xs text-gray-300'>TURN</p>
      </div>
      <div className='p-2 bg-gray-300 shadow-black shadow-sm rounded-md ml-[12px] cursor-pointer hover:bg-gray-100'>
        <AiOutlineReload className='stroke-2' />
      </div>
    </div>
  )
}

export default Header
