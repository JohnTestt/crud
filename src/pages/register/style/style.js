import styled from "styled-components";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import EmailIcon from "@mui/icons-material/Email";

export const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme. backgroundForm};
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
  margin: 18px 0;
  position: relative;

  @media (max-width: 900px) {
    width: 90%;
  }
`;

export const InputField = styled.input`
  width: calc(100% - 20px);
  max-width: 100%;
  height: 38px;
  padding: 15px 15px 15px 55px;
  border: 1px solid #ccc;
  transition: all 0.3s ease;
  border-radius: 4px;
  font-size: 16px;
  background-color: ${({ theme }) => theme.backgroundForm}; 
  color: ${({theme}) => theme.color};
 

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
    background-color: ${({ theme }) => theme. backgroundForm}; 
    color: ${({theme}) => theme.color};
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

  margin: 2rem 0;

  &:hover {
    background-color: #1565c0;
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
  left: 3%; 
  transform: translateY(-50%);
`;
