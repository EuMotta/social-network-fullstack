import Image from 'next/image'
import React from 'react'
import {FcSearch} from 'react-icons/fc'

export default function HeaderScreen() {
  return (
    <div>
        <h1>FateCanos</h1>
        <div>
            <Image
            src="https://links.papareact.com/5me"
            width={100}
            height={100}
            alt='logo'
            unoptimized
            layout='fixed'
            />
            <div className='flex'>
                <input
                type="text"
                placeholder='Pesquisar'
                className='focus:text-white focus:shadow-md focus:shadow-slate-500 focus:bg-indigo-300 focus:border-indigo-600 focus:outline-none  text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 "'
                />
                <FcSearch className='relative text-xl right-7'/>
            </div>
        </div>
    </div>
  )
}
