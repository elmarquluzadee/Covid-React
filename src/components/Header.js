import React, { useState } from 'react'
import Logo from './Logo'
import Menuitem from './Menuitem'

const Header = () => {
  const [menuItems] = useState(
    [
    {
      title:"Olkelere Gore corona degerleri",
      value:1
    },
    {
      title:"Kayda gecmis korona degerleri",
      value:1
    },
    {
      title:"Kitalara gore korona degerleri",
      value:1
    }
    ]
  )
  return (
   <nav className='bg-gray-800 border-gray-200 px-2'> 
      <div className='container flex flex-wrap justify-between items-center mx-auto'>
         <Logo/>
         <div className='w-auto'> 
                 <ul className='flex flex-row mt-4 font-medium'>
                    {menuItems.map((item)=> {
                      return(
                        <Menuitem title={item.title} />
                      )
                    })}
                 </ul>
         </div>
      </div>
   </nav>
  )
}

export default Header
