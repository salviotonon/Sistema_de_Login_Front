import PropTypes, { object } from 'prop-types';
import { Link } from 'react-router-dom';

import {
  LinkedinLogo, GithubLogo, TwitterLogo, FacebookLogo, InstagramLogo, LinkSimple,
} from 'phosphor-react';

import { motion } from 'framer-motion';
import { Text } from '../Text';
import { LabelButton } from '../LabelButton';
import { Button } from '../Button';
import { Heading } from '../Heading';

import * as S from './styles';


export const CardHome = (props) => (
  <S.Container as={motion.div} whileHover={{ scale: 1.02 }}>
    <div className="content">
      <Link to="/authors" id="avatar">
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
          {' '}
          <LinkSimple
            color="white"
            size={18}
          />
        </LabelButton>
      </div>
      <div className="actions">
        <Button
        href={`${props.github}`}
        variant="secondary"
        >
          <GithubLogo
            size={23}
          />
          GitHub
        </Button>
        <Button
          href={`${props.linkedin}`}
      
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
        {props.twitter !== undefined && <LabelButton
          className="colorIcon"
          defaultAnchor
          to={`${props.twitter}`}
          target="_blank"
        >
          <TwitterLogo
            size={23}
          />
        </LabelButton>}
        {props.facebook !== undefined && <LabelButton
          className="colorIcon"
          defaultAnchor
          to={`${props.facebook}`}
          target="_blank"
        >
          <FacebookLogo
            size={23}
          />
        </LabelButton>}
        {props.instagram !== undefined && <LabelButton
          className="colorIcon"
          defaultAnchor
          to={`${props.instagram}`}
          target="_blank"
        >
          <InstagramLogo
            size={23}
          />
        </LabelButton>}
      </S.SocialMidia>
    </S.EmptyFooter>
  </S.Container>
);

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
