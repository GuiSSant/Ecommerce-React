import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';


const Registrar = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const history = useHistory();

  const handleRegisrar = (e) => {
    e.preventDefault();
    history.push('/login');
  };
const StyledContainer = styled.container;
const StyledTypography = styled.typography;
const StyledForm = styled.form;
const StyledTextField = styled.textfield;
const StyledButton = styled.button;

  return (
    <StyledContainer>
      
      <StyledTypography variant="h4">Registrar</StyledTypography>
      <StyledForm onSubmit={handleRegisrar}>
        <StyledTextField
          label="Email"
          type="email"
          value="{email}"
          onChange={(e) => setEmail(e.target.value)}
        />
        <StyledTextField
          label="Senha"
          type="senha"
          value="{senha}"
          onChange={(e) => setSenha(e.target.value)}
        />
        <StyledButton type="submit">Registrar</StyledButton>
      </StyledForm>
    </StyledContainer>
  );
};

export default Registrar;
