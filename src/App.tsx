import Header from './Components/Header';
import { ShoppingCartProvider } from './Contexts/ShoppingCarContext';
import Routes from './Routes';

import './Styles/global.css';

function App() {
  return (
    <div className="app">
      <ShoppingCartProvider>
        <Header />
        <Routes />
      </ShoppingCartProvider>
    </div>
  );
}

export default App;
