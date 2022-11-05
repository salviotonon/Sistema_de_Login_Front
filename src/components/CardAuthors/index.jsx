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

export const CardAuthors = ({ name, email, img, subtitle }) => (
  <S.Container>
    <S.ContainerImg>
      <Link to="/about" id="avatar">
        <img src={`../../../public/${img}`} alt={name} id="avatar" />
      </Link>
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
    </S.ContainerImg>
    <S.ContainerText>
      <S.TitleBox>
        <Heading heading="h2">
          {name}
        </Heading>
        <Text className="subtitle">
          {subtitle}
        </Text>
        <div className="sub-actions">
          <LabelButton className="link-email" to="/login">
            {email}
          </LabelButton>
        </div>
      </S.TitleBox>
      <S.TitleBox2>
      <Heading classname="subtitleH2" heading="h3">
        About
      </Heading>
      <Text>
        I am a frontend developer with a particular interest in making things simple and automating daily tasks. I try to keep up with security and best practices, and am always looking for new things to learn.
      </Text>
    
      <Heading heading="h3">
        Interests
      </Heading>
      <Text>
        Food expert. Music scholar. Reader. Internet fanatic. Bacon buff. Entrepreneur. Travel geek. Pop culture ninja. Coffee fanatic.
      </Text>
        </S.TitleBox2>
      <S.EmptyFooter>
        <S.SocialMidia>
          <LabelButton className='colorIcon'
            to="https://twitter.com/"
          >
            <TwitterLogo
              size={23}
            />
          </LabelButton>
          <LabelButton className='colorIcon'
            to="https://www.facebook.com/"
          >
            <FacebookLogo
              size={23}
            />
          </LabelButton>
          <LabelButton className='colorIcon'
            to="https://www.instagram.com/"
          >
            <InstagramLogo
              size={23}
            />
          </LabelButton>
        </S.SocialMidia>
      </S.EmptyFooter>
    </S.ContainerText>
  </S.Container>
);

CardAuthors.propTypes = {
  heading: PropTypes.oneOf(['h1', 'h2', 'h3']),
  isLink: PropTypes.bool,
  disabled: PropTypes.bool,
  to: PropTypes.any,
};

CardAuthors.defaultProps = {
  heading: 'h1',
  variant: 'main',
  isLink: false,
  disabled: false,
  to: undefined,
};
