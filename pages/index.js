import { getSession } from 'next-auth/react'
import Head from 'next/head'
import HeaderScreen from '../components/Header'
import LoginScreen from '../components/Login'

export default function Home({session}) {
  if(!session) return<LoginScreen/>
  return (
    <div>
      <Head>
        <title>FateCanos</title>
      </Head>
      {/* Login */}
      <HeaderScreen/>
        {/* Chat */}
      <main>
        {/* Sidebar/Navbar */}

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
