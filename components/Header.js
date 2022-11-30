import Image from 'next/image'
import React from 'react'
import { FcSearch } from 'react-icons/fc'
import HeaderIcons from './HeaderIcons'
import {
  FlagIcon,
  PlayIcon,
  UserGroupIcon
} from '@heroicons/react/24/outline'
import {
  HomeIcon
} from '@heroicons/react/24/solid'
import CottageIcon from '@mui/icons-material/Cottage';
import AppsIcon from '@mui/icons-material/Apps';
import OutlinedFlagTwoToneIcon from '@mui/icons-material/OutlinedFlagTwoTone';
import PlayCircleOutlineIcon from '@mui/icons-material/PlayCircleOutline';
import ShoppingCartCheckoutIcon from '@mui/icons-material/ShoppingCartCheckout';
import ChatIcon from '@mui/icons-material/Chat';
import styled from 'styled-components'
import { Avatar } from '@mui/material'

export default function HeaderScreen() {
  return (
    <div className='flex sticky top-0 h-14 bg-white p-2 lg:px-5 shadow-md items-center'>
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
            className='focus:text-white hidden md:inline-flex flex-shrink px-2 focus:shadow-md focus:shadow-slate-500 focus:bg-indigo-100 rounded-full focus:border-indigo-400 focus:outline-none  text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300  transition ease-in-out m-0 '
          />
          <FcSearch className='relative text-2xl top-1 hidden md:inline-flex  right-8' />
        </div>
      </div>
      <div className='flex gap-x-10 items-center'>
        <div className='flex gap-x-5 '>
          <HeaderIcons Icon={CottageIcon} active />
          <HeaderIcons Icon={OutlinedFlagTwoToneIcon} />
          <HeaderIcons Icon={PlayCircleOutlineIcon} />
          <HeaderIcons Icon={ShoppingCartCheckoutIcon} />
          <HeaderIcons Icon={UserGroupIcon} />
        </div>
      </div>
      {/* <div className='flex mr-10 justify-end'>
        <div className='flex'>
          <p className='whitespace-nowrap text-xl  font-semibold pr-3'>José Antonio</p>
          <AppsIcon className='icon xl:inline-flex hover:bg-slate-300' />
          <ChatIcon className='icon xl:inline-flex hover:bg-slate-300' />
          <Avatar className='cursor-pointer' />
        </div>
      </div> */}
    </div>
  )
}

const Direita = styled.div`
width:100%;
height:80%;
`;