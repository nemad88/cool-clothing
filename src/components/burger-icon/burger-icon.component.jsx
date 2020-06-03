import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import { StyledComponents as S } from "./burger-icon.styles";

import { selectNavIsOpen } from "../../redux/shop/shop.selector";
import { toggleBurger } from "../../redux/shop/shop.actions";

class BurgerIcon extends React.Component {
  state = {
    toggle: false,
  };

  render() {
    return (
      <S.BurgerIcon
        onClick={() => {
          this.props.toggleBurgerMenu();
          this.setState((prevState) => {
            return {
              toggle: !prevState.toggle,
            };
          });
        }}
      >
        <S.BurgerIconSpan1 className={this.state.toggle ? "toggle" : null} />
        <S.BurgerIconSpan2 className={this.state.toggle ? "toggle" : null} />
        <S.BurgerIconSpan3 className={this.state.toggle ? "toggle" : null} />
      </S.BurgerIcon>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  navIsOpen: selectNavIsOpen,
});

const mapDispatchToProps = (dispatch) => ({
  toggleBurgerMenu: () => dispatch(toggleBurger),
});

export default connect(mapStateToProps, mapDispatchToProps)(BurgerIcon);
