import React from "react";
import { BaseButton, CloseButton, DropDownMenuButton, GetStartedButton } from "./button.styles";

export const BUTTON_TYPES_CLASSES = {
  base: "base",
  getStarted: "getStarted",
  dropdown: "dropdown",
  close: "close",
};

const getButton = (buttonType = BUTTON_TYPES_CLASSES.base) =>
  ({
    [BUTTON_TYPES_CLASSES.base]: BaseButton,
    [BUTTON_TYPES_CLASSES.getStarted]: GetStartedButton,
    [BUTTON_TYPES_CLASSES.dropdown]: DropDownMenuButton,
    [BUTTON_TYPES_CLASSES.close]: CloseButton,
  }[buttonType]);

const CustomButton = ({ children, buttonType, ...otherProps }) => {
  const CustomButton = getButton(buttonType);
  return <CustomButton {...otherProps}>{children}</CustomButton>;
};

export default CustomButton;
