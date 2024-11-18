import { jsxs, Fragment, jsx } from "react/jsx-runtime";
import React, { createContext, useContext, useState, useRef, useEffect } from "react";
import { renderToPipeableStream } from "react-dom/server";
import { Link, useNavigate, useParams, HashRouter, Routes, Route } from "react-router-dom";
import styled, { styled as styled$1 } from "styled-components";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import HomeIcon from "@mui/icons-material/Home";
import GroupIcon from "@mui/icons-material/Group";
import GroupAddIcon from "@mui/icons-material/GroupAdd";
import LogoutIcon from "@mui/icons-material/Logout";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";
import axios from "axios";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import SearchIcon from "@mui/icons-material/Search";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import EmailIcon from "@mui/icons-material/Email";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
const Home = () => /* @__PURE__ */ jsxs(Fragment, { children: [
  /* @__PURE__ */ jsx("p", { children: "Pagina raiz" }),
  "funfando! funfando! funfando! funfando! funfando!",
  /* @__PURE__ */ jsx("div", { children: "funfando!" }),
  /* @__PURE__ */ jsx("div", { children: "funfando!" }),
  " ",
  /* @__PURE__ */ jsx("div", { children: "funfando!" }),
  " ",
  /* @__PURE__ */ jsx("div", { children: "funfando!" }),
  " ",
  /* @__PURE__ */ jsx("div", { children: "funfando!" }),
  " ",
  /* @__PURE__ */ jsx("div", { children: "funfando!" }),
  " ",
  /* @__PURE__ */ jsx("div", { children: "funfando!" }),
  " ",
  /* @__PURE__ */ jsx("div", { children: "funfando!" }),
  " ",
  /* @__PURE__ */ jsx("div", { children: "funfando!" }),
  " ",
  /* @__PURE__ */ jsx("div", { children: "funfando!" }),
  " ",
  /* @__PURE__ */ jsx("div", { children: "funfando!" }),
  " ",
  /* @__PURE__ */ jsx("div", { children: "funfando!" }),
  " ",
  /* @__PURE__ */ jsx("div", { children: "funfando!" }),
  " ",
  /* @__PURE__ */ jsx("div", { children: "funfando!" }),
  " ",
  /* @__PURE__ */ jsx("div", { children: "funfando!" }),
  " ",
  /* @__PURE__ */ jsx("div", { children: "funfando!" }),
  " ",
  /* @__PURE__ */ jsx("div", { children: "funfando!" }),
  " ",
  /* @__PURE__ */ jsx("div", { children: "funfando!" }),
  " ",
  /* @__PURE__ */ jsx("div", { children: "funfando!" }),
  " ",
  /* @__PURE__ */ jsx("div", { children: "funfando!" }),
  " ",
  /* @__PURE__ */ jsx("div", { children: "funfando!" }),
  " ",
  /* @__PURE__ */ jsx("div", { children: "funfando!" }),
  " ",
  /* @__PURE__ */ jsx("div", { children: "funfando!" }),
  " ",
  /* @__PURE__ */ jsx("div", { children: "funfando!" }),
  " ",
  /* @__PURE__ */ jsx("div", { children: "funfando!" }),
  " ",
  /* @__PURE__ */ jsx("div", { children: "funfando!" }),
  " ",
  /* @__PURE__ */ jsx("div", { children: "funfando!" }),
  " ",
  /* @__PURE__ */ jsx("div", { children: "funfando!" }),
  " ",
  /* @__PURE__ */ jsx("div", { children: "funfando!" }),
  " ",
  /* @__PURE__ */ jsx("div", { children: "funfando!" }),
  " ",
  /* @__PURE__ */ jsx("div", { children: "funfando!" }),
  " ",
  /* @__PURE__ */ jsx("div", { children: "funfando!" }),
  " ",
  /* @__PURE__ */ jsx("div", { children: "funfando!" }),
  " ",
  /* @__PURE__ */ jsx("div", { children: "funfando!" }),
  " ",
  /* @__PURE__ */ jsx("div", { children: "funfando!" }),
  " ",
  /* @__PURE__ */ jsx("div", { children: "funfando!" }),
  " ",
  /* @__PURE__ */ jsx("div", { children: "funfando!" }),
  " ",
  /* @__PURE__ */ jsx("div", { children: "funfando!" }),
  " ",
  /* @__PURE__ */ jsx("div", { children: "funfando!" }),
  " ",
  /* @__PURE__ */ jsx("div", { children: "funfando!" }),
  " ",
  /* @__PURE__ */ jsx("div", { children: "funfando!" }),
  " ",
  /* @__PURE__ */ jsx("div", { children: "funfando!" }),
  " ",
  /* @__PURE__ */ jsx("div", { children: "funfando!" }),
  " ",
  /* @__PURE__ */ jsx("div", { children: "funfando!" }),
  " ",
  /* @__PURE__ */ jsx("div", { children: "funfando!" }),
  " ",
  /* @__PURE__ */ jsx("div", { children: "funfando!" }),
  " ",
  /* @__PURE__ */ jsx("div", { children: "funfando!" }),
  " ",
  /* @__PURE__ */ jsx("div", { children: "funfando!" }),
  " ",
  /* @__PURE__ */ jsx("div", { children: "funfando!" }),
  " ",
  /* @__PURE__ */ jsx("div", { children: "funfando!" }),
  " ",
  /* @__PURE__ */ jsx("div", { children: "funfando!" }),
  " ",
  /* @__PURE__ */ jsx("div", { children: "funfando!" }),
  " ",
  /* @__PURE__ */ jsx("div", { children: "funfando!" }),
  " ",
  /* @__PURE__ */ jsx("div", { children: "funfando!" }),
  " ",
  /* @__PURE__ */ jsx("div", { children: "funfando!" }),
  " ",
  /* @__PURE__ */ jsx("div", { children: "funfando!" }),
  " ",
  /* @__PURE__ */ jsx("div", { children: "funfando!" }),
  " ",
  /* @__PURE__ */ jsx("div", { children: "funfando!" }),
  " ",
  /* @__PURE__ */ jsx("div", { children: "funfando!" }),
  " ",
  /* @__PURE__ */ jsx("div", { children: "funfando!" }),
  " ",
  /* @__PURE__ */ jsx("div", { children: "funfando!" }),
  " ",
  /* @__PURE__ */ jsx("div", { children: "funfando!" }),
  " ",
  /* @__PURE__ */ jsx("div", { children: "funfando!" }),
  " ",
  /* @__PURE__ */ jsx("div", { children: "funfando!" }),
  " ",
  /* @__PURE__ */ jsx("div", { children: "funfando!" }),
  " ",
  /* @__PURE__ */ jsx("div", { children: "funfando!" }),
  " ",
  /* @__PURE__ */ jsx("div", { children: "funfando!" }),
  " ",
  /* @__PURE__ */ jsx("div", { children: "funfando!" }),
  " ",
  /* @__PURE__ */ jsx("div", { children: "funfando!" }),
  " ",
  /* @__PURE__ */ jsx("div", { children: "funfando!" }),
  " ",
  /* @__PURE__ */ jsx("div", { children: "funfando!" }),
  " ",
  /* @__PURE__ */ jsx("div", { children: "funfando!" }),
  " ",
  /* @__PURE__ */ jsx("div", { children: "funfando!" }),
  " ",
  /* @__PURE__ */ jsx("div", { children: "funfando!" }),
  " ",
  /* @__PURE__ */ jsx("div", { children: "funfando!" }),
  " ",
  /* @__PURE__ */ jsx("div", { children: "funfando!" }),
  " ",
  /* @__PURE__ */ jsx("div", { children: "funfando!" }),
  " ",
  /* @__PURE__ */ jsx("div", { children: "funfando!" }),
  " ",
  /* @__PURE__ */ jsx("div", { children: "funfando!" }),
  " ",
  /* @__PURE__ */ jsx("div", { children: "funfando!" }),
  " ",
  /* @__PURE__ */ jsx("div", { children: "funfando!" }),
  " ",
  /* @__PURE__ */ jsx("div", { children: "funfando!" }),
  " ",
  /* @__PURE__ */ jsx("div", { children: "funfando!" }),
  " ",
  /* @__PURE__ */ jsx("div", { children: "funfando!" }),
  " ",
  /* @__PURE__ */ jsx("div", { children: "funfando!" }),
  " ",
  /* @__PURE__ */ jsx("div", { children: "funfando!" }),
  " ",
  /* @__PURE__ */ jsx("div", { children: "funfando!" }),
  " ",
  /* @__PURE__ */ jsx("div", { children: "funfando!" }),
  " ",
  /* @__PURE__ */ jsx("div", { children: "funfando!" }),
  " ",
  /* @__PURE__ */ jsx("div", { children: "funfando!" }),
  " ",
  /* @__PURE__ */ jsx("div", { children: "funfando!" }),
  " ",
  /* @__PURE__ */ jsx("div", { children: "funfando!" }),
  " ",
  /* @__PURE__ */ jsx("div", { children: "funfando!" }),
  " ",
  /* @__PURE__ */ jsx("div", { children: "funfando!" }),
  " ",
  /* @__PURE__ */ jsx("div", { children: "funfando!" }),
  " ",
  /* @__PURE__ */ jsx("div", { children: "funfando!" }),
  " ",
  /* @__PURE__ */ jsx("div", { children: "funfando!" }),
  " ",
  /* @__PURE__ */ jsx("div", { children: "funfando!" }),
  " ",
  /* @__PURE__ */ jsx("div", { children: "funfando!" }),
  " ",
  /* @__PURE__ */ jsx("div", { children: "funfando!" }),
  " ",
  /* @__PURE__ */ jsx("div", { children: "funfando!" }),
  " ",
  /* @__PURE__ */ jsx("div", { children: "funfando!" }),
  " ",
  /* @__PURE__ */ jsx("div", { children: "funfando!" }),
  " ",
  /* @__PURE__ */ jsx("div", { children: "funfando!" }),
  " ",
  /* @__PURE__ */ jsx("div", { children: "funfando!" }),
  " ",
  /* @__PURE__ */ jsx("div", { children: "funfando!" }),
  " ",
  /* @__PURE__ */ jsx("div", { children: "funfando!" }),
  " ",
  /* @__PURE__ */ jsx("div", { children: "funfando!" }),
  " ",
  /* @__PURE__ */ jsx("div", { children: "funfando!" }),
  " ",
  /* @__PURE__ */ jsx("div", { children: "funfando!" }),
  " ",
  /* @__PURE__ */ jsx("div", { children: "funfando!" }),
  " ",
  /* @__PURE__ */ jsx("div", { children: "funfando!" }),
  " ",
  /* @__PURE__ */ jsx("div", { children: "funfando!" }),
  " ",
  /* @__PURE__ */ jsx("div", { children: "funfando!" }),
  " ",
  /* @__PURE__ */ jsx("div", { children: "funfando!" }),
  " ",
  /* @__PURE__ */ jsx("div", { children: "funfando!" }),
  " ",
  /* @__PURE__ */ jsx("div", { children: "funfando!" }),
  " ",
  /* @__PURE__ */ jsx("div", { children: "funfando!" }),
  " ",
  /* @__PURE__ */ jsx("div", { children: "funfando!" }),
  " ",
  /* @__PURE__ */ jsx("div", { children: "funfando!" }),
  " ",
  /* @__PURE__ */ jsx("div", { children: "funfando!" }),
  " ",
  /* @__PURE__ */ jsx("div", { children: "funfando!" }),
  " ",
  /* @__PURE__ */ jsx("div", { children: "funfando!" }),
  " ",
  /* @__PURE__ */ jsx("div", { children: "funfando!" }),
  " ",
  /* @__PURE__ */ jsx("div", { children: "funfando!" }),
  " ",
  /* @__PURE__ */ jsx("div", { children: "funfando!" }),
  " ",
  /* @__PURE__ */ jsx("div", { children: "funfando!" }),
  " ",
  /* @__PURE__ */ jsx("div", { children: "funfando!" }),
  " ",
  /* @__PURE__ */ jsx("div", { children: "funfando!" }),
  " ",
  /* @__PURE__ */ jsx("div", { children: "funfando!" }),
  " ",
  /* @__PURE__ */ jsx("div", { children: "funfando!" }),
  " ",
  /* @__PURE__ */ jsx("div", { children: "funfando!" }),
  " ",
  /* @__PURE__ */ jsx("div", { children: "funfando!" }),
  " ",
  /* @__PURE__ */ jsx("div", { children: "funfando!" }),
  " ",
  /* @__PURE__ */ jsx("div", { children: "funfando!" }),
  " ",
  /* @__PURE__ */ jsx("div", { children: "funfando!" }),
  " ",
  /* @__PURE__ */ jsx("div", { children: "funfando!" }),
  " ",
  /* @__PURE__ */ jsx("div", { children: "funfando!" }),
  " ",
  /* @__PURE__ */ jsx("div", { children: "funfando!" }),
  " ",
  /* @__PURE__ */ jsx("div", { children: "funfando!" }),
  " ",
  /* @__PURE__ */ jsx("div", { children: "funfando!" }),
  " ",
  /* @__PURE__ */ jsx("div", { children: "funfando!" }),
  " ",
  /* @__PURE__ */ jsx("div", { children: "funfando!" }),
  " ",
  /* @__PURE__ */ jsx("div", { children: "funfando!" }),
  " ",
  /* @__PURE__ */ jsx("div", { children: "funfando!" }),
  " ",
  /* @__PURE__ */ jsx("div", { children: "funfando!" }),
  " ",
  /* @__PURE__ */ jsx("div", { children: "funfando!" }),
  " ",
  /* @__PURE__ */ jsx("div", { children: "funfando!" }),
  " ",
  /* @__PURE__ */ jsx("div", { children: "funfando!" }),
  " ",
  /* @__PURE__ */ jsx("div", { children: "funfando!" }),
  " ",
  /* @__PURE__ */ jsx("div", { children: "funfando!" }),
  " ",
  /* @__PURE__ */ jsx("div", { children: "funfando!" }),
  " ",
  /* @__PURE__ */ jsx("div", { children: "funfando!" }),
  " ",
  /* @__PURE__ */ jsx("div", { children: "funfando!" }),
  " ",
  /* @__PURE__ */ jsx("div", { children: "funfando!" }),
  " ",
  /* @__PURE__ */ jsx("div", { children: "funfando!" }),
  " ",
  /* @__PURE__ */ jsx("div", { children: "funfando!" }),
  " ",
  /* @__PURE__ */ jsx("div", { children: "funfando!" }),
  " ",
  /* @__PURE__ */ jsx("div", { children: "funfando!" }),
  " ",
  /* @__PURE__ */ jsx("div", { children: "funfando!" }),
  " ",
  /* @__PURE__ */ jsx("div", { children: "funfando!" }),
  " ",
  /* @__PURE__ */ jsx("div", { children: "funfando!" }),
  " ",
  /* @__PURE__ */ jsx("div", { children: "funfando!" }),
  " ",
  /* @__PURE__ */ jsx("div", { children: "funfando!" }),
  " ",
  /* @__PURE__ */ jsx("div", { children: "funfando!" }),
  " ",
  /* @__PURE__ */ jsx("div", { children: "funfando!" }),
  " ",
  /* @__PURE__ */ jsx("div", { children: "funfando!" }),
  " ",
  /* @__PURE__ */ jsx("div", { children: "funfando!" }),
  " ",
  /* @__PURE__ */ jsx("div", { children: "funfando!" }),
  " ",
  /* @__PURE__ */ jsx("div", { children: "funfando!" }),
  " ",
  /* @__PURE__ */ jsx("div", { children: "funfando!" }),
  " ",
  /* @__PURE__ */ jsx("div", { children: "funfando!" }),
  " ",
  /* @__PURE__ */ jsx("div", { children: "funfando!" }),
  " ",
  /* @__PURE__ */ jsx("div", { children: "funfando!" }),
  " ",
  /* @__PURE__ */ jsx("div", { children: "funfando!" }),
  " ",
  /* @__PURE__ */ jsx("div", { children: "funfando!" }),
  " ",
  /* @__PURE__ */ jsx("div", { children: "funfando!" }),
  " ",
  /* @__PURE__ */ jsx("div", { children: "funfando!" }),
  " ",
  /* @__PURE__ */ jsx("div", { children: "funfando!" }),
  " ",
  /* @__PURE__ */ jsx("div", { children: "funfando!" }),
  " ",
  /* @__PURE__ */ jsx("div", { children: "funfando!" }),
  " ",
  /* @__PURE__ */ jsx("div", { children: "funfando!" }),
  " ",
  /* @__PURE__ */ jsx("div", { children: "funfando!" }),
  " ",
  /* @__PURE__ */ jsx("div", { children: "funfando!" }),
  " ",
  /* @__PURE__ */ jsx("div", { children: "funfando!" }),
  " ",
  /* @__PURE__ */ jsx("div", { children: "funfando!" }),
  " ",
  /* @__PURE__ */ jsx("div", { children: "funfando!" }),
  " ",
  /* @__PURE__ */ jsx("div", { children: "funfando!" }),
  " ",
  /* @__PURE__ */ jsx("div", { children: "funfando!" }),
  " ",
  /* @__PURE__ */ jsx("div", { children: "funfando!" }),
  " ",
  /* @__PURE__ */ jsx("div", { children: "funfando!" }),
  " ",
  /* @__PURE__ */ jsx("div", { children: "funfando!" }),
  " ",
  /* @__PURE__ */ jsx("div", { children: "funfando!" }),
  " ",
  /* @__PURE__ */ jsx("div", { children: "funfando!" }),
  " ",
  /* @__PURE__ */ jsx("div", { children: "funfando!" })
] });
const Template = ({ title, Component }) => /* @__PURE__ */ jsxs("main", { children: [
  /* @__PURE__ */ jsx("h1", { style: { marginLeft: "25px" }, children: title }),
  /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsx(Component, {}) })
] });
const AuthContext = createContext({});
const useAuth = () => useContext(AuthContext);
const HeaderMenu = styled.header`
  width: 100%;
  min-height: 3rem;
  display: flex;
  align-items: center;
  position: sticky;
  top: 0;
  z-index: 3;
  background-color: ${({ theme }) => theme.headerBackground};
`;
const Navigation = styled.nav`
  width: 95%;
  min-height: 2rem;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const NavigationItem = styled.div``;
const StyledMenuButton = styled.div`
  & :hover {
    background-color: ${({ theme }) => theme.hoverColor};
    border-radius: 100%;
  }
