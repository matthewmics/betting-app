import React from 'react'
import Header from './Header/Header'
import SideBar from './SideBar/SideBar'

import './home.css';

const Layout = () => {
    return (
        <div className='layout'>

            <Header />
            <main>
                <SideBar />
                <div>
                    <p style={{height: "200px;"}}>main</p>
                </div>
            </main>

        </div>
    )
}

export default Layout