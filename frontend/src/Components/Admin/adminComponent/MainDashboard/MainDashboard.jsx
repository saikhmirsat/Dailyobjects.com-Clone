import React from 'react'
import Cards from '../Cards/Cards'
import Table from '../Tables/Tables'
import "./MainDashboard.css";

const MainDashboard = () => {
  return (
    <div className="MainDash">
    <h1 style={{fontSize:"30px", textAlign:"left",fontWeight:"bolder",padding:"20px"}}>Dashboard</h1>
      <Cards />
      <Table />
    </div>
  )
}

export default MainDashboard;