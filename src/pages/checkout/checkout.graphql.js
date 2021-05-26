import React from 'react'
import {gql} from 'apollo-boost'
import {Query} from 'react-apollo'

import Checkout from './checkout.component'

const GET_CART_ITEMS = gql`
    query {
        cartItems @client
        cartTotal @client
    }
`

const CheckoutGraphql = () => (
    <Query query={GET_CART_ITEMS}>
        {
            ({data: {cartItems, cartTotal}}) => {
                return (
                    <Checkout cartItems={cartItems} total={cartTotal} />
                )
            }
        }
    </Query>
)

export default CheckoutGraphql