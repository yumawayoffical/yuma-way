import React, { useState } from "react";
import { GlobalStyle, StyledNavigationMobileMenu } from "./index.styles";
import NavigationList from "./navigationList.component";

const NavigationDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleMenuClickEvent = () => {
    console.log("Test");
    if (!isOpen) {
      setIsOpen(true);
    } else {
      setIsOpen(false);
    }
  };
  return (
    <>
      {isOpen && <GlobalStyle />}
      <button onClick={handleMenuClickEvent}>Menu</button>
      {isOpen && (
        <StyledNavigationMobileMenu>
          <button onClick={handleMenuClickEvent}>X</button>
          <NavigationList setIsOpen={setIsOpen} />
        </StyledNavigationMobileMenu>
      )}
    </>
  );
};

export default NavigationDropdown;
