import React from 'react'
import './NewsCard.css'

function NewsCard({item}) {

    return (
        <div className="card">
            <div className="news-img">
                <img src={item.image} alt="" />
            </div>
            <div className="news-content">
            <div className="news-title">
                <h4>{item.title}</h4>
            </div>
            <div className="news-description">
                <p>{item.detailed.slice(0,300)}...</p>
            </div>
            <div className="news-footer">
                <a href={item.source}>
                    <h5> Read More...</h5>
                </a>
            </div>
            </div>
        </div>
        
    )
}

export default NewsCard
