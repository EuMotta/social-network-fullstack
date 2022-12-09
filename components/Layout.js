import Head from 'next/head'
import React from 'react'
import Footer from './Footer'
import Header from './Header'

function Layout({ children, title }) {
    return (
        <>
            <Head>
                <title> {title ? title + ' - FateCanos' : 'FateCanos'} </title>
                <link rel='icon' href=''></link>
            </Head>
            <div className='flex flex-col justify-between h-screen'>
                <Header />
                <main>
                    {children}
                </main>
                <Footer />
            </div>
        </>
    )
}

export default Layout