`;
const StyledMenuIcon = styled(MenuIcon)`
  padding: 0.5rem;
`;
const StyledcloseIcon = styled(CloseIcon)`
  padding: 0.5rem;
  font-size: large;
`;
const LinkNavegation = styled.div`
  padding: 0.5rem;
  background-color: #1976d2;
  border-radius: 5px;

  &:hover {
    background-color: #1565c0;
  }
`;
const StyledLink = styled(Link)`
  text-decoration: none;
  color: white;
  font-family: "Roboto";
  font-size: 17px;
  background-color: transparent;
  padding: 1rem;
`;
const NavigationImg = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 100%;
  padding: 5px;
  object-fit: cover;
  cursor: pointer;
`;
const MainContentStyled = styled.div`
  transition: margin-left 0.8s ease-in-out; // transição suave
  margin-left: ${(props) => props.open ? "12%" : "0"}; /* ou a largura do seu Drawer */
  padding-top: 1rem;
  z-index: 2;

  @media (max-width: 768px) {
    margin-left: 0;
  }
`;
const MenuContainer$1 = styled.section`
    
    min-width: 12%;
  //  width: 12%;
    height: 100%;
    transform: ${({ open }) => open ? "translateX(0)" : "translateX(-100%)"};
    transition: transform 0.3s ease-in-out;
    left: 0;
    position: fixed;
    z-index: 1;
    background-color: ${({ theme }) => theme.background};
    box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;

    @media (max-width: 768px) {
    width: 60%;
  }
    
`;
const MenuItens$1 = styled.div`
    display: flex;
    align-items: center;
    padding: .3rem;
    border-radius: 5px;
    margin: 0 .2rem;

    &:hover {
  
    background: ${({ theme }) => theme.hoverColor};
    cursor: pointer;
    
  }
`;
const ListIcon$1 = styled.div`
    padding:.5rem;
    
`;
const ListText$1 = styled.div`
    padding-left: .5rem;
`;
const BoxMobile = styled.section`
 
  top: 0;
  left: 0;
  position: fixed;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5); /* Semitransparência */
  z-index: 0;
  display: ${({ open }) => open ? "block" : "none"}; /* Só aparece se estiver aberto */
  border: solid red 2px;

  @media (min-width: 769px) {
   
   display: none; 
 }

`;
const Drawer = ({ open }) => {
  const navigate = useNavigate();
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx(BoxMobile, { open }),
    /* @__PURE__ */ jsxs(MenuContainer$1, { open, children: [
      /* @__PURE__ */ jsxs(MenuItens$1, { onClick: () => navigate("/"), children: [
        /* @__PURE__ */ jsx(ListIcon$1, { children: /* @__PURE__ */ jsx(HomeIcon, {}) }),
        /* @__PURE__ */ jsx(ListText$1, { children: "Home" })
      ] }),
      /* @__PURE__ */ jsxs(MenuItens$1, { onClick: () => navigate("/users"), children: [
        /* @__PURE__ */ jsx(ListIcon$1, { children: /* @__PURE__ */ jsx(GroupIcon, {}) }),
        /* @__PURE__ */ jsx(ListText$1, { children: "Users" })
      ] }),
      /* @__PURE__ */ jsxs(MenuItens$1, { onClick: () => navigate("/users/register"), children: [
        /* @__PURE__ */ jsx(ListIcon$1, { children: /* @__PURE__ */ jsx(GroupAddIcon, {}) }),
        /* @__PURE__ */ jsx(ListText$1, { children: "Register" })
      ] })
    ] })
  ] });
};
const ThemeContext = createContext();
const useTheme = () => useContext(ThemeContext);
const MenuContainer = styled$1.section`

min-width: 16%;
height: 80%;
right: 0;
margin-right: 8px;
margin-top: 6px;
position: fixed;
transition: transform 0.3s ease-in-out;
transform: ${({ open }) => open ? "translateX(0)" : "translateX(100%)"};
background-color: ${({ theme }) => theme.backgroundMenu};

border-radius: 12px;
//box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
box-shadow: rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px;


`;
const Menu = styled$1.div`
    display: flex;
    align-items: center;
    justify-content: center;
    border-bottom: solid  #e6e6e6 1px;
    margin: .5rem 0;
   
   
`;
const MenuItens = styled$1.div`
    text-align: center;
   
   

img {
  width: 80px;
  height: 80px;
  border-radius: 50%;
  padding: 5px;
  object-fit:cover;
}

h5{
    padding: 12px 0;
    margin-bottom: 8px;

}

`;
const MenuIcons = styled$1.div`
    display: flex;
    flex-direction: column;
    border-radius: 5px;
    cursor: pointer;
    
    & :hover{
        background: ${({ theme }) => theme.hoverColor};
    }
    
`;
const List = styled$1.div`
 
   padding: 12px 18px;
    display: flex;
    align-items: center;
    border-radius: 8px;
    margin-bottom: 10px; 
`;
const ListIcon = styled$1.div`
    padding-right: 6px;

       
`;
const ListText = styled$1.div`
       
`;
const MenuUser = ({ open, photo, email }) => {
  const { user, setUser } = useAuth();
  const { darkMod, handleMod } = useTheme();
  const navigate = useNavigate();
  const logout = () => {
    setUser({
      logged: false,
      email: "",
      photo: ""
    });
    localStorage.removeItem("user");
    navigate("/login");
  };
  return /* @__PURE__ */ jsxs(MenuContainer, { open, children: [
    /* @__PURE__ */ jsx(Menu, { children: /* @__PURE__ */ jsxs(MenuItens, { children: [
      /* @__PURE__ */ jsx("img", { src: photo }),
      /* @__PURE__ */ jsx("h5", { children: email })
    ] }) }),
    /* @__PURE__ */ jsxs(MenuIcons, { children: [
      /* @__PURE__ */ jsxs(List, { onClick: () => logout(), children: [
        /* @__PURE__ */ jsx(ListIcon, { children: /* @__PURE__ */ jsx(LogoutIcon, {}) }),
        /* @__PURE__ */ jsx(ListText, { children: "Logout" })
      ] }),
      /* @__PURE__ */ jsxs(List, { onClick: () => {
        handleMod();
      }, children: [
        /* @__PURE__ */ jsx(ListIcon, { children: darkMod ? /* @__PURE__ */ jsx(LightModeIcon, {}) : /* @__PURE__ */ jsx(DarkModeIcon, {}) }),
        /* @__PURE__ */ jsx(ListText, { children: "Tema" })
      ] })
    ] })
  ] });
};
const Header = ({ children }) => {
  const [openDrawer, setOpenDrawer] = useState(false);
  const [isMenuOpen, setMenuIsOpen] = useState(false);
  const { user } = useAuth();
  const menuRef = useRef(null);
  const imageRef = useRef(null);
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target) && imageRef.current && !imageRef.current.contains(event.target)) {
        setMenuIsOpen(false);
      }
    };
    if (isMenuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isMenuOpen]);
  const handleOpenDrawer = () => {
    setOpenDrawer(!openDrawer);
  };
  const handleOpenMenuUser = () => {
    setMenuIsOpen((prev) => !prev);
    console.log("MenuUser toggled", !isMenuOpen);
  };
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx(HeaderMenu, { children: /* @__PURE__ */ jsxs(Navigation, { children: [
      /* @__PURE__ */ jsx(NavigationItem, { onClick: () => {
        handleOpenDrawer();
      }, children: /* @__PURE__ */ jsx(StyledMenuButton, { children: openDrawer ? /* @__PURE__ */ jsx(StyledcloseIcon, {}) : /* @__PURE__ */ jsx(StyledMenuIcon, {}) }) }),
      /* @__PURE__ */ jsx(NavigationItem, { children: user.logged ? /* @__PURE__ */ jsx(
        NavigationImg,
        {
          onClick: () => {
            handleOpenMenuUser();
          },
          src: user.photo,
          alt: "User Profile",
          ref: imageRef
        }
      ) : /* @__PURE__ */ jsx(LinkNavegation, { children: /* @__PURE__ */ jsx(StyledLink, { to: "/login", children: "Login" }) }) })
    ] }) }),
    openDrawer && /* @__PURE__ */ jsx(Drawer, { open: openDrawer }),
    isMenuOpen && /* @__PURE__ */ jsx("div", { ref: menuRef, children: /* @__PURE__ */ jsx(
      MenuUser,
      {
        open: isMenuOpen,
        photo: user.photo,
        email: user.email
      }
    ) }),
    /* @__PURE__ */ jsx(MainContentStyled, { open: openDrawer, children })
  ] });
};
const BoxContainer = styled.div`
display: flex;
flex-wrap: wrap;
min-width: 340px;
min-height: 200px;
align-items: center;
margin: 1rem;
border-radius: 15px;
box-shadow: ${({ theme }) => theme.boxShadowCard};
 
&:hover {
    background: ${({ theme }) => theme.hoverCard};
   
 }

`;
const BoxAvatar = styled.div`
margin: .5rem;

img {
    border-radius: 100%;
}
`;
const BoxText = styled.div`
border: solid blue 2px;


h6{
    padding-top: .5rem;
    padding-bottom:.2rem;
}

`;
const BoxIcone = styled.div`
border: solid red 2px;
text-align: center;
margin: 1rem 0;


button {
    margin-left: .5rem;
    cursor: pointer;
    background-color: transparent;
    border: none;
    color: ${({ theme }) => theme.color};
    padding: 6px;

    &:hover {
        background-color:  #1976d2 ;
        border-radius: 100%;
    }
}

`;
const Container$1 = styled.section`
width: 100%;
height: 100%;
transform: ${({ open }) => open ? "translateX(0)" : "translateX(-100%)"};
border: solid red 3px;
z-index: 4;
position: fixed;
background-color: rgba(0, 0, 0, 0.5);
top: 0;
left: 0;
display: flex;
align-items: center;
color:  #ffffff;



`;
const Box = styled.div`
margin: 0 auto;
box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
border-radius: 8px;
padding: 22px;
//background-color: white;
 background-color: #1976d2;



`;
const BoxItens$1 = styled.div`
    h3, h4 {
        padding-bottom: 8px;
       
    }

`;
const ItensButton = styled.div`
display: flex;
justify-content: right;
padding-top: 8px;
`;
const Button = styled.button`
border: none;
background-color: transparent;
padding: 4px;
padding-top: 8px;
margin-left: 15px;
color: #000000;

    &:hover {
        color: red;
        
    }
`;
const Modal = ({ open, title, subtitle, close, onConfirm }) => /* @__PURE__ */ jsx(Container$1, { open, children: /* @__PURE__ */ jsx(Box, { children: /* @__PURE__ */ jsxs(BoxItens$1, { children: [
  /* @__PURE__ */ jsx("h3", { children: title }),
  /* @__PURE__ */ jsx("h4", { children: subtitle }),
  /* @__PURE__ */ jsxs(ItensButton, { children: [
    /* @__PURE__ */ jsx(Button, { onClick: () => onConfirm(), children: "Confirmar" }),
    /* @__PURE__ */ jsx(Button, { onClick: () => close(), children: "Cancelar" })
  ] })
] }) }) });
const Card = ({ id, first_name, last_name, email, avatar, onRemoveCustumer, onEditcustomer }) => {
  const [openModal, setOpenModal] = useState(false);
  const handleOpenModal = () => {
    setOpenModal(!openModal);
  };
  const handleCloseModal = () => {
    setOpenModal(false);
  };
  const handleConfirmModal = (id2) => {
    onRemoveCustumer(id2);
    handleCloseModal();
  };
  const handleEditUser = (id2) => {
    onEditcustomer(id2);
  };
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsxs(BoxContainer, { children: [
      /* @__PURE__ */ jsx(BoxAvatar, { children: /* @__PURE__ */ jsx("img", { src: avatar }) }),
      /* @__PURE__ */ jsxs(BoxText, { children: [
        /* @__PURE__ */ jsx("h6", { children: `${first_name} ${last_name}` }),
        /* @__PURE__ */ jsx("p", { children: email }),
        /* @__PURE__ */ jsxs(BoxIcone, { children: [
          /* @__PURE__ */ jsxs("button", { onClick: () => handleEditUser(id), children: [
            " ",
            /* @__PURE__ */ jsx(EditIcon, {})
          ] }),
          /* @__PURE__ */ jsx("button", { onClick: handleOpenModal, children: /* @__PURE__ */ jsx(DeleteIcon, {}) })
        ] })
      ] })
    ] }),
    openModal && /* @__PURE__ */ jsx(
      Modal,
      {
        open: openModal,
        close: handleCloseModal,
        onConfirm: () => handleConfirmModal(id),
        title: "Deseja realmente Excluir",
        subtitle: "Ao confirmar, você irá apagar definitivamente o usuário"
      }
    )
  ] });
};
const StyledBox = styled.div`
margin: 0 auto;
width: auto;
display: flex;
flex-wrap: wrap;
flex-direction: row;
justify-content:space-between;
`;
const Container = styled.section`
max-width: 95%;
margin: 0 auto;
display: flex;
justify-content: right;
margin-top: 1rem;
`;
const SearchBarWrapper = styled.div`
display: flex;
align-items: center;
border: 1px solid #ccc;
border-radius: 8px;
padding: 0.2rem;
width: 100%;
max-width: 400px;
background-color: #fff;
`;
const StyledInput = styled.input`
border: none;
outline: none;
flex: 1;
padding: 0.5rem;
font-size: 1rem;
`;
const StyledSearchIcon = styled(SearchIcon)`
color: #aaa;
margin-right: 0.5rem;
`;
const Search = ({ value, onChange }) => /* @__PURE__ */ jsx(Container, { children: /* @__PURE__ */ jsxs(SearchBarWrapper, { children: [
  /* @__PURE__ */ jsx(StyledSearchIcon, {}),
  /* @__PURE__ */ jsx(
    StyledInput,
    {
      type: "text",
      placeholder: "Search by name...",
      value,
      onChange
    }
  )
] }) });
const BoxError = styled.section`
    max-width: 90%;
    height: 60vh;
    margin: 0 auto;
    display: flex;
    justify-content: center;
    align-items: center;
   
`;
const ItensError = styled.section`
 min-width: 80%;
 text-align:center;


 h1{
    font-size: 4rem;
    padding-bottom: 1rem;
  
 }

`;
const Error = () => /* @__PURE__ */ jsx(BoxError, { children: /* @__PURE__ */ jsxs(ItensError, { children: [
  /* @__PURE__ */ jsx("h1", { children: " 404 :( " }),
  /* @__PURE__ */ jsx("h6", { children: "Opps! Esta página não pode ser encontrada!" })
] }) });
const Users = () => {
  const [users, setUsers] = useState([]);
  const [error, setError] = useState(null);
  const [search, setSearch] = useState("");
  const navigate = useNavigate();
  useEffect(() => {
    const fetchUsers = async () => {
      try {
        let page = 1;
        let allUsers = [];
        let allPages = 1;
        do {
          const response = await axios.get("https://reqres.in/api/users", { params: { page } });
          const { data, total_pages } = response.data;
          console.log(response.data);
          allUsers = [...allUsers, ...data];
          allPages = total_pages;
          page += 1;
        } while (page <= allPages);
        setUsers(allUsers);
      } catch (error2) {
        setError(error2);
        console.error("Erro ao buscar usuários:", error2);
      }
    };
    fetchUsers();
  }, []);
  const handleSearch = (e) => {
    setSearch(e.target.value);
  };
  const handleRemoveCustomer = (id) => {
    axios.delete(`https://reqres.in/api/users/${id}`).then(() => {
      const newUserState = users.filter((usuarios) => usuarios.id !== id);
      setUsers(newUserState);
    });
  };
  const handleEditUser = (id) => {
    navigate(`/users/edit/${id}`);
  };
  const filteredUsers = users.filter((user) => `${user.first_name}${user.last_name}`.toLowerCase().includes(search.toLowerCase()));
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx(
      Search,
      {
        value: search,
        onChange: handleSearch
      }
    ),
    error ? /* @__PURE__ */ jsx(Error, {}) : /* @__PURE__ */ jsx(StyledBox, { children: filteredUsers.map(
      (user) => /* @__PURE__ */ jsx(
        Card,
        {
          id: user.id,
          first_name: user.first_name,
          last_name: user.last_name,
          email: user.email,
          avatar: user.avatar,
          onRemoveCustumer: handleRemoveCustomer,
          onEditcustomer: handleEditUser
        },
        user.id
      )
    ) }),
    /* @__PURE__ */ jsx("p", { children: "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaa" }),
    /* @__PURE__ */ jsx("p", { children: "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaa" }),
    /* @__PURE__ */ jsx("p", { children: "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaa" }),
    /* @__PURE__ */ jsx("p", { children: "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaa" }),
    /* @__PURE__ */ jsx("p", { children: "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaa" }),
    /* @__PURE__ */ jsx("p", { children: "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaa" }),
    /* @__PURE__ */ jsx("p", { children: "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaa" }),
    /* @__PURE__ */ jsx("p", { children: "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaa" }),
    /* @__PURE__ */ jsx("p", { children: "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaa" }),
    /* @__PURE__ */ jsx("p", { children: "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaa" }),
    /* @__PURE__ */ jsx("p", { children: "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaa" }),
    /* @__PURE__ */ jsx("p", { children: "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaa" }),
    /* @__PURE__ */ jsx("p", { children: "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaa" }),
    /* @__PURE__ */ jsx("p", { children: "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaa" }),
    /* @__PURE__ */ jsx("p", { children: "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaa" }),
    /* @__PURE__ */ jsx("p", { children: "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaa" }),
    /* @__PURE__ */ jsx("p", { children: "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaa" }),
    /* @__PURE__ */ jsx("p", { children: "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaa" }),
    /* @__PURE__ */ jsx("p", { children: "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaa" }),
    /* @__PURE__ */ jsx("p", { children: "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaa" }),
    /* @__PURE__ */ jsx("p", { children: "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaa" })
  ] });
};
const ContainerBox = styled.section`

    transform: ${({ open }) => open ? "translate(-50%, 0)" : "translate(-50%, 100%)"}; // mantém centralizado
    transition: transform 0.3s ease-in-out;
    margin: 0 auto;
    position: fixed;  /* Mantém o SnackBar fixo na tela */
    bottom: 120px;
    left: 50%;
    width: 80%;
    max-width: 400px;
 
    
`;
const BoxItens = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    text-align:center;
    
