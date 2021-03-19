import { toast } from 'react-toastify';

const toastConfig = {
  pauseOnHover: false,
  autoClose: 2500,
};

export default function verifyUserAccess(message: string) {
  if (message.indexOf('not exist') >= 0) {
    toast.error('Usuário não existe', toastConfig);
  } else if (message.indexOf('email already exists') >= 0) {
    toast.error('Usuário já existe!', toastConfig);
  } else if (message.indexOf('not confirm') >= 0) {
    toast.error('Usuário não bloqueado', toastConfig);
  } else if (message.indexOf('Invalid verification') >= 0) {
    toast.error('Código inválido');
  } else if (message.indexOf('Username should be an email') >= 0) {
    toast.success('O usuário precisa ser um email!', toastConfig);
  } else if (message.indexOf('success') >= 0) {
    toast.success('Sucesso!', toastConfig);
  }
}
