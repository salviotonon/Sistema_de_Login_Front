import React from 'react';
import Carousel from 'nuka-carousel';
import { Heading } from '../Heading';

import * as S from './styles'

export default class extends React.Component {
    render() {
        return (
            <S.Container>
                <Carousel
                    slidesToShow={3}
                    cellAlign='center'
                    defaultControlsConfig={{
                        nextButtonText: '>',
                        prevButtonText: '<',
                        pagingDotsStyle: {
                            fill: 'white',
                            padding: '10px',
                        }
                    }}
                >
                <S.ContainerImg>
                    <Heading heading="h3">ReactJS</Heading>
                    <img className='reactIcon' src="../../public/reactJS.png" alt="" />
                </S.ContainerImg>
                <S.ContainerImg>
                <Heading heading="h3">NodeJS</Heading>
                    <img className='reactIcon' src="../../public/node.jpg" alt="" />
                </S.ContainerImg>
                <S.ContainerImg>
                <Heading heading="h3">Figma</Heading>
                    <img className='reactIcon' src="../../public/figma.jpg" alt="" />
                </S.ContainerImg>
                <S.ContainerImg>
                <Heading heading="h3">JWT</Heading>
                    <img className='reactIcon' src="../../public/jwt.png" alt="" />
                </S.ContainerImg>
                </Carousel>
            </S.Container>
        );
    }
}