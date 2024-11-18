
import {useEffect, useState} from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/state/auth/auth';
import { SnackBar } from '../components/SnackBar/SnackBar';

export const ProtectRoute = ({children}) => {

    const {user} = useAuth();
    const navigate = useNavigate();
    const [openSnackBar, setOpenSnackBar] = useState(false); 

    useEffect(() => {
        if(!user.logged) {
            setOpenSnackBar(true); 

            setTimeout(() => {
               navigate('/login')
            }, 5000);
        };

    },[user, navigate]);

    return (
        <>
        {
        !user.logged 
        ? openSnackBar &&  <SnackBar title = 'Você precisa estar logado para acessar essa página...'/>
        : <>{children}</>
}
       
        </>
    )

}