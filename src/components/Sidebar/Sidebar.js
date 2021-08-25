import { Avatar } from '@material-ui/core';
import React from 'react'
import './Sidebar.css';


function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebar__top">
        <img src="https://images.unsplash.com/photo-1579546929662-711aa81148cf?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Y29sb3JmdWwlMjB3YWxscGFwZXJ8ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80" alt="" />
        <Avatar className="sidebar__avatar"/>
        <h2>David Akin-James</h2>
        <h4>davidakinjames@yahoo.com</h4>
      </div>

       <div className="sidebar__stats">
         <div className="sidebar__stat">
           <p>Who viewed you</p>
           <p className="sidebar__statNumber">8,000</p>
         </div>
         <div className="sidebar__stat">
         <p>Views on post</p>
           <p className="sidebar__statNumber">2,500</p>
         </div>
       </div>

       <div className="sidebar__button">
         <p>Recent</p>
       </div>
    </div>
  )
}

export default Sidebar;
