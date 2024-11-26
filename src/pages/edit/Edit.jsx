import { useParams } from "react-router-dom"
import axios from "axios"
import { useEffect, useState } from "react"
import { SnackBar } from "../../components/SnackBar/SnackBar";
import { useNavigate } from "react-router-dom";
import { FormInput } from "../../components/FormInput/FormInput";

import {
    FormContainer,
    SaveButton,

} from './style/style';

import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import EmailIcon from "@mui/icons-material/Email";

export const Edit = () => {

    const { id } = useParams()
    const navigate = useNavigate()

    const [form, setForm] = useState({ name: '', email: '' });
    const [originalName, setOriginalName] = useState('');
    const [openSnackBar, setOpenSnackBar] = useState(false);
    const [snackBarMessage, setSnackBarMessage] = useState('');

    useEffect(() => {

        axios.get(`https://reqres.in/api/users/${id}`)
            .then(response => {
                const { data } = response.data;
                setForm({ name: `${data.first_name} ${data.last_name}`, email: data.email })

                setOriginalName(`${data.first_name} ${data.last_name}`);

            })
            .catch((error) => {
                showSnackBar('Ocorreu um erro na API')
                console.log('Error: ', error)
            })
    }, [id]);

    const showSnackBar = (message) => {
        setSnackBarMessage(message);
        setOpenSnackBar(true);
        setTimeout(() => setOpenSnackBar(false), 5000);
    };

    const handleFinishEdit = (sucess = true) => {
        if (sucess) {
            setTimeout(() => navigate('/users'), 5000);
        }
    };

    const validateForm = () => {
        if (!form.name.trim() || !form.email.trim()) {
            showSnackBar('Nome e email são obrigatórios')
            return false;
        }
        return true;
    };

    const handleAdd = (e) => {
        e.preventDefault();

        if (!validateForm()) return;

        axios.put(`https://reqres.in/api/users/${id}`, {
            name: form.name,
            email: form.email,
        })
            .then((response) => {
                console.log("Usuário atualizado com sucesso:", response.data);
                showSnackBar(`Sucesso! ${originalName} foi modificado para ${form.name}`)
                handleFinishEdit(); // Sucesso
            })
            .catch((error) => {
                showSnackBar('Erro ao atualizar usuário')
                console.log(error)
                handleFinishEdit(false);
            });
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target

        setForm({ ...form, [name]: value });
    };

    return (
        <>
            <FormContainer as='form' onSubmit={handleAdd}>

                <FormInput
                    placeholder='Digite seu Nome'
                    type="text"
                    id="name"
                    name="name"
                    value={form.name}
                    onChange={handleInputChange}
                    icon={AccountCircleIcon}
                />

                <FormInput
                    placeholder="Cadastre seu Email"
                    type="email"
                    id="email"
                    name="email"
                    value={form.email}
                    onChange={handleInputChange}
                    icon={EmailIcon}
                />

                <SaveButton type='submit'>Salvar</SaveButton>
            </FormContainer>

            {openSnackBar && <SnackBar title={snackBarMessage} />}
        </>
    )
}