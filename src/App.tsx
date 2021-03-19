import Amplify from 'aws-amplify';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { ShoppingCartProvider } from './Contexts/ShoppingCarContext';
import Routes from './Routes';
import awsConfig from './aws-exports';

import './Styles/global.css';
import UserProvider from './Contexts/userContext';

Amplify.configure(awsConfig);

function App() {
  return (
    <div className="app">
      <ShoppingCartProvider>
        <UserProvider>
          <Routes />
        </UserProvider>
        <ToastContainer />
      </ShoppingCartProvider>
    </div>
  );
}

export default App;
