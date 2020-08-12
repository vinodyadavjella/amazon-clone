import React from 'react';
import { useStateValue } from '../ContextAPI/StateProvider';
import "../Checkout/Checkout.css";
import CheckoutProduct from "../Checkout/CheckoutProduct";
import Subtotal from "../Checkout/Subtotal";

function Checkout() {
    const [{basket}] = useStateValue();

    return (
        <div className="checkout">
            <div className="checkout__left">
                <img className="checkout__ad"
                 src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg"
                alt=""
                /> 

                {basket?.length === 0 ? (
                    <div>
                        <h2>Your Shopping Basket is empty</h2>
                        <p>
                        The price and availability of items at Amazon.com are subject to change. The Cart is a temporary place to store a list of your items and reflects each item's most recent price. Shopping CartLearn more Do you have a gift card or promotional code? We'll ask you to enter your claim code when it's time to pay.
                        </p>
                    </div>
                ) : (
                    <div>
                        <h2 className="checkout__title"> Your Shopping Basket</h2>

                        {/* list out all of the checkout products */}
                        {basket.map((item)=>(
                            <CheckoutProduct
                                id = {item.id}
                                title = {item.title}
                                image = {item.image}
                                price = {item.price}
                                rating = {item.rating}
                            />
                        ))}
                    </div>
                )}
            </div>
            {basket.length > 0 && (
                <div className="checkout__right">
                <Subtotal />
            </div>
            )}
         </div>
    );
}

export default Checkout
