import PropTypes, { object } from 'prop-types';
import { Link } from 'react-router-dom';

import {
  LinkedinLogo, GithubLogo, TwitterLogo, FacebookLogo, InstagramLogo,
} from 'phosphor-react';

import { Text } from '../Text';
import { LabelButton } from '../LabelButton';
import { Button } from '../Button';
import { Heading } from '../Heading';


import * as S from './styles';

export const CardHome = (props) => {

    return(
  <S.Container>
    <div className="content">
      <Link to="/about" id="avatar">
        <img src={`../../../public/${props.img}`} alt={props.name} id="avatar" />
      </Link>
      <Heading heading="h2">
        {props.name}
      </Heading>
      <Text className="subtitle">
        {props.subtitle}
      </Text>
      <div className="sub-actions">
        <LabelButton className="link-email" to="/login">
          {props.email}
        </LabelButton>
      </div>
      <div className="actions">
        <Button
          type="button"
          variant="secondary"
        >
          <GithubLogo
            size={23}
          />
          GitHub
        </Button>
        <Button
          type="button"
        >
          <LinkedinLogo
            size={23}
          />
          Linkedin
        </Button>
      </div>
    </div>
    <S.EmptyFooter>
      <S.SocialMidia>
        <LabelButton
          to="https://twitter.com/"
        >
          <TwitterLogo
            size={23}
          />
        </LabelButton>
        <LabelButton
          to="https://www.facebook.com/"
        >
          <FacebookLogo
            size={23}
          />
        </LabelButton>
        <LabelButton
          to="https://www.instagram.com/"
        >
          <InstagramLogo
            size={23}
          />
        </LabelButton>
      </S.SocialMidia>
    </S.EmptyFooter>
  </S.Container>
)};

CardHome.propTypes = {
  heading: PropTypes.oneOf(['h1', 'h2', 'h3']),
  isLink: PropTypes.bool,
  disabled: PropTypes.bool,
  to: PropTypes.any,
};

CardHome.defaultProps = {
  heading: 'h1',
  variant: 'main',
  isLink: false,
  disabled: false,
  to: undefined,
};
