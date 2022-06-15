import React from 'react'
import { Outlet } from 'react-router-dom';
import Navbar from '../Navbar';
import './index.scss';


const Background = () => {
  return (
      <>
      <div className="App">
        <Navbar />
        <div className=" layer2 ">
      <Outlet />
        </div>
      </div>
    </>
  )
}

export default Background