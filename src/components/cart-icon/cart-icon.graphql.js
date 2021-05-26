import {React} from 'react'
import {graphql} from 'react-apollo'
import {flowRight as compose} from 'lodash';

import {gql} from 'apollo-boost'

import CartIcon from './cart-icon.component'

const TOGGLE_CART_HIDDEN = gql`
    mutation ToggleCartHidden {
        toggleCartHidden @client
    }
`

const GET_ITEM_COUNT = gql`
    {
        itemCount @client
    }
`

const CartIconGraphql = ({data: {itemCount}, toggleCartHidden}) => (
        // <Query query={GET_ITEM_COUNT}>
        //     {
        //         ({data: {itemCount}}) => (<Mutation mutation={TOGGLE_CART_HIDDEN}>
        //             {
        //                 (toggleCartHidden) => <CartIcon toggleCartHidden={toggleCartHidden} itemCount={itemCount} />
        //             }
        //         </Mutation>)
        //     }
        // </Query>
        <CartIcon toggleCartHidden={toggleCartHidden} itemCount={itemCount} />
)

export default compose(
    graphql(GET_ITEM_COUNT),
    graphql(TOGGLE_CART_HIDDEN, {name: 'toggleCartHidden'})
)(CartIconGraphql)