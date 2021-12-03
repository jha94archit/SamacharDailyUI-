import React from 'react'
import './Category.css'

function Category({name, link}) {
    return (
        <div className="category-icon">
            <div className="cat-img">
                <img src={link} alt={name} />
            </div>
            <div className="cat-name">
                <h5>{name}</h5>
            </div>
        </div>
    )
}

export default Category