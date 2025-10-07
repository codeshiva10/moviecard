import React from 'react'

const Nabbar = () => {
  return (
    <div className='text-white flex   justify-between mx-3 h-20 w-full '>
      <div className=' flex justify-center items-center w-45 font-bold '>
        Movies
      </div>

      <ul className=' gap-10 flex justify-center items-center w-100 list-none font-bold'>
       <a href="">  <li>Home</li></a>
        <a href=""> <li>About</li></a>
       <a href="">  <li>Contact</li></a>
      </ul>
    </div>
)
}

export default Nabbar