`;
const Itens = styled.div`
padding: 1rem 2rem;
background-color: #4caf50;
border-radius: 4px;
box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
`;
const TitleItens = styled.h3`
color: #f2fce9;

`;
const SnackBar = ({ open, title }) => /* @__PURE__ */ jsx(ContainerBox, { open, children: /* @__PURE__ */ jsx(BoxItens, { children: /* @__PURE__ */ jsx(Itens, { children: /* @__PURE__ */ jsx(TitleItens, { children: title }) }) }) });
const FormContainer$2 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.backgroundForm};
  border-radius: 8px;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  max-width: 50%;
  margin: 0 auto;
  margin-top: 5rem;
  padding: 20px 0px;
  overflow: hidden;

  @media (max-width: 768px) {
    max-width: 100%;
    margin-top: 2rem;
    box-shadow: none;
  }

  @media (orientation: landscape) and (max-width: 900px) {
    box-shadow: none;
    max-width: 60%;
  }
`;
const Title$1 = styled.h2`
  font-family: "Faculty Glyphic", sans-serif;
  font-weight: 400;
  font-style: normal;
  font-size: 2rem;
  color: #1976d2;
  margin-bottom: 2rem;
`;
const InputContainer$2 = styled.div`
  min-width: 40%;
  margin: 18px 0;
  position: relative;

  @media (max-width: 900px) {
    width: 90%;
  }
`;
const InputField$2 = styled.input`
  width: calc(100% - 20px);
  max-width: 100%;
  height: 38px;
  padding: 15px 15px 15px 55px;
  border: 1px solid #ccc;
  transition: all 0.3s ease;
  border-radius: 4px;
  font-size: 16px;
  background-color: ${({ theme }) => theme.backgroundForm}; 
  color: ${({ theme }) => theme.color};
 

  @media (max-width: 768px) {
    max-width: 80%;
  }

  @media (orientation: landscape) {
    width: 80%;
  }

  &:focus {
    outline: none; /* Remove o padrão do navegador */
    border: 1px solid #1565c0; 
    box-shadow: 0 0 5px rgba(21, 101, 192, 0.7); 
    background-color: ${({ theme }) => theme.backgroundForm}; 
    color: ${({ theme }) => theme.color};
  }
`;
const SaveButton$2 = styled.button`
  padding: 18px 120px;
  border: none;
  border-radius: 12px;
  background-color: #1976d2;
  color: white;
  font-size: 18px;
  cursor: pointer;

  margin: 2rem 0;

  &:hover {
    background-color: #1565c0;
  }
`;
const AccountIcon$1 = styled(AccountCircleIcon)`
  && {
    font-size: 40px;
    color: #1976d2;
  }
`;
const MailIcon$1 = styled(EmailIcon)`
  && {
    font-size: 40px;
    color: #1976d2;
  }
`;
const IconContainer$1 = styled.div`
  position: absolute;
  top: 50%;
  left: 3%; 
  transform: translateY(-50%);
`;
const Register = () => {
  const [form, setForm] = useState({ name: "", email: "" });
  const [openSnackBar, setOpenSnackBar] = useState(false);
  const [snackBarMessage, setSnackBarMessage] = useState("");
  const navigate = useNavigate();
  const msgSnackBar = (message) => {
    setSnackBarMessage(message);
    setOpenSnackBar(true);
    setTimeout(() => {
      setOpenSnackBar(false);
    }, 4e3);
  };
  const finishLogin = (sucess = true) => {
    if (sucess) {
      msgSnackBar(`Usuário ${form.name} Cadastrado com Sucesso!`);
      setTimeout(() => {
        navigate("/users");
      }, 5e3);
    } else {
      msgSnackBar("Algo Deu Errado");
    }
  };
  const validateForm = () => {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!form.name.trim() || !form.email.trim()) {
      msgSnackBar("Nome e email são obrigatórios");
      return false;
    }
    if (!emailPattern.test(form.email)) {
      msgSnackBar("Por favor, insira um email válido! ex: jhonathan@gmail.com");
      return false;
    }
    return true;
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validateForm()) return;
    axios.post("https://reqres.in/api/users", form).then(() => {
      finishLogin();
    }).catch((error) => {
      console.log(error);
      finishLogin(false);
    });
  };
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsxs(FormContainer$2, { as: "form", children: [
      /* @__PURE__ */ jsx(Title$1, { children: "Cadastrar Usuário" }),
      /* @__PURE__ */ jsxs(InputContainer$2, { children: [
        /* @__PURE__ */ jsx(IconContainer$1, { children: /* @__PURE__ */ jsx(AccountIcon$1, {}) }),
        /* @__PURE__ */ jsx(
          InputField$2,
          {
            placeholder: "Digite seu Nome",
            type: "text",
            id: "name",
            name: "name",
            value: form.name,
            onChange: handleInputChange,
            required: true
          }
        )
      ] }),
      /* @__PURE__ */ jsxs(InputContainer$2, { children: [
        /* @__PURE__ */ jsx(IconContainer$1, { children: /* @__PURE__ */ jsx(MailIcon$1, {}) }),
        /* @__PURE__ */ jsx(
          InputField$2,
          {
            placeholder: "Cadastre seu Email",
            type: "email",
            id: "email",
            name: "email",
            value: form.email,
            onChange: handleInputChange,
            required: true
          }
        )
      ] }),
      /* @__PURE__ */ jsx(SaveButton$2, { onClick: handleSubmit, children: "Cadastrar" })
    ] }),
    openSnackBar && /* @__PURE__ */ jsx(SnackBar, { title: snackBarMessage })
  ] });
};
const FormContainer$1 = styled.div`
  display: flex;
  max-width: 40%;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: 20px 0px;
  background-color: ${({ theme }) => theme.backgroundForm};
  border-radius: 8px;
  box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
  margin: 0 auto;
  margin-top: 5rem;
  overflow: hidden; // cortar conteudo se passar
  

  @media (max-width: 768px) {
    max-width: 100%;
    margin-top: 2rem;
    background-color: #ffffff;
   
  }

  @media (orientation: landscape) and (max-width: 900px) {
    box-shadow: none;
    max-width: 60%;
   
  }


`;
const Title = styled.h2`
  font-family: "Faculty Glyphic", sans-serif;
  font-weight: 400;
  font-style: normal;
  font-size: 2rem;
  color: #1976d2;
  margin-bottom: 2rem;
`;
const InputContainer$1 = styled.div`
  min-width: 40%;
  margin-bottom: 1rem;
  position: relative; // p/ Icone
  
  @media (max-width: 900px) {
    width: 90%;
  }

`;
const InputField$1 = styled.input`
  width: calc(100% - 20px);
  max-width: 100%;
  height: 38px;
  padding: 15px 15px 15px 50px; /* Espaço à esquerda para o ícone */
  margin-bottom: 20px;
  border: 2px solid ${(props) => props.error ? "#d23a2d" : "#1a1a1a"};
  border-radius: 8px;
  background-color: ${({ theme }) => theme.backgroundForm}; 
  color: ${({ theme }) => theme.color};
 

  @media (max-width: 768px) {
    max-width: 80%;
  }

  @media (orientation: landscape) {
    width: 80%;
   
  }


  &:focus {
    outline: none;
    border: 2px solid ${(props) => props.error ? "#d23a2d" : "#1a1a1a"};
  }
`;
const SaveButton$1 = styled.button`
  padding: 18px 120px;
  border: none;
  border-radius: 12px;
  background-color: #1976d2;
  color: white;
  font-size: 18px;
  cursor: pointer;
  margin-bottom: 2rem;

  &:hover {
    background-color: #1565c0;
  }
`;
const HiddenFileInput = styled.input`
  display: none;
`;
const UploadIconContainer = styled.div`
  cursor: pointer;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 10px;
`;
const InputLabel$1 = styled.label`
  display: block;
  margin-bottom: 5px;
  color: #333;
  font-size: 18px;
  font-family: "Faculty Glyphic", sans-serif;
`;
const UploadIcon = styled(CloudUploadIcon)`
  && {
    font-size: 60px;
    color: #1976d2;
  }

  &&:hover {
    color: #1565c0;
  }
`;
const AccountIcon = styled(AccountCircleIcon)`
  && {
    font-size: 40px;
    color: #1976d2;
  }
`;
const MailIcon = styled(EmailIcon)`
  && {
    font-size: 40px;
    color: #1976d2;
  }
`;
const IconContainer = styled.div`
  position: absolute;
  top: 50%;
  left: 3%; /* Usar porcentagem para ajustar dinamicamente */
  transform: translateY(-70%);
`;
const Login = () => {
  const [form, setForm] = useState({
    email: "",
    password: "",
    photo: ""
  });
  const { user, setUser } = useAuth();
  const navigate = useNavigate();
  const [openSnackBar, setOpenSnackBar] = useState(false);
  const [errors, setErrors] = useState({ email: false, password: false });
  const [file, setFile] = useState(null);
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value
    });
    if (name === "password") {
      const isValid = e.target.validity.valid;
      setErrors({
        ...errors,
        password: !isValid
      });
    } else if (name === "email") {
      setErrors({
        ...errors,
        email: !e.target.validity.valid
      });
    }
  };
  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };
  const triggerFileUpload = () => {
    document.getElementById("fileUpload").click();
  };
  const finishLogin = () => {
    setOpenSnackBar(true);
    setTimeout(() => {
      navigate("/");
    }, 4e3);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!e.target.checkValidity()) {
      e.target.reportValidity();
      return;
    }
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const userData = {
          logged: true,
          email: form.email,
          photo: reader.result
        };
        localStorage.setItem("user", JSON.stringify(userData));
        setUser(userData);
      };
      reader.readAsDataURL(file);
      finishLogin();
    }
  };
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsxs(FormContainer$1, { as: "form", onSubmit: handleSubmit, children: [
      /* @__PURE__ */ jsx(Title, { children: "Login" }),
      /* @__PURE__ */ jsxs(InputContainer$1, { children: [
        /* @__PURE__ */ jsx(IconContainer, { children: /* @__PURE__ */ jsx(AccountIcon, {}) }),
        /* @__PURE__ */ jsx(
          InputField$1,
          {
            placeholder: "Digite seu Email",
            type: "email",
            id: "email",
            name: "email",
            onChange: handleInputChange,
            error: errors.email,
            required: true
          }
        )
      ] }),
      /* @__PURE__ */ jsxs(InputContainer$1, { children: [
        /* @__PURE__ */ jsx(IconContainer, { children: /* @__PURE__ */ jsx(MailIcon, {}) }),
        /* @__PURE__ */ jsx(
          InputField$1,
          {
            placeholder: "Digite sua Senha",
            type: "password",
            id: "password",
            name: "password",
            onChange: handleInputChange,
            error: errors.password,
            required: true
          }
        )
      ] }),
      /* @__PURE__ */ jsxs(InputContainer$1, { children: [
        /* @__PURE__ */ jsxs(UploadIconContainer, { onClick: triggerFileUpload, children: [
          /* @__PURE__ */ jsx(UploadIcon, {}),
          /* @__PURE__ */ jsx(InputLabel$1, { children: "Upload Imagem" })
        ] }),
        /* @__PURE__ */ jsx(
          HiddenFileInput,
          {
            type: "file",
            id: "fileUpload",
            accept: "image/*",
            onChange: handleFileChange,
            required: true
          }
        )
      ] }),
      /* @__PURE__ */ jsx(SaveButton$1, { type: "submit", children: "Sign In" })
    ] }),
    openSnackBar && /* @__PURE__ */ jsx(
      SnackBar,
      {
        open: openSnackBar,
        title: "Login afetuado com sucesso!"
      }
    )
  ] });
};
const ProtectRoute = ({ children }) => {
  const { user } = useAuth();
  const navigate = useNavigate();
  const [openSnackBar, setOpenSnackBar] = useState(false);
  useEffect(() => {
    if (!user.logged) {
      setOpenSnackBar(true);
      setTimeout(() => {
        navigate("/login");
      }, 5e3);
    }
  }, [user, navigate]);
  return /* @__PURE__ */ jsx(Fragment, { children: !user.logged ? openSnackBar && /* @__PURE__ */ jsx(SnackBar, { title: "Você precisa estar logado para acessar essa página..." }) : /* @__PURE__ */ jsx(Fragment, { children }) });
};
const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px;
  background-color: #f9f9f9;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  max-width: 80%;
  margin: 0 auto;
  margin-top: 5rem;
 
