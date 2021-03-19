import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Header from './Components/Header';
import Login from './Pages/Login';
import Register from './Pages/Register';
import Shop from './Pages/Shop';

export default function Routes() {
  return (
    <BrowserRouter>
      <Header />

      <Switch>
        <Route path="/" exact component={Shop} />
        <Route path="/login" exact component={Login} />
        <Route path="/register" exact component={Register} />
      </Switch>
    </BrowserRouter>
  );
}
