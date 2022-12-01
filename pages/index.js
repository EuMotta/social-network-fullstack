import { getSession } from 'next-auth/react'
import Head from 'next/head'
import HeaderScreen from '../components/Header'
import LoginScreen from '../components/Login'
import Sidebar from '../components/Sidebar'

export default function Home({session}) {
  // if(!session) return<LoginScreen/>
  return (
    <div className='h-screen bg-slate-100 overflow-hidden'>
      <Head>
        <title>FateCanos</title>
      </Head>
      {/* Login */}
      <HeaderScreen/>
        {/* Chat */}
      <main className='flex'>
         <Sidebar/>

        {/* children */}
        {/* widget */}
      </main>

      <footer>
        {/* ScrollUp */}
        {/*  */}
      </footer>
    </div>
  )
}

export async function getServerSideProps(context){
  const session = await getSession(context)
  return{
    props:{
      session,
    }
  }
}
