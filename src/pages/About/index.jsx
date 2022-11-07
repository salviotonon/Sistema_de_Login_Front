import Carousel from '../../components/Carousel'

import { Heading } from "../../components/Heading";
import { Text } from "../../components/Text";
import { Button } from '../../components/Button';

import * as S from './styles'

export const About = () => {
  return (
    <>
      <S.Container>
        <Heading className='titleh1' heading='h2'>Por baixo dos panos...</Heading>
        <Text className='subtitle'>Veja abaixo quais tecnologias estão deixando
          nossa aplicação em pé, tanto do lado do servidor quanto do Frontend!
          Utilizamos as tecnologias mais modernas no mercado!</Text>
          <div className="buttons">
      <Button
        href={`https://github.com/salviotonon/Sistema_de_Login_Front`}
        variant="secondary"
        
      >
        Repositório Frontend no Github
      </Button>
      <Button
        href={`https://github.com/salviotonon/Sistema_de_Login_Front`}
        variant="secondary"
        
      >
        Repositório Backend no Github
      </Button>

      <Button
        href={`https://www.figma.com/file/lQApkZLu47WYvLbXcbQgRE/Projeto-Equipe-3?node-id=0%3A1`}
        
        
      >
        Design da versão 1.0.0 do projeto
      </Button>
    </div>
      </S.Container>
      <S.ContainerCarrousel>
        <Carousel />
      </S.ContainerCarrousel>
    </>

  );
};
