import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { StyledComponents as S } from './header-search.styles';

import { searchItems, clearSearch } from '../../redux/search/search.actions';

import { selectSearchedItems } from '../../redux/search/search.selector';

import SearchResultBox from '../search-result-box/search-result-box.component';

const HeaderSearch = () => {
  const [searchFor, setSearchFor] = useState('');
  const [searchBoxVisible, setSearchBoxVisible] = useState(false);
  const [isClearIconVisible, setIsClearIconVisible] = useState(false);
  const dispatch = useDispatch();
  const allItem = useSelector(selectSearchedItems(searchFor));

  const handleChange = (event) => {
    setSearchFor(event.target.value);
  };

  const handleClearSearch = () => {
    setSearchFor('');
    dispatch(clearSearch);
  };

  useEffect(() => {
    if (searchFor.length > 0) {
      setIsClearIconVisible(true);
    } else {
      setIsClearIconVisible(false);
    }

    if (searchFor.length >= 3) {
      setSearchBoxVisible(true);
      dispatch(searchItems(allItem));
    } else {
      setSearchBoxVisible(false);
    }
  }, [setIsClearIconVisible, allItem, dispatch, searchFor]);

  return (
    <S.HeaderSearch>
      <S.SearchField
        placeholder="search product"
        name="searchFor"
        onChange={handleChange}
        type="search"
        value={searchFor}
      />
      {searchBoxVisible ? <SearchResultBox /> : null}
      <S.MagnifyIcon />
      <S.CloseIcon
        className={isClearIconVisible ? 'active' : null}
        onClick={handleClearSearch}
      />
    </S.HeaderSearch>
  );
};
export default HeaderSearch;
