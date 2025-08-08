import React from 'react'
import logo from '../assets/images/logo.png'
import ContactButton from './common/ContactButton'
import Menu from '../assets/icons/Menu'

function Navbar() {
  return (
    <div className='bg-[#0e0e17] py-6 px-2 md:px-10 flex items-center justify-between'>
      <img src={logo} alt="" className='w-[30%] md:w-[20%] lg:w-[15%] xl:w-[10%]' />
      <div className='flex items-center gap-3 md:gap-5'>
        <ContactButton />
        <div className='p-3 bg-gradient-to-tr from-[#113033] via-[#46565b]  to-[white] border-[1px] border-gray-500 rounded-full w-fit'>
          <Menu/>
        </div>
      </div>
    </div>
  )
}

export default Navbar