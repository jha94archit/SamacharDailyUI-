import React , { useContext } from 'react'
import NewsCard from '../NewsCard/NewsCard'
import './Body.css'
import { NewsContext } from '../../Api/Context'

function Body() {
    const {news} = useContext(NewsContext)
    return (
        <div className="body-container">
            {
                news.map((item, idx) => {
                    return <NewsCard item={item} />
                })
            }
        </div>
    )
}

export default Body
