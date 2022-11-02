import { User } from 'phosphor-react';
import { useCallback } from 'react';
import { Heading } from '../../components/Heading';
import { Input } from '../../components/Input';
import { InputPassword } from '../../components/Input/InputPassword';
import { Text } from '../../components/Text';
import { LabelButton } from '../../components/LabelButton';
import { Button } from '../../components/Button';

import * as S from './styles';

export const Login = () => {
  const handleSubmit = useCallback((event) => {
    event.preventDefault();

    console.log('[login] submit!');
  }, []);

  return (
    <S.Container>
      <div className="content">
        <Heading heading="h2">
          Login
        </Heading>

        <Text className="subtitle">
          Faça login para continuar
        </Text>

        <S.FormStyled onSubmit={handleSubmit}>
          <Input
            type="text"
            placeholder="Digite seu nome de usuário"
            labelName="Nome do usuário"
            icon={User}
          />

          <InputPassword labelName="Senha" />

          <div className="sub-actions">
            <LabelButton to="/signup">
              Não possui conta?
            </LabelButton>

            <LabelButton to="/forgotpassword">
              Esqueceu sua senha?
            </LabelButton>
          </div>

          <div className="actions">
            <Button
              type="submit"
            >
              Fazer login
            </Button>
          </div>

        </S.FormStyled>
      </div>
      <S.EmptyFooter />
    </S.Container>
  );
};