`;
const InputContainer = styled.div`
  min-width: 40%;
  margin-bottom: 20px;
`;
const InputField = styled.input`
  width: calc(100% - 20px);
  padding: 15px;
  margin-bottom: 20px; 
  border: solid  #1976d2 1px;
  border-radius: 4px;
  font-size: 16px;


  &:focus {
    outline: none;
    border: 2px solid  #1565c0;
  }
`;
const SaveButton = styled.button`
  padding: 15px 30px;
  border: none;
  border-radius: 4px;
  background-color: #1976d2;
  color: white;
  font-size: 16px;
  cursor: pointer;
  &:hover {
    background-color: #1565c0;
  }
`;
const InputLabel = styled.label`
  display: block;
  margin-bottom: 5px;
  color: #333;
  font-size: 16px;
`;
const Edit = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [form, setForm] = useState({ name: "", email: "" });
  const [originalName, setOriginalName] = useState("");
  const [openSnackBar, setOpenSnackBar] = useState(false);
  const [snackBarMessage, setSnackBarMessage] = useState("");
  useEffect(() => {
    axios.get(`https://reqres.in/api/users/${id}`).then((response) => {
      const { data } = response.data;
      setForm({ name: `${data.first_name} ${data.last_name}`, email: data.email });
      setOriginalName(`${data.first_name} ${data.last_name}`);
    }).catch((error) => {
      showSnackBar("Ocorreu um erro na API");
      console.log("Error: ", error);
    });
  }, [id]);
  const showSnackBar = (message) => {
    setSnackBarMessage(message);
    setOpenSnackBar(true);
    setTimeout(() => setOpenSnackBar(false), 5e3);
  };
  const handleFinishEdit = (sucess = true) => {
    if (sucess) {
      setTimeout(() => navigate("/users"), 5e3);
    }
  };
  const validateForm = () => {
    if (!form.name.trim() || !form.email.trim()) {
      showSnackBar("Nome e email são obrigatórios");
      return false;
    }
    return true;
  };
  const handleAdd = (e) => {
    e.preventDefault();
    if (!validateForm()) return;
    axios.put(`https://reqres.in/api/users/${id}`, {
      name: form.name,
      email: form.email
    }).then((response) => {
      console.log("Usuário atualizado com sucesso:", response.data);
      showSnackBar(`Sucesso! ${originalName} foi modificado para ${form.name}`);
      handleFinishEdit();
    }).catch((error) => {
      showSnackBar("Erro ao atualizar usuário");
      console.log(error);
      handleFinishEdit(false);
    });
  };
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsxs(FormContainer, { as: "form", onSubmit: handleAdd, children: [
      /* @__PURE__ */ jsxs(InputContainer, { children: [
        /* @__PURE__ */ jsx(InputLabel, { children: "Editar Nome" }),
        /* @__PURE__ */ jsx(
          InputField,
          {
            type: "text",
            id: "name",
            name: "name",
            value: form.name,
            onChange: handleInputChange
          }
        )
      ] }),
      /* @__PURE__ */ jsxs(InputContainer, { children: [
        /* @__PURE__ */ jsx(InputLabel, { children: "Editar Email" }),
        /* @__PURE__ */ jsx(
          InputField,
          {
            type: "email",
            id: "email",
            name: "email",
            value: form.email,
            onChange: handleInputChange
          }
        )
      ] }),
      /* @__PURE__ */ jsx(SaveButton, { type: "submit", children: "Salvar" })
    ] }),
    openSnackBar && /* @__PURE__ */ jsx(SnackBar, { title: snackBarMessage })
  ] });
};
function App() {
  return /* @__PURE__ */ jsx(HashRouter, { children: /* @__PURE__ */ jsxs(Routes, { children: [
    /* @__PURE__ */ jsx(Route, { path: "/", element: /* @__PURE__ */ jsx(Header, { children: /* @__PURE__ */ jsx(Template, { title: "Home", Component: Home }) }) }),
    /* @__PURE__ */ jsx(Route, { path: "/users", element: /* @__PURE__ */ jsx(Header, { children: /* @__PURE__ */ jsx(ProtectRoute, { children: /* @__PURE__ */ jsx(Template, { title: "Adm Usuários", Component: Users }) }) }) }),
    /* @__PURE__ */ jsx(Route, { path: "/users/edit/:id", element: /* @__PURE__ */ jsx(Header, { children: /* @__PURE__ */ jsx(ProtectRoute, { children: /* @__PURE__ */ jsx(Template, { title: "Editar Usuário", Component: Edit }) }) }) }),
    /* @__PURE__ */ jsx(Route, { path: "/users/register", element: /* @__PURE__ */ jsx(Header, { children: /* @__PURE__ */ jsx(ProtectRoute, { children: /* @__PURE__ */ jsx(Template, { title: "", Component: Register }) }) }) }),
    /* @__PURE__ */ jsx(Route, { path: "/login", element: /* @__PURE__ */ jsx(Template, { title: "", Component: Login }) })
  ] }) });
}
function render(url, ssrManifest, options) {
  return renderToPipeableStream(
    /* @__PURE__ */ jsx(React.StrictMode, { children: /* @__PURE__ */ jsx(App, {}) }),
    options
  );
}
export {
  render
};
