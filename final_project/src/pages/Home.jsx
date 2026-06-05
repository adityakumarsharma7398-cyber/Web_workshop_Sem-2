import React from 'react';
import ProductBox from '../components/ProductBox';
import RelatedItems from '../components/RelatedItems';

const topBoxes = [
    {
        title: "Revamp your home in style",
        extraClass: "top",
        items: [
            { image: "https://images-eu.ssl-images-amazon.com/images/G/31/IMG20/Home/2024/Gateway/BTFGW/PCQC/New/1x/final/186x116_Home_furnishings_2._SY116_CB555624324_.jpg", alt: "Bed", label: "Cushion covers, bedsheets" },
            { image: "https://images-eu.ssl-images-amazon.com/images/G/31/IMG20/Home/2024/Gateway/BTFGW/PCQC/New/1x/final/186x116_Home_decor_1._SY116_CB555624324_.jpg", alt: "Figurine", label: "Figurines & more" },
            { image: "https://images-eu.ssl-images-amazon.com/images/G/31/IMG20/Home/2024/Gateway/BTFGW/PCQC/New/1x/final/186x116_Home_storage_1._SY116_CB555624324_.jpg", alt: "Storage", label: "Home storage" },
            { image: "https://images-eu.ssl-images-amazon.com/images/G/31/IMG20/Home/2024/Gateway/BTFGW/PCQC/New/1x/final/186x116_Home_lighting_2._SY116_CB555624324_.jpg", alt: "Lighting", label: "Lighting solution" }
        ]
    },
    {
        title: "Bulk order discounts + up to 18% GST saving",
        extraClass: "top",
        items: [
            { image: "https://images-eu.ssl-images-amazon.com/images/G/31/AmazonBusiness/img25/nov/bau/ain/gw/Laptops_186_116_10._SY116_CB777673831_.jpg", alt: "Laptops", label: "Up to 45% off | Laptops" },
            { image: "https://images-eu.ssl-images-amazon.com/images/G/31/AmazonBusiness/img25/nov/bau/ain/gw/KitchenAppliances_186_116_10._SY116_CB777673831_.jpg", alt: "Kitchen", label: "Up to 60% off | Kitchen appliances" },
            { image: "https://images-eu.ssl-images-amazon.com/images/G/31/AmazonBusiness/img25/nov/bau/ain/gw/OfficeChairs_186_116_10._SY116_CB777673831_.jpg", alt: "Office Chairs", label: "Min. 50% off | office furniture" },
            { image: "https://images-eu.ssl-images-amazon.com/images/G/31/AmazonBusiness/img25/dec/bau/ain/gw/ABdelivery_186_116._SY116_CB776314701_.jpg", alt: "Delivery", label: "Up to 60% off | Business Purchase" }
        ]
    },
    {
        title: "Appliances for your home | Up to 55% off",
        extraClass: "top",
        items: [
            { image: "https://images-eu.ssl-images-amazon.com/images/G/31/IMG15/Irfan/GATEWAY/MSO/Appliances-QC-PC-186x116--B08RDL6H79._SY116_CB667322346_.jpg", alt: "AC", label: "Air conditioners" },
            { image: "https://images-eu.ssl-images-amazon.com/images/G/31/IMG15/Irfan/GATEWAY/MSO/Appliances-QC-PC-186x116--B08345R1ZW._SY116_CB667322346_.jpg", alt: "Fridge", label: "Refrigerators" },
            { image: "https://images-eu.ssl-images-amazon.com/images/G/31/IMG15/Irfan/GATEWAY/MSO/Appliances-QC-PC-186x116--B07G5J5FYP._SY116_CB667322346_.jpg", alt: "Microwave", label: "Microwave" },
            { image: "https://images-eu.ssl-images-amazon.com/images/G/31/IMG15/Irfan/GATEWAY/MSO/186x116---wm._SY116_CB667322346_.jpg", alt: "Washing Machine", label: "Washing Machines" }
        ]
    },
    {
        title: "Starting ₹149 | Headphones",
        extraClass: "top",
        items: [
            { image: "https://images-eu.ssl-images-amazon.com/images/G/31/img21/june/CE/GW/QC/PC/PC_QuadCard_boAt_0.5x._SY116_CB553870684_.jpg", alt: "boAt", label: "Starting ₹249 | boAt" },
            { image: "https://images-eu.ssl-images-amazon.com/images/G/31/img21/june/CE/GW/QC/PC/PC_QuadCard_Boult_0.5x._SY116_CB553870684_.jpg", alt: "Boult", label: "Starting ₹349 | boult" },
            { image: "https://images-eu.ssl-images-amazon.com/images/G/31/img21/june/CE/GW/QC/PC/PC_QuadCard_Noise_0.5x._SY116_CB553870684_.jpg", alt: "Noise", label: "Starting ₹249 | Noise" },
            { image: "https://images-eu.ssl-images-amazon.com/images/G/31/img21/june/CE/MSO/PD3/PC_QuadCard_Zeb_0.5x_1._SY116_CB570220221_.jpg", alt: "Zebronics", label: "Starting ₹249 | Zebronics" }
        ]
    }
];

