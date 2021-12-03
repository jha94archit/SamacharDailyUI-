import React, {useContext} from 'react'
import Category from '../Category/Category'
import './Header.css'
import { CgDarkMode } from "react-icons/cg";
import { FaLanguage } from "react-icons/fa"
import { NewsContext } from '../../Api/Context'
import {categories} from '../../Api/Api'

function Header() {

    const { setCategory } = useContext(NewsContext)

    return (
        <div className="header-container">
            <div className="logo">
                <h4>SamacharDaily.</h4>
            </div>
            < div className="header-links">
                    {
                        categories.map((item, index) => {

                            return (
                                <div 
                                    className="header-link"
                                    onClick={() => setCategory(item.name)}
                                >
                                    <Category 
                                        name={item.cat_name} 
                                        link={item.icon_link} 
                                    />
                                </div>
                            )
                        })
                    }    
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