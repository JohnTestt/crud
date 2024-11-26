import { useAuth } from "../../contexts/state/auth/auth"
import { useTheme } from "../../contexts/theme/ThemeContext";
import { useState } from "react"
import { useNavigate } from 'react-router-dom';

import { MenuContainer, MenuItens, Menu, MenuIcons, List, ListIcon, ListText } from './style/style'
import LogoutIcon from '@mui/icons-material/Logout';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';

export const MenuUser = ({ open, photo, email }) => {

    const {user, setUser} = useAuth();
    const { darkMod, handleMod } = useTheme();
    const navigate = useNavigate();

    const logout = () => {
               
                setUser({
                    logged: false, 
                    email: '',
                    photo: ''
                });
            localStorage.removeItem('user');

                navigate('/login');
    }
  
  return (
    <MenuContainer open = {open}>
    <Menu>
        <MenuItens>
            <img src={photo} />
            <h5>{email}</h5>
        </MenuItens>
    </Menu>

    <MenuIcons>
    <List onClick={() => logout()}>
            <ListIcon><LogoutIcon/></ListIcon>
            <ListText>Logout</ListText>
        </List>
              
        <List onClick={() => {handleMod()}}>
            <ListIcon>
                { darkMod  ? <LightModeIcon/> : <DarkModeIcon/> }
            </ListIcon>
            <ListText>Tema</ListText>
        </List>
    </MenuIcons>

</MenuContainer>
  )
}

   
