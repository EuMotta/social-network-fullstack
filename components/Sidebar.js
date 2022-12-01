// import { useSession } from 'next-auth/react'
import React from 'react'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import GroupsIcon from '@mui/icons-material/Groups';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import HistoryIcon from '@mui/icons-material/History';
import LiveTvIcon from '@mui/icons-material/LiveTv';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import SidebarRow from './SidebarRow';

function Sidebar() {
    // const[session,loading] = useSession()
  return (
    <div className='p-2 max-w-[350px] xl:min-w-[250px]: bg-slate-50 shadow-sm shadow-slate-400 '>
        <SidebarRow /* src={session.user.image} */ Icon={AccountCircleIcon} title='Usuario'/>
        <SidebarRow Icon={GroupsIcon} title='Amigos'/>
        <SidebarRow Icon={ShoppingBagIcon} title='MarketPlace'/>
        <SidebarRow Icon={LiveTvIcon} title='Assistir'/>
        <SidebarRow Icon={CalendarMonthIcon} title='Eventos'/>
        <SidebarRow Icon={HistoryIcon} title='Memórias'/>
        <SidebarRow Icon={ExpandMoreIcon} title='Ver Mais'/>
    </div>
  )
}

export default Sidebar