import {
  Envelope, User,
} from 'phosphor-react';
import { useCallback } from 'react';
import { Heading } from '../../components/Heading';
import { Input } from '../../components/Input';
import { InputPassword } from '../../components/Input/InputPassword';
import { Text } from '../../components/Text';
import { LabelButton } from '../../components/LabelButton';
import { Button } from '../../components/Button';

import * as S from './styles';

export const Signup = () => {
  const handleSubmit = useCallback((event) => {
    event.preventDefault();

    console.log('[register] submit!');
  }, []);

  return (
    <S.Container>
      <div className="content">
        <Heading heading="h2">
          Cadastrar
        </Heading>

        <Text className="subtitle">
          Cadastre-se para continuar
        </Text>

        <S.FormStyled onSubmit={handleSubmit}>
          <Input
            type="text"
            placeholder="Digite seu nome de usuário"
            labelName="Nome do usuário"
            icon={User}
          />

          <Input
            type="email"
            placeholder="Digite seu e-mail"
            labelName="E-mail"
            icon={Envelope}
          />

          <InputPassword labelName="Senha" />

          <InputPassword labelName="Confirmar senha" />

          <div className="sub-actions">
            <LabelButton to="/login">
              Já possui uma conta?
            </LabelButton>
          </div>

          <div className="actions">
            <Button
              type="submit"
            >
              Fazer cadastro
            </Button>
          </div>

        </S.FormStyled>
      </div>
      <S.EmptyFooter />
    </S.Container>
  );
};
