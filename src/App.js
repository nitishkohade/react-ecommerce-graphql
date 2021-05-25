import { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect, Route, Switch } from 'react-router';
import './App.css';
import Header from './components/header/header.component';
import { addCollectionAndDocuments, auth, createUserProfileDocument } from './firebase/firebase.utils';
import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import { setCurrentUser } from './redux/user/user.actions';
import { selectCurrentUser } from './redux/user/user.selectors';
import { getShopCollecions } from './redux/shop/shop.selectors';
import { createStructuredSelector } from 'reselect'
import CheckoutPage from './pages/checkout/checkout.component';


class App extends Component {
  unsubscribeFromAuth = null

  componentDidMount() {
    const {setCurrentUser, collections} = this.props
    this.unsubscribeFromAuth = auth.onAuthStateChanged(
      async (userAuth) => {
        if(userAuth) {
          const userRef = await createUserProfileDocument(userAuth)
          userRef.onSnapshot((snapShot) => {
            setCurrentUser({
                id: snapShot.id,
                ...snapShot.data()
            })
          })
        }
        setCurrentUser(userAuth)
        // addCollectionAndDocuments('collections', collections.map(({title, items}) => ({title, items})))
      }
    )
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth()
  }

  render() {
    return (
      <div>
        <Header />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/shop" component={ShopPage} />
          <Route exact path="/checkout" component={CheckoutPage} />
          <Route exact path="/signin" render={() => this.props.currentUser ? (<Redirect to="/" />) : (<SignInAndSignUpPage />) } />
        </Switch>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  setCurrentUser: (user) => {
    dispatch(setCurrentUser(user))
  }
})

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  collections: getShopCollecions
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
