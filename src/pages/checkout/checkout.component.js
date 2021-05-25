import React from 'react'
import { connect } from 'react-redux'
import CheckoutItem from '../../components/checkout-item/checkout-item.component'
import StripeCheckoutButton from '../../components/stripe-button/stripe-button.component'
import './checkout.styles.scss'

const CheckoutPage = ({cartItems, total}) => (
    <div className="checkout-page">
        <div className="checkout-header">
            <div className="header-block">
                <span>Product</span>
            </div>
            <div className="header-block">
                <span>Description</span>
            </div>
            <div className="header-block">
                <span>Quantity</span>
            </div>
            <div className="header-block">
                <span>Price</span>
            </div>
            <div className="header-block">
                <span>Remove</span>
            </div>
        </div>
        {
            cartItems.map(item => (<CheckoutItem key={item.id} cartItem={item} />))
        }
        <div className="total">
            <span>TOTAL: ${total}</span>
        </div>
        <div className="test-warning">
            *Please use the following test credit card for the payment*
            <br/>
            4242 4242 4242 4242 - Exp: 01/22 - CVV: 123
        </div>
        <StripeCheckoutButton 
            price={total}
        />
    </div>
)

const mapStateToProps = ({cart: {cartItems}}) => ({
    cartItems,
    total: cartItems.reduce((accumulatedPrice, item) => accumulatedPrice + item.price*item.quantity, 0)
})

const mapDispatchToProps = (dispatch) => ({
    removeCartItem: (id) => {}
})


export default connect(mapStateToProps, mapDispatchToProps)(CheckoutPage)