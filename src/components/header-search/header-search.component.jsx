import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import {
  HeaderSearchContainer,
  InputSyled,
  MagnifyStyled,
} from "./header-search.styles";

import { searchItems, clearSearch } from "../../redux/shop/shop.actions";

import { selectAllItemsAsArray } from "../../redux/shop/shop.selector";

import SearchResultBox from "../search-result-box/search-result-box.component";

class HeaderSearch extends React.Component {
  state = {
    searchFor: "",
    visible: false,
  };

  handleChange = (event) => {
    const { allItems, searchItems, clearSearch } = this.props;
    const { value, name } = event.target;

    if (value.length >= 3) {
      this.setState({ [name]: value, visible: true }, () => {
        const { searchFor } = this.state;
        let filtered = allItems.filter((item) =>
          item.name.toLowerCase().includes(searchFor.toLowerCase())
        );
        searchItems(filtered);
      });
    } else {
      this.setState({ visible: false }, () => {
        clearSearch();
      });
    }
  };

  render() {
    return (
      <HeaderSearchContainer>
        <InputSyled
          placeholder="search product"
          name="searchFor"
          onChange={this.handleChange}
          type="search"
        />
        <MagnifyStyled />
        {this.state.visible ? <SearchResultBox /> : null}
      </HeaderSearchContainer>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  searchItems: (searchText) => dispatch(searchItems(searchText)),
  clearSearch: () => dispatch(clearSearch),
});

const mapStateToProps = createStructuredSelector({
  allItems: selectAllItemsAsArray,
});

export default connect(mapStateToProps, mapDispatchToProps)(HeaderSearch);
