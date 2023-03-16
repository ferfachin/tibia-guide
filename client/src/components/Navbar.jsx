import React from 'react'

const Navbar = () => {
  return (
    <div className="flex justify-between p-2 bg-[#003153]">
      <div>
        <img src='' alt='Logo' />
      </div>
      <div>
        <ul className="flex text-white">
          <li>Home</li>
          <li>Sobre Nós</li>
          <li>Desenvolvedores</li>
        </ul>
      </div>
    </div>
  )
}

export default Navbar