import React, { useState } from "react";
import { GlobalStyle, StyledNavigationMobileMenu } from "./index.styles";
import NavigationList from "./navigationList.component";
import { CgMenuRight, CgClose } from "react-icons/cg";
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
      <button className="menu-button-open" onClick={handleMenuClickEvent}>
        <CgMenuRight fontSize={"24px"} />
      </button>
      {isOpen && (
        <StyledNavigationMobileMenu>
          <button className="menu-button-close" onClick={handleMenuClickEvent}>
            <CgClose fontSize={"24px"} />
          </button>
          <NavigationList setIsOpen={setIsOpen} />
        </StyledNavigationMobileMenu>
      )}
    </>
  );
};

export default NavigationDropdown;
