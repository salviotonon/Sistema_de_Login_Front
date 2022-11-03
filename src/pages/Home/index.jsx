import { CardHome } from "../../components/CardHome";
import { dinamicData } from "../../components/CardHome/dinamicData";

import * as S from './styles'

// export const Home = () => (
//   <S.Container>
//     <CardHome 
//       img
//     />
//     <CardHome />
//     <CardHome />
//   </S.Container>
// );

export const Home = () => {

const cards = dinamicData.map(item => {

return (
  <CardHome 
      name={item.name}
      img={item.avatar}
      subtitle={item.subtitle}
      email={item.email}
      
  />
)
})        

return (
<S.Container>
  {cards}
</S.Container>
)
}
