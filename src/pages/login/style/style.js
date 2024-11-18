import styled from "styled-components";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import EmailIcon from "@mui/icons-material/Email";

export const FormContainer = styled.div`
  display: flex;
  max-width: 40%;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: 20px 0px;
  background-color: ${({ theme }) => theme. backgroundForm};
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

export const Title = styled.h2`
  font-family: "Faculty Glyphic", sans-serif;
  font-weight: 400;
  font-style: normal;
  font-size: 2rem;
  color: #1976d2;
  margin-bottom: 2rem;
`;

export const InputContainer = styled.div`
  min-width: 40%;
  margin-bottom: 1rem;
  position: relative; // p/ Icone
  
  @media (max-width: 900px) {
    width: 90%;
  }

`;

export const InputField = styled.input`
  width: calc(100% - 20px);
  max-width: 100%;
  height: 38px;
  padding: 15px 15px 15px 50px; /* Espaço à esquerda para o ícone */
  margin-bottom: 20px;
  border: 2px solid ${(props) => (props.error ? "#d23a2d" : "#1a1a1a")};
  border-radius: 8px;
  background-color: ${({ theme }) => theme.backgroundForm}; 
  color: ${({theme}) => theme.color};
 

  @media (max-width: 768px) {
    max-width: 80%;
  }

  @media (orientation: landscape) {
    width: 80%;
   
  }


  &:focus {
    outline: none;
    border: 2px solid ${(props) => (props.error ? "#d23a2d" : "#1a1a1a")};
  }
`;

export const SaveButton = styled.button`
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

export const HiddenFileInput = styled.input`
  display: none;
`;

export const UploadIconContainer = styled.div`
  cursor: pointer;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 10px;
`;
export const InputLabel = styled.label`
  display: block;
  margin-bottom: 5px;
  color: #333;
  font-size: 18px;
  font-family: "Faculty Glyphic", sans-serif;
`;

export const UploadIcon = styled(CloudUploadIcon)`
  && {
    font-size: 60px;
    color: #1976d2;
  }

  &&:hover {
    color: #1565c0;
  }
`;
export const AccountIcon = styled(AccountCircleIcon)`
  && {
    font-size: 40px;
    color: #1976d2;
  }
`;
export const MailIcon = styled(EmailIcon)`
  && {
    font-size: 40px;
    color: #1976d2;
  }
`;

export const IconContainer = styled.div`
  position: absolute;
  top: 50%;
  left: 3%; /* Usar porcentagem para ajustar dinamicamente */
  transform: translateY(-70%);
`;
