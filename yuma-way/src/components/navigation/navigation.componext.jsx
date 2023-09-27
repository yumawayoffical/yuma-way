import React from "react";
import { StyledNavigation } from "./index.styles";
import { Link } from "react-router-dom";
import NavigationList from "./navigationList.component";
import { useMediaQuery } from "react-responsive";
import { device } from "../../main.styles";
import NavigationDropdown from "./navigation-dropdown.component";

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
      {isDesktopOrLarger ? <NavigationList isDesktopOrLarger={isDesktopOrLarger} /> : <NavigationDropdown />}
    </StyledNavigation>
  );
};

export default Navigation;