const bottomBoxes = [
    {
        title: "Starting ₹49 | Deals on home essentials",
        extraClass: "bottom",
        items: [
            { image: "https://images-eu.ssl-images-amazon.com/images/G/31/img18/HomeImprovement/harsmisc/2025/March/Wipes_low_res_V1._SY116_CB549138744_.jpg", alt: "Cleaning", label: "Cleaning Supplies" },
            { image: "https://images-eu.ssl-images-amazon.com/images/G/31/img18/HomeImprovement/harsmisc/2025/March/Shower_heads_low_res_V1._SY116_CB549138744_.jpg", alt: "Bathroom", label: "Bathroom accessories" },
            { image: "https://images-eu.ssl-images-amazon.com/images/G/31/img18/HomeImprovement/harsmisc/2025/March/Tools_low_res_V1._SY116_CB549138744_.jpg", alt: "Tools", label: "Home tools" },
            { image: "https://images-eu.ssl-images-amazon.com/images/G/31/img18/HomeImprovement/harsmisc/2025/March/Wallpapers_low_res_V1._SY116_CB549138744_.jpg", alt: "Wallpaper", label: "Wallpaper" }
        ]
    },
    {
        title: "Automotive essentials | Up to 60% off",
        extraClass: "bottom",
        items: [
            { image: "https://images-eu.ssl-images-amazon.com/images/G/31/img17/Auto/2020/GW/PCQC/Glasscare1X._SY116_CB410830553_.jpg", alt: "Glass", label: "Cleaning accessories" },
            { image: "https://images-eu.ssl-images-amazon.com/images/G/31/img17/Auto/2020/GW/PCQC/Rim_tyrecare1x._SY116_CB410830552_.jpg", alt: "Tyre", label: "Tyre and rim care" },
            { image: "https://images-eu.ssl-images-amazon.com/images/G/31/img17/Auto/2020/GW/PCQC/Vega_helmet_186x116._SY116_CB405090404_.jpg", alt: "Helmet", label: "Helmets" },
            { image: "https://images-eu.ssl-images-amazon.com/images/G/31/img17/Auto/2020/GW/PCQC/Vaccum1x._SY116_CB410830552_.jpg", alt: "Vacuum", label: "Vacuum cleaner" }
        ]
    },
    {
        title: "Best Sellers in Beauty",
        extraClass: "bottom",
        items: [
            { image: "https://m.media-amazon.com/images/I/71cseSChxxL._AC_SY170_.jpg", alt: "Magic Soap", label: "Magic Soap" },
            { image: "https://m.media-amazon.com/images/I/51O+J5jnXcL._AC_SY170_.jpg", alt: "Cetaphil", label: "Cetaphil" },
            { image: "https://m.media-amazon.com/images/I/4125gF+XmHL._AC_SY170_.jpg", alt: "Nivea", label: "Nivea" },
            { image: "https://m.media-amazon.com/images/I/41beuVz949L._AC_SY170_.jpg", alt: "Mamaearth", label: "Mama-earth" }
        ]
    },
    {
        title: "Continue shopping deals",
        extraClass: "bottom",
        items: [
            { image: "https://m.media-amazon.com/images/I/71At9zBj1gL._AC_SY145_.jpg", alt: "Deal 1", label: "" },
            { image: "https://m.media-amazon.com/images/I/61ommEwkAUL._AC_SY145_.jpg", alt: "Deal 2", label: "" },
            { image: "https://m.media-amazon.com/images/I/71-4Nz4368L._AC_SY145_.jpg", alt: "Deal 3", label: "" },
            { image: "https://m.media-amazon.com/images/I/51AU-3YG6QL._AC_SY145_.jpg", alt: "Deal 4", label: "" }
        ]
    }
];

const Home = () => {
    return (
        <div className="shop-section">
            {topBoxes.map((box, index) => (
                <ProductBox
                    key={index}
                    title={box.title}
                    items={box.items}
                    extraClass={box.extraClass}
                />
            ))}

            {bottomBoxes.map((box, index) => (
                <ProductBox
                    key={index}
                    title={box.title}
                    items={box.items}
                    extraClass={box.extraClass}
                />
            ))}

            <RelatedItems />
        </div>
    );
};

export default Home;
