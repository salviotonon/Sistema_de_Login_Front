import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import { LinkedinLogo, GithubLogo } from 'phosphor-react';

import { Text } from '../Text';
import { LabelButton } from '../LabelButton';
import { Button } from '../Button';
import { Heading } from '../Heading';
import image from "../../assets/images/alex.jpg"

import * as S from "./styles"

export const CardHome = () => {
    return (
        <S.Container>
            <div className="content">
                <Link to="/about" id="avatar">
                    <img src={image} alt="Avatar" id="avatar" />
                    
                </Link>
                <Heading heading="h2">
                    Salvio Tonon
                </Heading>
                <Text className="subtitle">
                    Frontend Developer
                </Text>
                <div className="sub-actions">
                    <LabelButton className="link-email" to="/login">
                        salvio.tonon@gmail.com
                    </LabelButton>
                </div>
                <div className="actions">
                    <Button
                        type="button"
                        variant="secondary">
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
            </S.EmptyFooter>
        </S.Container>
    )
}

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