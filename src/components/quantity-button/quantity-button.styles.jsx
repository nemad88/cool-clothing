import styled, { css } from "styled-components";
import { ReactComponent as Minus } from "../../assets/img/minus-filled.svg";
import { ReactComponent as Plus } from "../../assets/img/plus-filled.svg";
import { ReactComponent as Trashbin } from "../../assets/img/trashbin.svg";

const iconMixin = css`
  width: 20px;
  height: 20px;
  margin: 1rem;
  cursor: pointer;
`;

export const MinusIcon = styled(Minus)`
  ${iconMixin}
`;

export const PlusIcon = styled(Plus)`
  ${iconMixin}
`;

export const TrashbinIcon = styled(Trashbin)`
  ${iconMixin}
`;

export const StyledComponents = {
  MinusIcon,
  PlusIcon,
  TrashbinIcon,
};
