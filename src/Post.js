import React from 'react'
import "./Post.css"
import { Avatar } from '@mui/material'
import InputOption from './InputOption'
import ThumbUpAltOutlinedIcon from '@mui/icons-material/ThumbUpAltOutlined';
import ChatBubbleOutlineOutlinedIcon from '@mui/icons-material/ChatBubbleOutlineOutlined';
import ShareOutlinedIcon from '@mui/icons-material/ShareOutlined';
import SendOutlinedIcon from '@mui/icons-material/SendOutlined';

function Post({name,descripition,message,photoUrl}) {
  return (
    <div className='post'>
        <div className="post_header">

            <Avatar src={photoUrl}>
                {descripition[0]}
            </Avatar>

            <div className="post_info">
                <h2>{name}</h2>
                <p>{descripition}</p>
            </div>
        </div>

        <div className="post_body">

            <p>{message}</p>
        </div>

        <div className="post_buttons">

            <InputOption 
            Icon ={ThumbUpAltOutlinedIcon}
            title = "Like"
            color = "gray"
             />

            <InputOption 
            Icon ={ChatBubbleOutlineOutlinedIcon}
            title = "Comment"
            color = "gray"
             />

            <InputOption 
            Icon ={ShareOutlinedIcon}
            title = "Share"
            color = "gray"
             />

            <InputOption 
            Icon ={SendOutlinedIcon}
            title = "Send"
            color = "gray"
             />
        </div>
        

    </div>
  )
}

export default Post