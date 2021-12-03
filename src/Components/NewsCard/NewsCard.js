import React from 'react'
import './NewsCard.css'

function NewsCard() {

    const data = {
        "id": 92,
        "title": "Food and Public Distribution Minister Piyush Goyal to chair All India Food Ministers Meeting in New Delhi ",
        "category": "national-news",
        "detailed": "The Department of Food and Public Distribution under Ministry of Consumer Affairs, Food and Public Distribution is organising an All India Food Ministers Meeting in New Delhi today. Food and Public Distribution Minister Piyush Goyal will chair the meeting and will discuss the issue of community kitchen and other issues with Food Minister of all States and UTs.\rA writ petition was filed in the Supreme Court regarding establishing the concept of community kitchen across the country, formulation of requisite scheme to provide food to the needy persons and create a national food grid for those persons beyond the scope of the Public Distribution System to fight with hunger and malnutrition.\rThe Apex Court has directed the Centre to come up with a Model Community Kitchens Scheme agreeable to the States and Union Territories within three weeks’ time. The Court has also directed all the State Governments and Union Territories to attend the meeting to be arranged and organized by the Centre and cooperate with them in coming up with the Scheme, which can be made uniformly applicable to all the States and UTs.\rSome of the likely key issues that will be discussed during the meeting are Model Community Kitchen Scheme, One Nation One Ration Card-status of implementation, Aadhaar seeding of Ration Cards, Biometrically authenticated FPS transactions and others.\rEarlier, the Secretary, Department of Food and Public Distribution took a meeting on Sunday with Chief Secretaries and Food Secretaries of States and UTs to discuss the model Community Kitchen Scheme.",
        "source": "https://newsonair.gov.in/News?title=Food-and-Public-Distribution-Minister-Piyush-Goyal-to-chair-All-India-Food-Ministers-Meeting-in-New-Delhi&id=430260",
        "image": "https://newsonair.gov.in/writereaddata/News_Pictures/NAT/2021/Nov/NPIC-20211125133030.jpg"
    }

    return (
        <div className="card">
            <div className="news-img">
                <img src={data.image} alt="" />
            </div>
            <div className="news-content">
            <div className="news-title">
                <h4>{data.title}</h4>
            </div>
            <div className="news-description">
                <p>{data.detailed.slice(0,300)}...</p>
            </div>
            <div className="news-footer">
                <a href={data.source}>
                    <h5> Read More...</h5>
                </a>
            </div>
            </div>
        </div>
        
    )
}

export default NewsCard
