import React from 'react'
import Category from '../Category/Category'
import './Header.css'
import { CgDarkMode } from "react-icons/cg";
import { FaLanguage } from "react-icons/fa"

function Header() {
    return (
        <div className="header-container">
            <div className="logo">
                <h4>SamacharDaily.</h4>
            </div>
            <div className="header-links">
                <div className="header-link">
                    <Category name="National News" link="https://img.icons8.com/fluent/96/000000/news.png" />    
                </div>
                <div className="header-link">
                    <Category name="International News" link="https://img.icons8.com/fluency/48/000000/globe.png" />
                </div>
                <div className="header-link">
                    <Category name="Business News" link="https://img.icons8.com/external-justicon-flat-justicon/64/000000/external-briefcase-education-justicon-flat-justicon.png" />
                </div>
                <div className="header-link">
                    <Category name="Sports News" link="https://img.icons8.com/emoji/64/000000/trophy-emoji.png" />
                </div>
                <div className="header-link">
                    <Category name="Other News" link="https://img.icons8.com/color/48/000000/activity-feed-2.png" />
                </div>                
            </div>
            <div className="header-opts">
                <div className="opts-icon">
                    <FaLanguage size={30}/>
                </div>
                <div className="opts-icon">
                    <CgDarkMode size={25} />
                </div>
            </div>
        </div>
    )
}

export default Header