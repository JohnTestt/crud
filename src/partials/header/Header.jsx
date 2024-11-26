import { useState, useEffect, useRef } from "react"
import { useAuth } from "../../contexts/state/auth/auth"

import { HeaderMenu, Navigation, NavigationItem, StyledMenuButton, StyledMenuIcon, StyledcloseIcon, MainContentStyled, StyledLink, LinkNavegation, NavigationImg } from "./style/style"
import { Drawer } from "../../components/Drawer/Drawer"
import { MenuUser } from "../../components/MenuUser/MenuUser"



export const Header = ({ children }) => {

  const [openDrawer, setOpenDrawer] = useState(false)
  const [isMenuOpen, setMenuIsOpen] = useState(false)
  const { user } = useAuth()
  const menuRef = useRef(null);
  const imageRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {

      if (
        menuRef.current &&
        !menuRef.current.contains(event.target) &&
        imageRef.current &&
        !imageRef.current.contains(event.target)
      ) {
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
    setOpenDrawer(!openDrawer)
  }

  const handleOpenMenuUser = () => {
    setMenuIsOpen((prev) => !prev);
    console.log("MenuUser toggled", !isMenuOpen);
  };

  return (
    <>
      <HeaderMenu>
        <Navigation>
          <NavigationItem onClick={() => { handleOpenDrawer() }}>
            <StyledMenuButton>
              {
              openDrawer ? <StyledcloseIcon /> : <StyledMenuIcon />
              }
            </StyledMenuButton>
          </NavigationItem>

          <NavigationItem>
            {
              user.logged
                ? (
                  <NavigationImg onClick={() => { handleOpenMenuUser() }}
                    src={user.photo}
                    alt="User Profile"
                    ref={imageRef} // Referência adicionada à imagem 
                  />
                )
                : <LinkNavegation>
                  <StyledLink to='/login'>Login</StyledLink>
                </LinkNavegation>
            }

          </NavigationItem>
        </Navigation>
      </HeaderMenu>

      {openDrawer && <Drawer open={openDrawer} />} 

      {isMenuOpen && (
        <div ref={menuRef}>
          <MenuUser
            open={isMenuOpen}
            photo={user.photo}
            email={user.email}
          />
        </div>

      )
      }

      <MainContentStyled open={openDrawer} >
        {children}
      </MainContentStyled >

    </>



  )
}