import { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

import { HashLoader } from 'react-spinners';
import { useTheme } from 'styled-components';
import { Heading } from '../../components/Heading';
import { Text } from '../../components/Text';

import * as S from './styles';

export const LoadingScreen = () => {
  const theme = useTheme();

  const { isLoading } = { isLoading: true };

  useEffect(() => {
    document.body.style.overflow = 'hidden';

    return () => {
      document.body.style.overflow = 'unset';
    };
  });

  return (
    <AnimatePresence>
      {isLoading && (
        <>
          <S.Overlay />
          <S.Container>
            <S.Header>
              <Heading>
                Equipe 3
              </Heading>
            </S.Header>
            <S.Main>
              <HashLoader color={theme.colors.white} size={40} />
              <Text id="message-info" size="large">
                Aguarde, estamos validando sua sessão
              </Text>
            </S.Main>
            <S.Footer>
              <Text size="small">
                <div className="by">
                  Por —
                  <ul className="by-list">
                    <li>Felipe Oliveira</li>
                    <li>Salvio Tonon</li>
                    <li>Alex</li>
                  </ul>
                </div>
              </Text>
              <div className="project-info">
                <Text>
                  Projeto Comunidade 2022 - Equipe 3
                </Text>
              </div>
            </S.Footer>
          </S.Container>
        </>
      )}
    </AnimatePresence>
  );
};
