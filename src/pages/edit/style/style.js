import styled from 'styled-components';


export const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px;
  background-color: #f9f9f9;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  max-width: 80%;
  margin: 0 auto;
  margin-top: 5rem;
 
`;

export const InputContainer = styled.div`
  min-width: 40%;
  margin-bottom: 20px;
`;

export const InputField = styled.input`
  width: calc(100% - 20px);
  padding: 15px;
  margin-bottom: 20px; 
  border: solid  #1976d2 1px;
  border-radius: 4px;
  font-size: 16px;


  &:focus {
    outline: none;
    border: 2px solid  #1565c0;
  }
`;


export const SaveButton = styled.button`
  padding: 15px 30px;
  border: none;
  border-radius: 4px;
  background-color: #1976d2;
  color: white;
  font-size: 16px;
  cursor: pointer;
  &:hover {
    background-color: #1565c0;
  }
`;

export const InputLabel = styled.label`
  display: block;
  margin-bottom: 5px;
  color: #333;
  font-size: 16px;
`;

