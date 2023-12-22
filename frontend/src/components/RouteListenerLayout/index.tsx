import React, { useEffect } from 'react'
import Navbar from '../Navbar';
import TopBar from '../TopBar';
import { useNavigate } from 'react-router-dom';



function RouteListenerLayout({children} : any) {
  const isAuth = localStorage.getItem('isAuth');
  let navigate = useNavigate();
  useEffect(() => {
    if(isAuth == 'false'){
      navigate('/login')
    }
  })
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