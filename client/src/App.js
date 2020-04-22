import React, { Component, lazy, Suspense } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import { connect } from 'react-redux';

import Header from "./components/header/header.component";
import ShopPage from "./pages/shop/shop.component";
import CheckoutPage from "./pages/checkout/checkout.component";
import SignInSignUp from "./pages/signin-and-signup/signin-signup";

import { selectCurrentUser } from './redux/user/user.selectors';

import { setCurrentUser } from './redux/user/user.actions';

import { selectCollectionsForPreview } from './redux/shop/shop.selectors';

import {
  auth,
  createUserProfileDocument,
  addCollectionAndItems
} from "./firebase/firebase.util";

class App extends Component {

  state = {
    currentUser: null
  };

  componentDidMount() {
    const { setCurrentUser, collectionArray } = this.props;

    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      console.log("auth state changed.");
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapShot => {
          setCurrentUser(
            {
              currentUser: {
                id: snapShot.id,
                ...snapShot.data()
              }
            },
            () => {
              console.log("user updated");
              console.log(this.state);
            }
          );
        });
      }
      setCurrentUser(userAuth);
      addCollectionAndItems('collections', collectionArray.map(({title, items}) => ({title, items})));
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    const HomePage = lazy(() => import('./pages/home/home.component'));
    return (  
      <>
        <Header />
        <Switch>
          <Suspense fallback={(<div>Loading...</div>)}>
          <Route exact={true} path="/" component={HomePage} />
          </Suspense>
          
          <Route path="/shop" component={ShopPage} />
          <Route path="/checkout" component={CheckoutPage} />
          <Route path="/signin-and-signup" render={() => (this.props.currentUser) ? <Redirect to='/'/> : <SignInSignUp />} />
        </Switch>
      </>
    );
  }
}

const mapStateToProps = state => ({
  currentUser: selectCurrentUser(state),
  collectionArray: selectCollectionsForPreview(state)
});

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
