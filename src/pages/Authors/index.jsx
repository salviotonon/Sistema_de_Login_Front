import { CardAbout } from "../../components/CardAbout";
import { dynamicData } from "../../components/CardAbout/dynamicData";

export const Authors = () => {
  const infoAbout = dynamicData.map(item => {
    console.log(item.avatar)
    return(
      <CardAbout
      name={item.name}
      img={item.avatar}
      subtitle={item.subtitle}
      email={item.email}
    />
    );
  }); 
  return(
    <div>
      {infoAbout}
    </div>
 
);};
