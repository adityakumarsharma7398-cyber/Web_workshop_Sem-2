import React from 'react';

const Panel = () => {
    return (
        <div className="panel">
            <div className="panel-all border">
                <a href="#">All</a>
            </div>
            <div className="panel-ops">
                <p className="border"><a href="https://www.amazon.in/alm/storefront?almBrandId=ctnow&ref_=nav_cs_grocery">Fresh</a></p>
                <p className="border"><a href="https://www.amazon.in/minitv?ref_=nav_avod_desktop_topnav">MX Player</a></p>
                <p className="border"><a href="https://www.amazon.in/b/32702023031?node=32702023031&ld=AZINSOANavDesktop_T3&ref_=nav_cs_sell_T3">Sell</a></p>
                <p className="border"><a href="https://www.amazon.in/gp/bestsellers/?ref_=nav_cs_bestsellers">Bestsellers</a></p>
                <p className="border"><a href="https://www.amazon.in/mobile-phones/b/?ie=UTF8&node=1389401031&ref_=nav_cs_mobiles">Mobiles</a></p>
                <p className="border"><a href="https://www.amazon.in/deals?ref_=nav_cs_gb">Today's Deals</a></p>
                <p className="border"><a href="https://www.amazon.in/gp/help/customer/display.html?nodeId=200507590&ref_=nav_cs_help">Customer Service</a></p>
                <p className="border"><a href="https://www.amazon.in/amazonprime?ref_=nav_cs_primelink_nonmember">Prime</a></p>
                <p className="border"><a href="https://www.amazon.in/amazonpay/home?ref_=nav_cs_apay">Amazon Pay</a></p>
                <p className="border"><a href="https://www.amazon.in/gp/new-releases/?ref_=nav_cs_newreleases">New Releases</a></p>
            </div>
        </div>
    );
};

export default Panel;
