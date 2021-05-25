import React from 'react'
import StripeCheckout from 'react-stripe-checkout'
import './stripe-button.styles.scss'

const StripeCheckoutButton = ({price}) => {
    const priceForStripe = price * 100;
    const publishableKey = 'pk_test_VniM590u9m4AgtGvcXRfo3UP'

    const onToken = token => {
        alert('Payment successfully went through.')
    }

    return (
        <StripeCheckout 
            label="Pay now"
            name="Sell My Product Ltd."
            billingAddress
            shippingAddress
            image="https://svgshare.com/i/CUz.svg"
            description={`Your total is $${price}`}
            amount={priceForStripe}
            panelLabel="Pay now"
            token={onToken}
            stripeKey={publishableKey}
        />
    )
}

export default StripeCheckoutButton