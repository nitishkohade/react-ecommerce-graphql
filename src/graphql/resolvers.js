import {gql} from 'apollo-boost'
import { addItemToCart, getCartItemCount } from './cart.utils'

export const typeDefs = gql`
    extend type Item {
        quantity: Int
    }
    extend type Mutation {
        ToggleCartHidden: Boolean!
        AddItemToCart(item: Item!): [Item]!
    }
`

const GET_CART_HIDDEN = gql`
    query {
        cartHidden @client
    }
`

const GET_CART_ITEMS = gql`
    query {
        cartItems @client
    }
`

const GET_ITEM_COUNT = gql`
    {
        itemCount @client
    }
`

const GET_CART_TOTAL = gql`
    {
        cartTotal @client
    }
`

export const resolvers = {
    Mutation: {
        toggleCartHidden: (_root, _args, { cache }) => {
            const {cartHidden} = cache.readQuery({
                query: GET_CART_HIDDEN,
                // variables: {}
            })
            cache.writeQuery({
                query: GET_CART_HIDDEN,
                data: {cartHidden: !cartHidden}
            })

            return !cartHidden
        },

        addItemToCart: (_root, {item}, { cache }) => {
            const {cartItems} = cache.readQuery({
                query: GET_CART_ITEMS
            })
            const newCartItems = addItemToCart(cartItems, item)
            const cartTotal = cartItems.reduce((accumulatedPrice, item) => accumulatedPrice + item.price*item.quantity, 0)
            cache.writeQuery({
                query: GET_CART_TOTAL,
                data: {cartTotal}
            })
            cache.writeQuery({
                query: GET_ITEM_COUNT,
                data: {itemCount: getCartItemCount(newCartItems)}
            })
            cache.writeQuery({
                query: GET_CART_ITEMS,
                data: {cartItems: newCartItems}
            })

            return newCartItems
        }
    }
}