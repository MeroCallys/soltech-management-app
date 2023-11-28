import {
  HeaderS,
  Container,
  LogoContainer,
  LogoWrapper,
  ToggeleSwitch,
  NavContainer,
  NavMenuLinks,
  LoginButton,
  ButtonWrapper,
  RegisterButton,
  LogoLink,
  NavMenuWrapper,
} from "./Header.styled";
import { useState } from "react";

function Header() {
  const [showNav, setShowNav] = useState(false);

  const handleClick = () => {
    setShowNav(!showNav);
    console.log(showNav);
  };
  return (
    <HeaderS>
      <Container>
        <LogoContainer>
          <LogoWrapper>
            <LogoLink to="/">SolTech</LogoLink>
          </LogoWrapper>
          <ToggeleSwitch $showNav={showNav} onClick={handleClick}>
            <span></span>
            <span></span>
            <span></span>
          </ToggeleSwitch>
        </LogoContainer>
        <NavContainer $showNav={showNav}>
          <NavMenuWrapper>
            <NavMenuLinks to="/">Home</NavMenuLinks>
            <NavMenuLinks to="/">Dashboard</NavMenuLinks>
            <NavMenuLinks to="/">Ledger</NavMenuLinks>
            <NavMenuLinks to="/">Inventory</NavMenuLinks>
          </NavMenuWrapper>
          <ButtonWrapper>
            <RegisterButton to="/">Register</RegisterButton>
            <LoginButton to="/">Login</LoginButton>
          </ButtonWrapper>
        </NavContainer>
      </Container>
    </HeaderS>
  );
}

export default Header;
