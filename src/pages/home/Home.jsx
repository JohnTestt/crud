import React from "react";
import { Climate } from "../../components/Climate/Climate";
import { Container, Title, Section, Itens, Footer } from "./style/style";

export const Home = () => {
  return (
    <>
    <Climate/> 
    <Container>
      <Title>Meu Projeto CRUD</Title>
      
      <Section>
        <Itens>
        <h2>👨‍💻 Descrição do Projeto:</h2>
        <ul>
          <li>Pegamos os dados dos usuários em uma API fake.</li> 
          <li>Colocamos as informações dentro de um Card.</li>
          <li>
            Com isso, conseguimos realizar o CRUD:
            <ul>
              <li><b>Create</b> (Criar)</li>
              <li><b>Read</b> (Ler)</li>
              <li><b>Update</b> (Atualizar)</li>
              <li><b>Delete</b> (Apagar)</li>
            </ul>
          </li>
        </ul>
        </Itens>
       
      </Section>

      <Section>
        <Itens>
        <h2>💡 A Aplicação Possui:</h2>
        <ul>
          <li>
            <b>Styled-Components</b>: para estilizar os componentes do projeto.
          </li>
          <li>
            <b>Rotas protegidas</b>: 
            <ul>
              <li>Somente será possível acessar as páginas <i>Users</i> e <i>Register</i> após fazer o Login.</li>
              <li>O login só será permitido se todos os campos estiverem preenchidos corretamente, incluindo o upload de uma foto.</li>
            </ul>
          </li>
          <li>
            <b>Context API</b>: para gerenciar o estado global da aplicação, como login e funcionalidades principais.
          </li>
        </ul>
        </Itens>
       
      </Section>

      <Footer>
        <p> 🚀 Este projeto foi inteiramente desenvolvido por mim, para demonstrar as funcionalidades do CRUD e boas práticas com React.</p>
      </Footer>
    </Container>
    </>
    
  );
};
