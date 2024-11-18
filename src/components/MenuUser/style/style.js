import { styled } from "styled-components";

export const MenuContainer = styled.section`

min-width: 16%;
height: 80%;
right: 0;
margin-right: 8px;
margin-top: 6px;
position: fixed;
transition: transform 0.3s ease-in-out;
transform: ${({ open }) => (open ? 'translateX(0)' : 'translateX(100%)')};
background-color: ${({theme}) => theme.backgroundMenu};

border-radius: 12px;
//box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
box-shadow: rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px;


`
export const Menu = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    border-bottom: solid  #e6e6e6 1px;
    margin: .5rem 0;
   
   
`
export const MenuItens = styled.div`
    text-align: center;
   
   

img {
  width: 80px;
  height: 80px;
  border-radius: 50%;
  padding: 5px;
  object-fit:cover;
}

h5{
    padding: 12px 0;
    margin-bottom: 8px;

}

`
export const MenuIcons = styled.div`
    display: flex;
    flex-direction: column;
    border-radius: 5px;
    cursor: pointer;
    
    & :hover{
        background: ${({ theme }) => theme.hoverColor};
    }
    
`
export const List = styled.div`
 
   padding: 12px 18px;
    display: flex;
    align-items: center;
    border-radius: 8px;
    margin-bottom: 10px; 
`
export const ListIcon = styled.div`
    padding-right: 6px;

       
`
export const ListText = styled.div`
       
`