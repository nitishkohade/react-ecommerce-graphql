import React from 'react';
import { withRouter } from 'react-router';
import { toggleCartHidden } from '../../redux/cart/cart.actions';
import CartItem from '../cart-item/cart-item.component';
import CustomButton from '../custom-button/custom-button.component'
import './cart-dropdown.styles.scss'

const Cart = ({cartItems, history, toggleCartHidden}) => {
    
    return (
            <div className="cart-dropdown">
                <div className="cart-items">
                    {
                        cartItems && cartItems.length ?
                        cartItems.map(item => (<CartItem key={item.id} item={item}/>))
                        :
                        (<span className="empty-message">Your cart is empty</span>)
                    }
                </div>
                <CustomButton onClick={() => {
                    history.push('/checkout');
                    toggleCartHidden()
                }}>GO TO CHECKOUT</CustomButton>
            </div>
        )
}

export default withRouter(Cart)