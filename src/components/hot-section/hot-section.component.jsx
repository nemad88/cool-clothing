import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import { selectHotItems } from "../../redux/shop/shop.selector";

import { StyledComponents as S } from './hot-section.styles'

import HotItem from "../hot-item/hot-item.component";
import SectionTitle from '../section-title/section-title.components'

const Hot = ({ hotItems }) => {
    hotItems.map(item => {
      console.log(item)
  })

  return (
    <S.HotSection>
      <SectionTitle>what’s hot now?</SectionTitle>
      <S.HotList>
        {hotItems.map((item) => (
          <HotItem
            key={item.id}
            item={item}
          />
        ))}
      </S.HotList>
    </S.HotSection>
  );
};

const mapStateToProps = createStructuredSelector({
  hotItems: selectHotItems,
});

export default connect(mapStateToProps)(Hot);
