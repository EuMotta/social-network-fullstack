import Head from 'next/head'
import React from 'react'
import Login from './Login'

function Layout({ title, children }) {
    return (
        <>
            <Head>
                <title> {title ? title + ' - FateCanos' : 'FateCanos'} </title>
                <link rel='icon' href=''></link>
            </Head>
            <header>
                <Login className='cursor-pointer'>
                    Login
                </Login>
            </header>
            <main>
                {children}
            </main>
            <footer>

            </footer>
        </>
    )
}

export default Layout