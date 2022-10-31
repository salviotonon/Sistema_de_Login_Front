import { Heading } from "../../components/Heading";
import { Input } from "../../components/Input";
import { LabelButton } from "../../components/LabelButton";
import { Text } from "../../components/Text"
import { Button } from "../../components/Button"

import * as S from "./styles"

import { User, LockKey} from 'phosphor-react';

export const Login = () => {

  return (
    <S.Container>
      <div className="content">
        <Heading>Login</Heading>
        <Text className="subtitle">Faça login para continuar</Text>
        <Input 
        labelName="Nome do usuário"
        icon={User}
        ></Input>
        <Input
          labelName="Senha"
          icon={LockKey}
        ></Input>
        <LabelButton to="/Signup">Não possui conta?</LabelButton>
        <LabelButton to="/Signup">Esqueceu sua senha?</LabelButton>
        <Button>Login</Button>
      </div>
    </S.Container>
  )
};
