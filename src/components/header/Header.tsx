import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { AiFillHome } from "react-icons/ai";
import { MdInventory } from "react-icons/md";

export const HeaderSC = styled.header`
  /* grid-area: sidebar; */
  width: 100%;
  height: 7.5vh;
  background-color: #cb8fd3;
`;
export const NavSC = styled.nav`
  border: 0.5px dashed red;
  height: inherit;
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

export const LogoContainer = styled.section`
  height: auto;
  width: 10%;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1rem;
`;

export const LogoLinkWrapper = styled(NavLink)`
  text-decoration: none;
`;

export const MenuContainer = styled.ul`
  list-style: none;
  width: auto;
  display: flex;
`;

export const MenuItemsWrapper = styled.li`
  display: flex;
  align-items: center;
  padding: 0 1rem;
`;

export const MenuItemLink = styled(NavLink)`
  width: 100%;
  text-decoration: none;
  padding: 1rem 0 1rem 1rem;
  display: flex;
  align-items: center;
  justify-content: center;

  /* &:hover {
    background-color: ${({ theme }) => theme.colors.orange.orange1};
    border-radius: 30px 0 0 30px;
  }
  &:focus {
    background-color: ${({ theme }) => theme.colors.orange.orange1};
    border-radius: 30px 0 0 30px;
  } */
`;

export const AiFillHomeSC = styled(AiFillHome)`
  display: inline-block;
  font-size: 1.5rem;
  margin-right: 1rem;
`;

export const MdInventorySC = styled(MdInventory)`
  font-size: 1.5rem;
  margin-right: 1rem;
`;
