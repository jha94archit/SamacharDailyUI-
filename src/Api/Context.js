import React, { createContext, useState, useEffect } from "react";
import axios from "axios"
import { getNewsAPI } from './Api'

export const NewsContext = createContext();

const Context = ({children}) => {

    const [news, setNews] = useState([])
    const [category, setCategory] = useState("all-news")

    useEffect(() => {
        const fetchNews = async(reset = category) => {
            const {data} = await axios.get(getNewsAPI(reset))
            setNews(data)
        }; fetchNews();
    }, [category])


    return (
        <NewsContext.Provider value={{news, setCategory}}>
            {children}
        </NewsContext.Provider>
    )
}

export default Context;