import React from 'react';

const RelatedItems = () => {
    const items = [
        { href: "#", src: "https://m.media-amazon.com/images/I/611hF148-3L._AC_SY200_.jpg" },
        { href: "#", src: "https://m.media-amazon.com/images/I/51Khy-mqa9L._AC_SY200_.jpg" },
        { href: "#", src: "https://m.media-amazon.com/images/I/517TS9aCUeL._AC_SY200_.jpg" },
        { href: "#", src: "https://m.media-amazon.com/images/I/51YF8Ghmm1L._AC_SY200_.jpg" },
        { href: "#", src: "https://m.media-amazon.com/images/I/61LCRmrghgL._AC_SY200_.jpg" },
        { href: "#", src: "https://m.media-amazon.com/images/I/51hEa3-c5GL._AC_SY200_.jpg" },
        { href: "#", src: "https://m.media-amazon.com/images/I/51n4WanefkL._AC_SY200_.jpg" },
        { href: "#", src: "https://m.media-amazon.com/images/I/51kYKec2j5L._AC_SY200_.jpg" },
        { href: "#", src: "https://m.media-amazon.com/images/I/61-EVA-HgNL._AC_SY200_.jpg" }
    ];

    return (
        <div className="col">
            Related to items you've viewed <a href="#">see more</a>
            <ul>
                {items.map((item, index) => (
                    <li key={index}>
                        <a href={item.href}>
                            <img src={item.src} alt="Related item" />
                        </a>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default RelatedItems;
