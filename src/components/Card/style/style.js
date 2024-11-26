import styled from "styled-components";

export const BoxContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  min-width: 340px;
  min-height: 200px;
  align-items: center;
  margin: 1rem;
  border-radius: 15px;
  box-shadow: ${({ theme }) => theme.boxShadowCard};

  &:hover {
    background: ${({ theme }) => theme.hoverCard};
  }
`;
export const BoxAvatar = styled.div`
  margin: 0.5rem;

  img {
    border-radius: 100%;
  }
`;

export const BoxText = styled.div`
  h6 {
    padding-top: 0.5rem;
    padding-bottom: 0.2rem;
  }
`;

export const BoxIcone = styled.div`
  text-align: center;
  margin: 1rem 0;

  button {
    margin-left: 0.5rem;
    cursor: pointer;
    background-color: transparent;
    border: none;
    color: ${({ theme }) => theme.color};
    padding: 6px;

    &:hover {
      background-color: #1976d2;
      border-radius: 100%;
    }
  }
`;
