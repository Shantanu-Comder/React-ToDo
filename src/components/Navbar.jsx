import React from 'react'

const Navbar = () => {
  return (
    <nav className='flex justify-around bg-cyan-600 text-white py-2'>
        <div className="logo">
            <span className='cursor-pointer font-bold text-xl mx-8'>MyTask</span>
        </div>
      <ul className="flex gap-8 mx-9">
        <li className='cursor-pointer hover:font-bold transition-all'>Home</li>
        <li className='cursor-pointer hover:font-bold transition-all'>Tasks</li>
        <li className='cursor-pointer hover:font-bold transition-all'>History</li>
      </ul>
    </nav>
  )
}

export default Navbar