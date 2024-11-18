import { useState } from "react";

import {BoxContainer, BoxAvatar, BoxText, BoxIcone } from "./style/style"
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { Modal } from "../Modal/Modal";

export const  Card = ({id, first_name, last_name, email, avatar, onRemoveCustumer,  onEditcustomer}) => {

    const [openModal, setOpenModal] = useState(false);
  

    const handleOpenModal = () => {
        setOpenModal(!openModal)
    };

    const handleCloseModal = () => {
        setOpenModal(false)
    };

    const handleConfirmModal = (id) => {
        onRemoveCustumer(id)
        handleCloseModal()
        
    };
    
   
    const handleEditUser = (id) => {
        onEditcustomer(id)
        };

    return (
        
        <>
        
        <BoxContainer>
            <BoxAvatar> 
                <img src={avatar}/>
            </BoxAvatar>
            <BoxText>
                <h6>{`${first_name} ${last_name}`}</h6>
                <p>{email}</p>
                <BoxIcone>
                <button onClick={() => handleEditUser(id)}> <EditIcon/></button>
                <button onClick={handleOpenModal}><DeleteIcon/></button>
            </BoxIcone>
            </BoxText>
           

        </BoxContainer>  
            {
                openModal && 
                <Modal
                open = {openModal}
                close = {handleCloseModal}
                onConfirm = {() => handleConfirmModal(id)}
                title = 'Deseja realmente Excluir'
                subtitle = 'Ao confirmar, você irá apagar definitivamente o usuário'
                />
            }
        
        </>
        
    )

}