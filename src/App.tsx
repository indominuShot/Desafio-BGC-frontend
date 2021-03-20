import Amplify from 'aws-amplify';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Routes from './Routes';
import awsConfig from './Services/awsConfig';

import './Styles/global.css';

Amplify.configure(awsConfig);

function App() {
  return (
    <div className="app">
      <Routes />

      <ToastContainer />
    </div>
  );
}

export default App;
