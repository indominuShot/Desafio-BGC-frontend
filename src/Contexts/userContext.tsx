import { createContext, ReactNode, useState } from 'react';
import { Auth } from 'aws-amplify';
import { toast } from 'react-toastify';

import _AwsLoginResponse from '../@types/_AwsLoginResponse';
import _AuthAwsError from '../@types/_AuthAwsError';
import verifyUserAccess from '../Utils/verifyUserAccess';

interface _UserContextProps {
  isLogged: boolean;
  handleUserLogin: (
    email: string,
    password: string
  ) => Promise<boolean>;
  handleUserLogout: () => Promise<void>;
}

interface _UserProviderProps {
  children: ReactNode;
}

export const userContext = createContext({} as _UserContextProps);

export default function UserProvider({
  children,
}: _UserProviderProps) {
  const [isLogged, setIslogged] = useState(
    localStorage.getItem('userData') ? true : false
  );

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
        toast.success('Logado com sucesso!', {
          pauseOnHover: false,
          autoClose: 3000,
        });
        localStorage.setItem('userData', userInfo);

        return true;
      })
      .catch((error: _AuthAwsError) => {
        verifyUserAccess(error.message);
        setIslogged(false);
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

  return (
    <userContext.Provider
      value={{
        isLogged,
        handleUserLogin,
        handleUserLogout,
      }}
    >
      {children}
    </userContext.Provider>
  );
}
