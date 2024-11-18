
import { MenuContainer, MenuItens, ListText, ListIcon, BoxMobile} from "./style/style"
import HomeIcon from '@mui/icons-material/Home';
import GroupIcon from '@mui/icons-material/Group';
import GroupAddIcon from '@mui/icons-material/GroupAdd';

import { useNavigate } from "react-router-dom";

export const Drawer = ({open}) => {

   const navigate = useNavigate() 

    return (
        <>
        <BoxMobile open= {open} />
        <MenuContainer open= {open}> 
           
            <MenuItens onClick={() => navigate('/')}>
                <ListIcon><HomeIcon/></ListIcon>
                <ListText>Home</ListText>
            </MenuItens>

            <MenuItens onClick={() => navigate('/users')}>
                <ListIcon><GroupIcon/></ListIcon>
                <ListText>Users</ListText>
            </MenuItens>
            
            <MenuItens onClick={() => navigate('/users/register')}>
                <ListIcon><GroupAddIcon/></ListIcon>
                <ListText>Register</ListText>
            </MenuItens>
            

        </MenuContainer>
        </>
        
        
    )
}