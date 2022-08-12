import React from 'react';
import SocialItem from './SocialItem';

function Footer() {

    const data = [
        {
            name: "Github",
            url: "https://github.com/Lexeor",
            icon: "ri-github-fill"
        },
        {
            name: "LinkedIn",
            url: "https://LinkedIn.com/Lexeor",
            icon: "ri-linkedin-box-fill"
        },
        {
            name: "Twitter",
            url: "https://twitter.com/Lexeor",
            icon: "ri-twitter-fill"
        },
    ];

    const socialItemsCollection = data.map(item => {
        return <SocialItem key={item.name} item={item} />
    })


    return (
        <div className="container footer">
            <div className="socials-container">
                {socialItemsCollection}
            </div>
            <span>© <strong>2022</strong> Alexander Tarasov</span>
        </div>
    )
}

export default Footer