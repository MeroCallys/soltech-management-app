import { Outlet } from "react-router-dom";
import {
  HeaderSC,
  NavSC,
  LogoContainer,
  LogoLinkWrapper,
  MenuItemsWrapper,
  MenuItemLink,
  AiFillHomeSC,
  MdInventorySC,
  MenuContainer,
} from "../../components/header/Header";

function MainLayout() {
  return (
    <>
      <HeaderSC>
        <NavSC>
          <LogoContainer>
            <LogoLinkWrapper to={"/"}>#Logo Here</LogoLinkWrapper>
          </LogoContainer>
          <MenuContainer>
            <MenuItemsWrapper>
              <MenuItemLink to="/">
                {/* <AiFillHomeSC /> */}
                Home
              </MenuItemLink>
            </MenuItemsWrapper>
            <MenuItemsWrapper>
              <MenuItemLink to="inventory">
                {/* <AiFillHomeSC /> */}
                Ledger
              </MenuItemLink>
            </MenuItemsWrapper>
            <MenuItemsWrapper>
              <MenuItemLink to="/">
                {/* <AiFillHomeSC /> */}
                Inventory
              </MenuItemLink>
            </MenuItemsWrapper>
            <MenuItemsWrapper>
              <MenuItemLink to="/">
                {/* <AiFillHomeSC /> */}
                Login
              </MenuItemLink>
            </MenuItemsWrapper>
            <MenuItemsWrapper>
              <MenuItemLink to="/">{/* <MdInventorySC /> */}</MenuItemLink>
            </MenuItemsWrapper>
          </MenuContainer>
        </NavSC>
      </HeaderSC>
      <Outlet />
    </>
  );
}

export default MainLayout;
