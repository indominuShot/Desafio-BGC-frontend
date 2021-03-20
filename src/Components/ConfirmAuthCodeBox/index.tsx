import { Auth } from 'aws-amplify';
import { toast } from 'react-toastify';
import { FormEvent, useContext, useEffect, useState } from 'react';
import { useHistory } from 'react-router';

import _AuthAwsError from '../../@types/_AuthAwsError';
import { userContext } from '../../Contexts/userContext';
import verifyUserAccess from '../../Utils/verifyUserAccess';

import Button from '../Button';
import { Container, VerificationBox, CodeInput, Title } from './styles';

interface _ConfirmAuthCodeBox {
  userName: string;
  password: string;
}

export default function ConfirmAuthCodeBox({
  userName,
  password,
}: _ConfirmAuthCodeBox) {
  const [codeValue, setCodeValue] = useState('');
  const [load, setLoad] = useState(false);
  const [disableButton, setDisableButton] = useState(false);

  const { handleUserLogin, userCredentials } = useContext(userContext);

  const route = useHistory();

  useEffect(() => {
    if (codeValue.length < 6) {
      setDisableButton(true);
    } else {
      setDisableButton(false);
    }
  }, [codeValue]);

  async function handleVerificationCode(event: FormEvent) {
    event.preventDefault();

    setLoad(true);

    Auth.confirmSignUp(userName ? userName : userCredentials.email, codeValue)
      .then(async () => {
        const loginSucceeded = await handleUserLogin(
          userName ? userName : userCredentials.email,
          password ? password : userCredentials.password
        );

        if (loginSucceeded) {
          setLoad(false);
          route.push('/');
        } else {
          setLoad(false);
          toast.error('Houve algum problema com a autenticação!');
        }
      })
      .catch((error: _AuthAwsError) => {
        setLoad(false);
        verifyUserAccess(error.message);
      });
  }

  return (
    <Container>
      <VerificationBox>
        <Title>
          Enviamos um código para: <span>{userName}</span>
        </Title>
        <CodeInput onChange={(e) => setCodeValue(e)} required fieldWidth={45} />
        <Button
          onClick={handleVerificationCode}
          isLoading={load}
          style={{ maxWidth: '16rem' }}
          disabled={disableButton}
        >
          Verificar
        </Button>
      </VerificationBox>
    </Container>
  );
}
