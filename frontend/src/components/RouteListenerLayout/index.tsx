import React from 'react'
import Navbar from '../Navbar';
import TopBar from '../TopBar';



function RouteListenerLayout({children} : any) {
  return (
    <div className='app'>
        <Navbar />
        <div className='app_body'>
            <TopBar />
            {children}
        </div>
    </div>
  )
}

export default RouteListenerLayout;