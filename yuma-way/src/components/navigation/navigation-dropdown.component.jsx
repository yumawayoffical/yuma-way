import React, { useState } from "react";
import { GlobalStyle, StyledNavigationMobileMenu } from "./index.styles";
import NavigationList from "./navigationList.component";
import { CgMenuRight, CgClose } from "react-icons/cg";
import CustomButton, { BUTTON_TYPES_CLASSES } from "../button/button.component";
const NavigationDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleMenuClickEvent = () => {
    if (!isOpen) {
      setIsOpen(true);
    } else {
      setIsOpen(false);
    }
  };
  return (
    <>
      {isOpen && <GlobalStyle />}
      <CustomButton buttonType={BUTTON_TYPES_CLASSES.dropdown} className="menu-button-open" onClick={handleMenuClickEvent}>
        <CgMenuRight fontSize={"24px"} />
      </CustomButton>
      {isOpen && (
        <StyledNavigationMobileMenu>
          <CustomButton buttonType={BUTTON_TYPES_CLASSES.close} className="menu-button-close" onClick={handleMenuClickEvent}>
            <CgClose fontSize={"24px"} />
          </CustomButton>
          <NavigationList setIsOpen={setIsOpen} />
        </StyledNavigationMobileMenu>
      )}
    </>
  );
};

export default NavigationDropdown;
