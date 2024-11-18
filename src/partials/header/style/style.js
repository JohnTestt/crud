import styled from "styled-components";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { Link } from "react-router-dom";

export const HeaderMenu = styled.header`
  width: 100%;
  min-height: 3rem;
  display: flex;
  align-items: center;
  position: sticky;
  top: 0;
  z-index: 3;
  background-color: ${({ theme }) => theme.headerBackground};
`;
export const Navigation = styled.nav`
  width: 95%;
  min-height: 2rem;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const NavigationItem = styled.div``;
export const StyledMenuButton = styled.div`
  & :hover {
    background-color: ${({ theme }) => theme.hoverColor};
    border-radius: 100%;
  }
`;

export const StyledMenuIcon = styled(MenuIcon)`
  padding: 0.5rem;
`;
export const StyledcloseIcon = styled(CloseIcon)`
  padding: 0.5rem;
  font-size: large;
`;
export const LinkNavegation = styled.div`
  padding: 0.5rem;
  background-color: #1976d2;
  border-radius: 5px;

  &:hover {
    background-color: #1565c0;
  }
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
  color: white;
  font-family: "Roboto";
  font-size: 17px;
  background-color: transparent;
  padding: 1rem;
`;
export const NavigationImg = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 100%;
  padding: 5px;
  object-fit: cover;
  cursor: pointer;
`;

export const MainContentStyled = styled.div`
  transition: margin-left 0.8s ease-in-out; // transição suave
  margin-left: ${(props) => props.open ? "12%" : "0"}; /* ou a largura do seu Drawer */
  padding-top: 1rem;
  z-index: 2;

  @media (max-width: 768px) {
    margin-left: 0;
  }
`;
