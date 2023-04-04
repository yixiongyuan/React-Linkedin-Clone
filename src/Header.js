import React from 'react'
import "./Header.css"
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { selectUser } from './features/userSlice';
import {logout} from './features/userSlice'
import SearchIcon from '@mui/icons-material/Search';
import HomeIcon from '@mui/icons-material/Home';
import HeaderOption from './HeaderOption';
import SupervisorAccountIcon from '@mui/icons-material/SupervisorAccount';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import ChatIcon from '@mui/icons-material/Chat';
import NotificationsIcon from '@mui/icons-material/Notifications';
import { auth } from './firebase';

function Header() {


  const user = useSelector(selectUser)

  const dispatch = useDispatch();

  const logoutApp = () =>{
    dispatch(logout())

    auth.signOut();
  }
  return (
    <div className='header'>

      <div className="header_left">

        <img src="linkedin.png" alt="linkedin icon" />

        <div className="header_search">

          <SearchIcon />
          <input type="text" placeholder='search' />
        </div>
      </div>


      <div className="header_right">

        {/* <HeaderOption /> */}

        <HeaderOption
          Icon={HomeIcon}
          title="Home" />

        <HeaderOption
          Icon={SupervisorAccountIcon}
          title="My Network" />

        <HeaderOption
          Icon={BusinessCenterIcon}
          title="Jobs" />

        <HeaderOption
          Icon={ChatIcon}
          title="Messageing" />


        <HeaderOption
          Icon={NotificationsIcon}
          title="Notification" />

        <HeaderOption
          title="Me" 
          avatar={true}
          onClick={logoutApp}
        />


      </div>
    </div>
  )
}

export default Header