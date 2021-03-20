import { toast } from 'react-toastify';

const toastConfig = {
  pauseOnHover: false,
  autoClose: 2500,
};

export default function verifyUserAccess(message: string) {
  if (message.indexOf('not exist') >= 0) {
    toast.error('Cliente não existe', toastConfig);
  } else if (message.indexOf('Incorrect username or password.') >= 0) {
    toast.error('Cliente ou senha incorretos!', toastConfig);
  } else if (message.indexOf('email already exists') >= 0) {
    toast.error('Cliente já existe!', toastConfig);
  } else if (message.indexOf('not confirm') >= 0) {
    toast.error('Cliente inativo', toastConfig);
  } else if (message.indexOf('Invalid verification') >= 0) {
    toast.error('Código inválido');
  } else if (message.indexOf('Username should be an email') >= 0) {
    toast.success('O cliente precisa ser um email!', toastConfig);
  } else if (message.indexOf('success') >= 0) {
    toast.success('Sucesso!', toastConfig);
  }
}
