import React from "react";
import NavigationListItemData from "./navigation-links.config.json";
import { Link } from "react-router-dom";
import { StyledNavigationList } from "./index.styles";

const NavigationList = ({ setIsOpen, isDesktopOrLarger }) => {
  const handleListItemOnClick = () => {
    if (isDesktopOrLarger) return;
    setIsOpen(false);
  };

  return (
    <StyledNavigationList>
      {NavigationListItemData.map(({ linkName, linkUrl }, index) => {
        return (
          <Link className="link-item" key={index} to={linkUrl} onClick={handleListItemOnClick}>
            <li className="link-list-item">{linkName}</li>
          </Link>
        );
      })}
      {!isDesktopOrLarger && (
        <div className="link-container">
          <Link to="/login">Login</Link>
          <Link to="/get-started">Get Started</Link>
        </div>
      )}
    </StyledNavigationList>
  );
};

export default NavigationList;
