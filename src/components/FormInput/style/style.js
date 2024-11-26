import styled from "styled-components";

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
    outline: none; 
    border: 1px solid #1565c0; 
    box-shadow: 0 0 5px rgba(21, 101, 192, 0.7); 
    background-color: ${({ theme }) => theme. backgroundForm}; 
    color: ${({theme}) => theme.color};
  }
`;

export const IconContainer = styled.div`
  position: absolute;
  top: 50%;
  left: 3%; 
  transform: translateY(-50%);
  font-size: 40px;
  color: #1976d2;

  & > svg {
    font-size: 40px; 
  }
  
`;
