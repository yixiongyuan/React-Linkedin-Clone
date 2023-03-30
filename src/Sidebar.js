import React from 'react'
import "./Sidebar.css"
import { Avatar } from '@mui/material'

function Sidebar() {

    const recentItem = (topic) => (

        <div className="sidebar_recentItem">

            <span className="sidebar_hash">#</span>
            <p>{topic}</p>
        </div>

    );

    return (
        <div className="sidebar">


            <div className="sidebar_top">
                <img src="https://images.unsplash.com/photo-1531315630201-bb15abeb1653?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80" alt="background" />

                <Avatar className='sidebar_avatar' />

                <h2> Zachary Yuan</h2>
                <h4>zachyyuan@gmail.com</h4>
            </div>


            <div className="sidebar_stats">
                <div className="sidebar_stat">
                    <p>Who viewed you</p>
                    <p className="sidebar_statNumber">2,543</p>
                </div>

                <div className="sidebar_stat">
                    <p>Views on post</p>
                    <p className="sidebar_statNumber">3,642</p>
                </div>
            </div>


            <div className="sidebar_bottom">


                <p>Recent</p>
                {recentItem('reactjs')}
                {recentItem('programming')}
                {recentItem('software engineering')}
                {recentItem('design')}
                {recentItem('developer')}
            </div>

        </div>
    )
}

export default Sidebar