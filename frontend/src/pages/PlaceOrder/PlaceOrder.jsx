import { useContext } from 'react';
import './PlaceOrder.css';
import { StoreContext } from '../../context/StoreContext';
const PlaceOrder=()=>{
    const {getTotalCartAmount}=useContext(StoreContext)
    return(
        <form className='place-order'>
            <div class="place-order-left">
                <p className="title">Delivery Information</p>
                <div class="multi-fields">
                    <input type="text" placeholder='First name'/>
                    <input type="text" placeholder='Last name'/>
                </div>
                <input type="text" placeholder='Email address'/>
                <input type="text" placeholder='Street'/>
                <div class="multi-fields">
                    <input type="text" placeholder='City'/>
                    <input type="text" placeholder='State'/>
                </div>
                <div class="multi-fields">
                    <input type="text" placeholder='Zip code'/>
                    <input type="text" placeholder='Country'/>
                </div>
                <input type="text" placeholder='Phone'/>
            </div>
            <div class="place-order-right">
                <div className="cart-total">
                    <h2>Cart Totals</h2>
                    <div>
                        <div className="cart-total-details">
                            <p>Subtotal</p>
                            <p>${getTotalCartAmount()}</p>
                        </div>
                        <hr/>
                        <div className="cart-total-details">
                            <p>Delivery fee</p>
                            <p>${getTotalCartAmount()===0 ? 0 : 40}</p>
                        </div>
                        <hr/>
                        <div className="cart-total-details">
                            <b>Total</b>
                            <b>${getTotalCartAmount()===0 ? 0 : getTotalCartAmount()+40}</b>
                        </div>
                    </div>
                    <button>Proceed to PAYMENT</button>
                </div>
            </div>
        </form> 
    )
}
export default PlaceOrder;