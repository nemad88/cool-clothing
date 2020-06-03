import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import { StyledComponents as S } from "./search-result-box.styles";

import { selectSearchResult } from "../../redux/shop/shop.selector";
import SearchResultItem from "../search-result-item/search-result-item.component";

const SearchResultBox = ({ searchResult }) => {
    const result = searchResult.map((item) => {
        return (
            <SearchResultItem key={item.id} item={item} />
        );
    });

    return (
        <S.SearchResultBox>
            <S.SearchResultBoxTitle>Search results:</S.SearchResultBoxTitle>
            <S.SearchResultList>
                {searchResult.length > 0 ? result : <div>No item</div>}
            </S.SearchResultList>
        </S.SearchResultBox>
    );
};

const mapStateToProps = createStructuredSelector({
    searchResult: selectSearchResult,
});

export default connect(mapStateToProps)(SearchResultBox);
