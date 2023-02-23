import React from "react";
import { Link } from "react-router-dom";
import StyledButton from "../MyButton";
import MainNavbarWrapper from "./MainNavbarWrapper";

export const MainNavbar = () => {
  return (
    <MainNavbarWrapper>
      <div className="rows">
        <Link to={"/user/"}>
          <StyledButton>
            <span>All</span>
          </StyledButton>
        </Link>
        <Link to={"/user/salads"}>
          <StyledButton>
            <span>Salads</span>
          </StyledButton>
        </Link>
        <Link to={"/user/soups"}>
          <StyledButton>
            <span>Soups</span>
          </StyledButton>
        </Link>
        <Link to={"/user/drinks"}>
          <StyledButton>
            <span>Soups</span>
          </StyledButton>
        </Link>
        <Link to={"/user/kebabs"}>
          <StyledButton>
            <span>Kebabs</span>
          </StyledButton>
        </Link>
        <Link to={"/user/meat-dishes"}>
          <StyledButton>
            <span>Meat dishes</span>
          </StyledButton>
        </Link>
        <Link to={"/user/chicken-dishes"}>
          <StyledButton>
            <span>Chicken dishes</span>
          </StyledButton>
        </Link>
        <Link to={"/user/fish-dishes"}>
          <StyledButton>
            <span>Fish dishes</span>
          </StyledButton>
        </Link>
        <Link to={"/user/vegetable-dishes"}>
          <StyledButton>
            <span>Vegetable dishes</span>
          </StyledButton>
        </Link>
      </div>
    </MainNavbarWrapper>
  );
};
