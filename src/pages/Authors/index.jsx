import { CardAuthors } from '../../components/CardAuthors';

import { dynamicData } from '../../components/CardAuthors/dynamicData';

export const Authors = () => {
  const infoAbout = dynamicData.map((item) => (
    <CardAuthors
      key={Math.random()}
      name={item.name}
      img={item.avatar}
      subtitle={item.subtitle}
      email={item.email}
    />
  ));
  return (
    <div>
      {infoAbout}
    </div>

  );
};
