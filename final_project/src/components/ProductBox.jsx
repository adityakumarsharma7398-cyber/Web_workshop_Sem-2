import React from 'react';

const ProductBox = ({ title, items, extraClass }) => {
    return (
        <div className={`box ${extraClass}`}>
            <div className="box-content">
                <h2>{title}</h2>
                <div className="box-img-grid">
                    {items.map((item, index) => (
                        <div className="grid-item" key={index}>
                            <img src={item.image} alt={item.alt} />
                            {item.label && <span>{item.label}</span>}
                        </div>
                    ))}
                </div>
                <a href="#">See more</a>
            </div>
        </div>
    );
};

export default ProductBox;
