export const categories = [
    {
        name:"all-news",
        cat_name: "All News",
        icon_link: "https://img.icons8.com/fluent/96/000000/news.png"
    },
    {
        name:"national-news",
        cat_name: "National News",
        icon_link: "https://img.icons8.com/color/48/000000/india-circular.png"
    },
    {
        name:"international-news",
        cat_name:"Internal News",
        icon_link:"https://img.icons8.com/fluency/48/000000/globe.png"
    },
    {
        name:"business-news",
        cat_name:"Business News",
        icon_link:"https://img.icons8.com/external-justicon-flat-justicon/64/000000/external-briefcase-education-justicon-flat-justicon.png"
    },
    {
        name:"sports-news",
        cat_name:"Sports News",
        icon_link:"https://img.icons8.com/emoji/64/000000/trophy-emoji.png"
    },
    {
        name:"other-news",
        cat_name:"Other News",
        icon_link:"https://img.icons8.com/color/48/000000/activity-feed-2.png"
    }
]

export const BASE_URL = "http://localhost:8000/news-server";

export const getNewsAPI = (category) => {
    return `${BASE_URL}/news-api/${category}`;
  };