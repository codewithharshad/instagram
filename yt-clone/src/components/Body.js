import React from 'react'
import Sidebar from './Sidebar'
import MainContainer from './MainContainer'
import { Outlet } from 'react-router-dom';
 import { useSelector } from "react-redux"


const Body = () => {
  const isMenuOpen=useSelector( store=>store.app.isMenuOpen);
  console.log('toggleMenu',isMenuOpen)

  return (
    <div className="flex  ">
        <div style={{ width: isMenuOpen ? '10%' : '0%' }}>
          <Sidebar />
        </div>
        <div style={{ width: isMenuOpen ? '90%' : '100%' }}>
          <Outlet />
        </div>
    </div>
  );
};

export default Body;