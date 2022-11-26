import React from 'react'


function HeaderIcons({Icon,active}) {
  return (
    <div className='cursor-pointer flex items-center md:px-10 sm:h-14 md:hover:bg-gray-100 rounded-md active:border-b-2 active:border-red-500 group'>
        <Icon className={`h-8 group-hover:text-red-600 sm:h-6 text-center text-slate-700 mx-auto
        ${active && 'text-red-600'}
        `}/>
    </div>
    
  )
}

export default HeaderIcons