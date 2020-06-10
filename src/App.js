import React from "react";
import { Switch, Route } from "react-router-dom";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import { GlobalStyle } from "./global.styles";

import Header from "./components/header/header.component";
import HomePage from "./pages/homepage/homepage.component";
import Category from "./pages/category/category.component";

import { fetchCategoriesStartAsync } from "./redux/shop/shop.actions";

// JUST FOR UPLOAD TODO: REMOVE
// import { addCollectionAndDocuments } from "./firebase/firebase.utils";
// import { selectDataForUpload } from "./redux/shop/shop.selector";

class App extends React.Component {
  componentDidMount() {
    const { fetchCategories } = this.props;
    // JUST FOR UPLOAD TODO: REMOVE
    //addCollectionAndDocuments("categories", collectionsArray);
    fetchCategories();
  }

  componentDidUpdate() {
    const { fetchCategories } = this.props;
    fetchCategories();
  }

  render() {
    return (
      <>
        <GlobalStyle />
        <Header />
        <Switch>
          <Route exact path="/cool-clothing" component={HomePage} />

          <Route
            exact
            path="/cool-clothing/categories/:slug"
            component={Category}
          />
        </Switch>
      </>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  fetchCategories: () => dispatch(fetchCategoriesStartAsync()),
});

const mapStateToProps = createStructuredSelector({
  // JUST FOR UPLOAD TODO: REMOVE
  // collectionsArray: selectDataForUpload,
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
