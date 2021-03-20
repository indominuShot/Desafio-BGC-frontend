import { createContext, ReactNode, useState } from 'react';
import { Auth } from 'aws-amplify';
import { toast } from 'react-toastify';

import _AwsLoginResponse from '../@types/_AwsLoginResponse';
import _AuthAwsError from '../@types/_AuthAwsError';
import verifyUserAccess from '../Utils/verifyUserAccess';
import { useHistory } from 'react-router';
import _UserCredentials from '../@types/_UserCredentials';

interface _UserContextProps {
  isLogged: boolean;
  isWaitingVerificationCode: boolean;
  userCredentials: _UserCredentials;
  handleUserCredentials: (email: string, password: string) => void;
  waitForVerificationCode: () => void;
  cancelWaitForVerificationCode: () => void;
  handleUserLogout: () => Promise<void>;
  handleUserLogin: (email: string, password: string) => Promise<boolean>;
}

interface _UserProviderProps {
  children: ReactNode;
}

export const userContext = createContext({} as _UserContextProps);

export default function UserProvider({ children }: _UserProviderProps) {
  const [userCredentials, setUserCredentials] = useState(
    {} as _UserCredentials
  );
  const [isLogged, setIslogged] = useState(
    localStorage.getItem('userData') ? true : false
  );
  const [isWaitingVerificationCode, setIsWaitingVerificationCode] = useState(
    false
  );

  const route = useHistory();

  async function handleUserLogin(email: string, password: string) {
    const loginSucceeded = Auth.signIn({
      username: email,
      password,
    })
      .then((event: _AwsLoginResponse) => {
        const userInfo = JSON.stringify({
          userName: event.username,
          userId: event.pool.clientId,
        });

        setIslogged(true);
        toast.success('Seja bem vindo!', {
          pauseOnHover: false,
          autoClose: 3000,
        });
        localStorage.setItem('userData', userInfo);

        return true;
      })
      .catch((error: _AuthAwsError) => {
        if (error.message.indexOf('User is not confirmed') >= 0) {
          handleUserCredentials(email, password);

          Auth.resendSignUp(email);
          route.push('/register');
          setIsWaitingVerificationCode(true);
        } else {
          verifyUserAccess(error.message);
          setIslogged(false);
        }
        return false;
      });

    return loginSucceeded;
  }

  async function handleUserLogout() {
    Auth.signOut()
      .then(() => {
        setIslogged(false);
        localStorage.setItem('userData', '');
      })
      .catch(() => {
        toast.error('Houve algum proble ao sair!');
      });
  }

  function waitForVerificationCode() {
    setIsWaitingVerificationCode(true);
  }

  function cancelWaitForVerificationCode() {
    setIsWaitingVerificationCode(false);
  }

  function handleUserCredentials(email: string, password: string) {
    setUserCredentials({
      email,
      password,
    });
  }

  return (
    <userContext.Provider
      value={{
        isLogged,
        isWaitingVerificationCode,
        userCredentials,
        handleUserCredentials,
        handleUserLogin,
        handleUserLogout,
        waitForVerificationCode,
        cancelWaitForVerificationCode,
      }}
    >
      {children}
    </userContext.Provider>
  );
}
