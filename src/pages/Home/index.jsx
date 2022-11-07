import { CardHome } from '../../components/CardHome';
import { dinamicData } from '../../components/CardHome/dinamicData';

import * as S from './styles';

export const Home = () => {
  const cards = dinamicData.map((item) => (
    <CardHome
      key={Math.random()}
      name={item.name}
      img={item.avatar}
      subtitle={item.subtitle}
      email={item.email}
      instagram={item.instagram}
      facebook={item.facebook}
      twitter={item.twitter}
      github={item.github}
      linkedin={item.linkedin}
    />
  ));

  return (
    <S.Container>
      {cards}
    </S.Container>
  );
};
