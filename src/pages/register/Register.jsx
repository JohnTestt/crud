import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

import { SnackBar } from '../../components/SnackBar/SnackBar';

import {
    FormContainer,
    InputField,
    SaveButton,
    InputContainer,
    IconContainer,
    AccountIcon,
    MailIcon,
    Title
} from './style/style';

export const Register = () => {

    const [form, setForm] = useState({ name: '', email: '' });
    const [openSnackBar, setOpenSnackBar] = useState(false);
    const [snackBarMessage, setSnackBarMessage] = useState('');

    const navigate = useNavigate()

    const msgSnackBar = (message) => {
        setSnackBarMessage(message)
        setOpenSnackBar(true)
        setTimeout(() => {
            setOpenSnackBar(false)
        }, 4000)

    };

    const finishLogin = (sucess = true) => { 
        if (sucess) {

            msgSnackBar(`Usuário ${form.name} Cadastrado com Sucesso!`)
            setTimeout(() => {
                navigate('/users')
            }, 5000)
        }
        else {

            msgSnackBar('Algo Deu Errado')
        }
    }

    const validateForm = () => {
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!form.name.trim() || !form.email.trim()) {
            msgSnackBar('Nome e email são obrigatórios');
            return false;
        }

        if (!emailPattern.test(form.email)) {
            msgSnackBar('Por favor, insira um email válido! ex: jhonathan@gmail.com');
            return false;
        }

        return true;
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!validateForm()) return;

        axios.post('https://reqres.in/api/users', form)

            .then(() => {
                finishLogin();
            })
            .catch((error) => {
                console.log(error)
                finishLogin(false);
            })
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setForm({ ...form, [name]: value });
    };


    return (
        <>
            <FormContainer as='form'>
                <Title>Cadastrar Usuário</Title>
               
                <InputContainer>
                    <IconContainer>
                        < AccountIcon />
                    </IconContainer>
                    <InputField
                        placeholder='Digite seu Nome'
                        type="text"
                        id="name"
                        name="name"
                        value={form.name}
                        onChange={handleInputChange}
                        required
                    />
                </InputContainer>

                <InputContainer>
                    <IconContainer>
                        < MailIcon />
                    </IconContainer>
                    <InputField
                        placeholder='Cadastre seu Email'
                        type="email"
                        id="email"
                        name="email"
                        value={form.email}
                        onChange={handleInputChange}
                        required
                    />
                </InputContainer>

                <SaveButton onClick={handleSubmit}>Cadastrar</SaveButton>
            </FormContainer>

            {
                openSnackBar && <SnackBar title={snackBarMessage} />
            }
        </>
    )
}