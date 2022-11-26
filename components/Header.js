import Image from 'next/image'
import React from 'react'
import { FcSearch } from 'react-icons/fc'
import HeaderIcons from './HeaderIcons'
import {
  FlagIcon,
  PlayIcon,
  ShoppingCartIcon,
  UserGroupIcon
} from '@heroicons/react/24/outline'
import {
  HomeIcon
} from '@heroicons/react/24/solid'

export default function HeaderScreen() {
  return (
    <div className='flex sticky top-0 bg-white p-2 lg:px-5 shadow-md items-center'>
      <div className='flex items-center'>
        <Image
          src="https://links.papareact.com/5me"
          width={40}
          height={40}
          alt='logo'
          unoptimized
          layout='fixed'
        />
        <div className='flex ml-2 rounded-full mr-10'>
          <input
            type="text"
            placeholder='Pesquisar'
            className='focus:text-white flex-shrink px-2 focus:shadow-md focus:shadow-slate-500 focus:bg-indigo-100 rounded-full focus:border-indigo-400 focus:outline-none  text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300  transition ease-in-out m-0 '
          />
          <FcSearch className='relative text-2xl top-1  right-8' />
        </div>
      </div>
      <div className='flex gap-x-10 items-center'>
        <div className='flex gap-x-10 '>
          <HeaderIcons Icon={HomeIcon} active />
          <HeaderIcons Icon={FlagIcon} />
          <HeaderIcons Icon={PlayIcon} />
          <HeaderIcons Icon={ShoppingCartIcon} />
          <HeaderIcons Icon={UserGroupIcon } />
        </div>
      </div>
    </div>
  )
}
