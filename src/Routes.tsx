import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Login from './Pages/Login';
import Shop from './Pages/Shop';

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Login} />
        <Route path="/shop" exact component={Shop} />
      </Switch>
    </BrowserRouter>
  );
}
