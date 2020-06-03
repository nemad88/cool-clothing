import React from "react";
import {connect} from 'react-redux'
import {createStructuredSelector} from 'reselect'

import {StyledComponents as S} from "./header-burger.styles";

import {selectNavIsOpen} from '../../redux/shop/shop.selector'
import {toggleBurger} from '../../redux/shop/shop.actions'

import BurgerMenu from '../burger-menu/burger-menu.component'

class Burger extends React.Component {

    state = {
        toggle: false
    }

    render() {
        return (
            <S.Burger onClick={() => {
                this.props.toggleBurgerMenu();
                this.setState((prevState) => {
                    return ({
                        toggle: !prevState.toggle
                    })
                })
            }}>
                <S.BurgerSpan1 className={this.state.toggle ? 'toggle' : null}/>
                <S.BurgerSpan2 className={this.state.toggle ? 'toggle' : null}/>
                <S.BurgerSpan3 className={this.state.toggle ? 'toggle' : null}/>
            </S.Burger>

        )
    }
}

const mapStateToProps = createStructuredSelector({
    navIsOpen: selectNavIsOpen
})


const mapDispatchToProps = (dispatch) => ({
    toggleBurgerMenu: () => dispatch(toggleBurger),
});



export default connect(mapStateToProps, mapDispatchToProps)(Burger);
