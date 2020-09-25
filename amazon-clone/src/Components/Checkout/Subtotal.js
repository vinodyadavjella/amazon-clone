import React from 'react';
import '../Checkout/Subtotal.css';
import CurrencyFormat from "react-currency-format";
import { useStateValue } from '../ContextAPI/StateProvider';
import {getBasketTotal} from "../ContextAPI/Reducer";

function Subtotal() {

    const [{basket}, dispatch]= useStateValue();

    return (
        <div className="subtotal">
            {/* Price */}

                    
            <CurrencyFormat 
                
                renderText ={(value) => (
                    <>
                    <p>
                        Subtotal ({basket.length} items): <strong>{` ${value} `}</strong>
                    </p>
                    <small className = "subtotal__gift">
                        <input type= "checkbox" /> This Order contains gifts
                    </small>
                    </>
                )}
                decimalScale = {2}
                value = {getBasketTotal(basket)}
                displayType = {"text"}
                thousandSeparator = {true}
                prefix = {"$"}
            />
            <button> Proceed to Checkout</button>
        </div>
    )
}

export default Subtotal
