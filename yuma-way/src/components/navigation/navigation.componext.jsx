import React from "react";
import { StyledNavigation } from "./index.styles";
import { Link } from "react-router-dom";
import NavigationList from "./navigationList.component";
import { useMediaQuery } from "react-responsive";
import { device } from "../../main.styles";
import NavigationDropdown from "./navigation-dropdown.component";
import CustomButton, { BUTTON_TYPES_CLASSES } from "../button/button.component";

const Navigation = () => {
  const isDesktopOrLarger = useMediaQuery({
    query: device.desktop,
  });
  return (
    <StyledNavigation>
      <Link to="/">
        <div className="logo">Logo</div>
        {/* Uncomment when we get a asset for logo and replace div .logo */}
        {/* <img className="logo" src={Logo} alt="Yuma way company logo... coming soon" /> */}
      </Link>
      {!isDesktopOrLarger && (
        <CustomButton style={{ margin: "1rem 1rem 1rem auto" }} buttonType={BUTTON_TYPES_CLASSES.getStarted}>
          <Link className="link-item" to="/get-started">
            Get Started
          </Link>
        </CustomButton>
      )}
      {isDesktopOrLarger ? <NavigationList isDesktopOrLarger={isDesktopOrLarger} /> : <NavigationDropdown />}
      {isDesktopOrLarger && (
        <div className="link-container">
          <Link className="link-item" to="/login">
            Login
          </Link>
          <CustomButton buttonType={BUTTON_TYPES_CLASSES.getStarted}>
            <Link className="link-item" to="/get-started">
              Get Started
            </Link>
          </CustomButton>
        </div>
      )}
    </StyledNavigation>
  );
};

export default Navigation;
