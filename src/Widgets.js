import React from 'react'
import "./Widgets.css"
import InfoIcon from '@mui/icons-material/Info';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';

function Widgets() {


    const newsArticle = (heading,subtitle) => (

        <div className="widgets_article">

            <div className="widgets_article_left">
                <FiberManualRecordIcon />
            </div>

            
            <div className="widgets_article_right">
                <h4>{heading}</h4>
                <p>{subtitle}</p>
            </div>
        </div>
    )
  return (
    <div className='widgets'>
        
        <div className="widgets_header">

            <h2>Linkedin News</h2>
            <InfoIcon />
        </div>


        {newsArticle("react learning","awsome article")}
        {newsArticle("Trump is under investigation","American Daily")}
        {newsArticle("covid update","UK Daily")}
        {newsArticle("web 3.0 generation","india Daily")}
    </div>
  )
}

export default Widgets