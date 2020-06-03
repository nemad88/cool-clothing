import React from "react";
import {connect} from "react-redux";
import {createStructuredSelector} from "reselect";

import {selectCart, selectCategoriesAsArray} from "../../redux/shop/shop.selector";

import {StyledComponents as S} from './categories-section.styles';

import CategoryItem from "../category-item/category-item.component";
import SectionTitle from '../section-title/section-title.components'

const CategoriesSection = ({categories, cart}) => {

    const categoryItems = categories.map((category) => {
        const max = category.items.length - 1;
        const random = Math.ceil(Math.random() * (max - 0) + 0);
        const actualItem = category.items[random];
        return (
            <CategoryItem
                key={category.title}
                title={category.title}
                imageUrl={actualItem.imageUrl}
                routeName={category.routeName}
            />
        );
    });

    return (
        <S.CategoriesSection>
            <div>
                {cart.map(item => (
                    <div>
                        <div>{item.name}</div>
                        <div>{item.price}</div>
                    </div>
                ))}
            </div>
            <SectionTitle>browse categories</SectionTitle>
            <S.CategoryList>{categoryItems}</S.CategoryList>
        </S.CategoriesSection>
    );
};

const mapStateToProps = createStructuredSelector({
    categories: selectCategoriesAsArray,
    cart: selectCart
});

export default connect(mapStateToProps)(CategoriesSection);
