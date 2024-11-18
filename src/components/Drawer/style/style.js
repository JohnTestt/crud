import styled from 'styled-components';



export const MenuContainer= styled.section`
    
    min-width: 12%;
  //  width: 12%;
    height: 100%;
    transform: ${({ open }) => (open ? 'translateX(0)' : 'translateX(-100%)')};
    transition: transform 0.3s ease-in-out;
    left: 0;
    position: fixed;
    z-index: 1;
    background-color: ${({theme}) => theme.background};
    box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;

    @media (max-width: 768px) {
    width: 60%;
  }
    
`
export const MenuItens= styled.div`
    display: flex;
    align-items: center;
    padding: .3rem;
    border-radius: 5px;
    margin: 0 .2rem;

    &:hover {
  
    background: ${({ theme }) => theme.hoverColor};
    cursor: pointer;
    
  }
`
export const ListIcon= styled.div`
    padding:.5rem;
    
`
export const ListText= styled.div`
    padding-left: .5rem;
`

export const BoxMobile = styled.section`
 
  top: 0;
  left: 0;
  position: fixed;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5); /* Semitransparência */
  z-index: 0;
  display: ${({ open }) => (open ? 'block' : 'none')}; /* Só aparece se estiver aberto */
  border: solid red 2px;

  @media (min-width: 769px) {
   
   display: none; 
 }

` 