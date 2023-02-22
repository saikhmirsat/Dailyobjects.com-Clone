import React from 'react'
import "./Admin.css";
import MainDashboard from './adminComponent/MainDashboard/MainDashboard';
import Right from './adminComponent/Right/Right';
import Sidebar from './adminComponent/Sidebar';


const Admin = () => {
  return (
    <div className='Admin'>
        <div className='AdminPanel'>
            <Sidebar/>
            <MainDashboard/>
            <Right/>
        </div>
    </div>
  )
}

export default Admin