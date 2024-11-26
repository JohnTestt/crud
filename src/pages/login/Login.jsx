import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import {
    FormContainer,
    InputField,
    SaveButton,
    InputContainer,
    InputLabel,
    HiddenFileInput,
    UploadIconContainer,
    UploadIcon,
    IconContainer,
    AccountIcon,
    MailIcon,
    Title

} from './style/style';


import { useAuth } from '../../contexts/state/auth/auth.jsx';
import { SnackBar } from '../../components/SnackBar/SnackBar.jsx';

export const Login = () => {

    const [form, setForm] = useState({
        email: '',
        password: '',
        photo: ''
    });

    const { user, setUser } = useAuth();
    const navigate = useNavigate()
    const [openSnackBar, setOpenSnackBar] = useState(false);
    const [errors, setErrors] = useState({ email: false, password: false }); // mudar cor input
    const [file, setFile] = useState(null);

    const handleInputChange = (e) => {
        const { name, value } = e.target
        setForm({
            ...form,
            [name]: value,
        })

        //validação erros
        if (name === 'password') {
            const isValid = e.target.validity.valid;
            setErrors({
                ...errors,
                password: !isValid
            });
        } else if (name === 'email') {
            // Adicione lógica de validação para o email, se necessário
            setErrors({
                ...errors,
                email: !e.target.validity.valid
            });
        }
    }

    const handleFileChange = (e) => {
        setFile(e.target.files[0]);
    };

    const triggerFileUpload = () => {
        document.getElementById('fileUpload').click(); // Dispara o input de arquivo
    };

    const finishLogin = () => {

        setOpenSnackBar(true)

        setTimeout(() => {
            navigate('/')
        }, 4000);

    }


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

                localStorage.setItem('user', JSON.stringify(userData));

                setUser(userData);

            };
            reader.readAsDataURL(file)
            finishLogin();
        };


    }

    return (

        <>
            <FormContainer as='form' onSubmit={handleSubmit}>
                <Title>Login</Title>
                <InputContainer>
                    <IconContainer>
                        < AccountIcon />
                    </IconContainer>
                    <InputField
                        placeholder='Digite seu Email'
                        type="email"
                        id="email"
                        name="email"
                        onChange={handleInputChange}
                        error={errors.email}  // Passando o erro para o styled component
                        required
                    />
                </InputContainer>

                <InputContainer>
                    <IconContainer>
                        < MailIcon />
                    </IconContainer>
                    <InputField
                        placeholder='Digite sua Senha'
                        type="password"
                        id="password"
                        name="password"
                        onChange={handleInputChange}
                        error={errors.password}
                        required
                    />
                </InputContainer>

                <InputContainer>
                    <UploadIconContainer onClick={triggerFileUpload}>
                        <UploadIcon />
                        <InputLabel>Upload Imagem</InputLabel>
                    </UploadIconContainer>
                    <HiddenFileInput
                        type="file"
                        id="fileUpload"
                        accept="image/*"
                        onChange={handleFileChange}
                        required
                    />
                </InputContainer>

                <SaveButton type='submit' >Sign In</SaveButton>
            </FormContainer>

            {
                openSnackBar &&
                <SnackBar
                    open={openSnackBar}
                    title='Login afetuado com sucesso!'
                />
            }

        </>



    )
}