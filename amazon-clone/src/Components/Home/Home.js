import React from 'react';
import "../Home/Home.css";
import Product from "../Product/Product";

function Home() {
    return (
        <div className="home">
            <img className="home__image"
             src="https://images-na.ssl-images-amazon.com/images/G/01/kindle/journeys/ZjFjMDMxZmIt/ZjFjMDMxZmIt-OGVmOTM1ZDYt-w3000._CB431004447_.jpg"
             alt="" />

             {/* Prodict id, title, price, rating, image */}
            <div className="home__row">
                <Product 
                    id="1234213"
                    title="Prime Student Picks"
                    price={11.95}
                    rating={3}
                    image="https://images-na.ssl-images-amazon.com/images/G/01/US-hq/2020/img/Events/XCM_Manual_1225644_1180565_US_us_otc20_dt_quad_card_en_3109406_372x232_2X_en_US._SY232_CB430466907_.jpg"
                />
                <Product 
                    id="1234213"
                    title="Prime Student Picks"
                    price={11.95}
                    rating={3}
                    image="https://images-na.ssl-images-amazon.com/images/G/01/US-hq/2020/img/Events/XCM_Manual_1225644_1180565_US_us_otc20_dt_quad_card_en_3109406_372x232_2X_en_US._SY232_CB430466907_.jpg"
                />
            </div>
            <div className="home__row">
                <Product 
                    id="1234213"
                    title="Prime Student Picks"
                    price={11.95}
                    rating={3}
                    image="https://images-na.ssl-images-amazon.com/images/G/01/US-hq/2020/img/Events/XCM_Manual_1225644_1180565_US_us_otc20_dt_quad_card_en_3109406_372x232_2X_en_US._SY232_CB430466907_.jpg"
                />
                <Product 
                    id="1234213"
                    title="Prime Student Picks"
                    price={11.95}
                    rating={3}
                    image="https://images-na.ssl-images-amazon.com/images/G/01/US-hq/2020/img/Events/XCM_Manual_1225644_1180565_US_us_otc20_dt_quad_card_en_3109406_372x232_2X_en_US._SY232_CB430466907_.jpg"
                />
                <Product 
                    id="1234213"
                    title="Prime Student Picks"
                    price={11.95}
                    rating={3}
                    image="https://images-na.ssl-images-amazon.com/images/G/01/US-hq/2020/img/Events/XCM_Manual_1225644_1180565_US_us_otc20_dt_quad_card_en_3109406_372x232_2X_en_US._SY232_CB430466907_.jpg"
                />
            </div>
            <div className="home__row">
                <Product 
                    id="1234213"
                    title="Prime Student Picks"
                    price={11.95}
                    rating={3}
                    image="https://images-na.ssl-images-amazon.com/images/G/01/US-hq/2020/img/Events/XCM_Manual_1225644_1180565_US_us_otc20_dt_quad_card_en_3109406_372x232_2X_en_US._SY232_CB430466907_.jpg"
                />
            </div>
             
             {/*  product */}
        </div>
    )
}

export default Home
