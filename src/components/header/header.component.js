import React from 'react'
import { Link } from 'react-router-dom'
import './header.styles.scss'
import { ReactComponent as Logo } from '../../assets/modernCart.svg'
import { auth } from '../../firebase/firebase.utils'
import { connect } from 'react-redux'
import CartIcon from '../cart-icon/cart-icon.component'
import Cart from '../cart-dropdown/cart-dropdown.component'
import { createStructuredSelector } from 'reselect'
import { selectCartHidden } from '../../redux/cart/cart.selectors'
import { selectCurrentUser } from '../../redux/user/user.selectors'
import { HeaderContainer, LogoContainer, LogoDiv, OptionDiv, OptionLink, OptionsContainer, LogoText } from './header.styles'

const Header = ({ currentUser, hidden }) => {
    return (
        <HeaderContainer>
            <LogoContainer to="/">
                <LogoDiv >
                    <LogoText >ModernCart</LogoText>
                    <Logo 
                        height="43px"
                        width="90px"
                        style={{"marginTop":"10px"}}
                        className="logo">
                    </Logo>
                </LogoDiv>
            </LogoContainer>
            <OptionsContainer >
                <OptionLink to="/shop" >
                    SHOP
                </OptionLink>
                <OptionLink to="/contact" >
                    CONTACT
                </OptionLink>
                {
                    currentUser
                        ?
                        (
                            // <OptionDiv 
                            //     onClick={() => auth.signOut()}>
                            //     SIGN OUT
                            // </OptionDiv>
                            <OptionLink as='div'
                                onClick={() => auth.signOut()}>
                                SIGN OUT
                            </OptionLink>
                        )
                        :
                        (
                            <OptionLink to="/signin" >
                                SIGN IN
                            </OptionLink>
                        )
                }
                <CartIcon />
            </OptionsContainer>
            { hidden ? (<></>) : (<Cart />) }
        </HeaderContainer>
    )
}

// const mapStateToProps = ({user: {currentUser}, cart: {hidden} }) => ({
//     currentUser, hidden
// })

const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser, 
    hidden: selectCartHidden
})

export default connect(mapStateToProps)(Header)