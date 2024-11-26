import axios from "axios";
import { useEffect, useState } from "react";

import { Container, BoxItens, Text, Icone } from "./style/style";

export const Climate = () => {
  
  const [date, setDate] = useState(null);

  useEffect(() => {
    axios
      .get("http://api.weatherapi.com/v1/current.json", {
        params: {
          key: "54eef18cbe4f462e930121721242311",
          q: "auto:ip",
          lang: "pt"
        },
      })
      .then((response) => {
        const data = response.data;
        console.log(data);
        setDate(data); 
      })
      .catch((error) => {
        console.error("Erro na requisição:", error);
      });
  }, []);

 

  return (
    
    <Container>
      
      {date && date.current ? (
        
          <BoxItens>
            <Icone 
         src={date.current.condition.icon}
          alt={date.current.condition.text} />
         <Text>{date.location.region} {date.current.temp_c}°C</Text>
         </BoxItens>
        
      ) : (
        <BoxItens>
           <p>Carregando dados climáticos...</p>
        </BoxItens>
       
      )}
    </Container>
  );
    
  
};
