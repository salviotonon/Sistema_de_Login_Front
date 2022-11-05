import { Heading } from "../../components/Heading";
import { Text } from "../../components/Text";

import * as S from './styles'

export const About = () => {
  return (
    <>
      <S.Container>
        <Heading className='titleh1' heading='h2'>Por baixo dos panos...</Heading>
        <Text className='subtitle'>Veja abaixo quais tecnologias estão deixando
          nossa aplicação em pé, tanto do lado do servidor quanto do Frontend!
          Utilizamos as tecnologias mais modernas no mercado!</Text>
      </S.Container>
      <S.ContainerCarrousel>
        <Heading>Carrosel</Heading>
      </S.ContainerCarrousel>
    </>

  );
};
