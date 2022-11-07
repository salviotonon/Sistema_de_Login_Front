import {
  useContext, useEffect, useRef, useState,
} from 'react';
import { HashLoader } from 'react-spinners';
import { useTheme } from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';

import { AuthContext } from '../../contexts/AuthContext';

import { Heading } from '../../components/Heading';
import { Text } from '../../components/Text';

import * as S from './styles';

const item = {
  exiting: {
    opacity: 0,
    y: -20,
    scale: 0.9,
    transition: {
      duration: 0.5,
    },
  },
};

export const LoadingScreen = () => {
  const theme = useTheme();
  const [forcedStop, setForcedStop] = useState(false);
  const { isLoading } = useContext(AuthContext);

  const timeStarted = useRef(null);

  useEffect(() => {
    document.body.style.overflow = 'hidden';

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, []);

  useEffect(() => {
    if (isLoading) {
      timeStarted.current = Date.parse(new Date());
    } else {
      if (timeStarted.current) {
        const loadedFast = Date.parse(new Date()) - timeStarted.current <= 800;

        if (loadedFast) {
          setForcedStop(true);
        }
      }

      timeStarted.current = null;
    }
  }, [isLoading]);

  return !forcedStop && (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          exit="exiting"
          variants={{
            exiting: {
              y: '-110vh',
              transition: {
                type: 'just',
                ease: 'easeOut',
                duration: 1.5,
                delay: 1.2,
                staggerChildren: 0.2,
              },
            },
          }}
        >
          <S.Overlay />
          <S.Container>
            <S.Header>
              <motion.div variants={item}>
                <Heading>
                  Equipe 3
                </Heading>
              </motion.div>
            </S.Header>
            <S.Main>
              <motion.div variants={item}>
                <HashLoader color={theme.colors.white} size={40} />
              </motion.div>
              <Text id="message-info" size="large" as={motion.span} variants={item}>
                Aguarde, estamos validando sua sessão
              </Text>
            </S.Main>
            <S.Footer as={motion.footer} variants={item}>
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
        </motion.div>
      )}
    </AnimatePresence>
  );
};
