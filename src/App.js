import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { auth, createUserProfileDocuemnt } from "./firebase/firebase.utils";
import { createStructuredSelector } from "reselect";

import { GlobalStyle } from "./global.styles";

import Header from "./components/header/header.component";
import Footer from "./components/footer/footer.component";
import HomePage from "./pages/homepage/homepage.component";
import Category from "./pages/category/category.component";
import Checkout from "./pages/checkout/checkout.component";
import SignInSignUp from "./pages/sign-in-sign-up/sign-in-sign-up.component";

import { fetchCategoriesStartAsync } from "./redux/shop/shop.actions";
import { setCurrentUser } from "./redux/user/user.actions";
import { selectCurrentUser } from "./redux/user/user.selector";

class App extends React.Component {
  unsubscribeFromAuth = null;

  componentDidMount() {
    const { fetchCategories, setCurrentUser } = this.props;
    fetchCategories();

    this.unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        const userRef = await createUserProfileDocuemnt(userAuth);
        userRef.onSnapshot((snapshot) => {
          setCurrentUser({
            id: snapshot.id,
            ...snapshot.data(),
          });
        });
      } else {
        setCurrentUser(userAuth);
      }
    });
  }

  componentDidUpdate() {
    const { fetchCategories } = this.props;
    fetchCategories();
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <>
        <GlobalStyle />
        <Header />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/categories/:slug" component={Category} />
          <Route exact path="/checkout" component={Checkout} />
          <Route
            path="/signin"
            render={() =>
              this.props.user ? <Redirect to="/" /> : <SignInSignUp />
            }
          />
        </Switch>
        <Footer />
      </>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  fetchCategories: () => dispatch(fetchCategoriesStartAsync()),
  setCurrentUser: (user) => dispatch(setCurrentUser(user)),
});

const mapStateToProps = createStructuredSelector({
  // JUST FOR UPLOAD TODO: REMOVE
  // collectionsArray: selectDataForUpload,
  user: selectCurrentUser,
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
