import React from 'react'
import NewsCard from '../NewsCard/NewsCard'
import './Body.css'

function Body() {
    return (
        <div className="body-container">
            <NewsCard />
            <NewsCard />
            <NewsCard />
            <NewsCard />
            <NewsCard />
        </div>
    )
}

export default Body
