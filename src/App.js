import './App.css';
import { BrowserRouter,Switch,Route } from 'react-router-dom';
import Home from './Views/Home/Home';
import Profile from './Views/Profile/Profile';
import Signin from './Views/Signin/Signin';
import Signup from './Views/Signup/Signup';
import Detail from './Views/Detail/Detail';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { fetchMe } from './api/account';
import { AuthRoute, PrivateRoute } from './HOC/Route/Guard';


function App() {

  const dispatch=useDispatch();

  useEffect(()=>{
    const accountToken=localStorage.getItem("accessToken");
    if(accountToken){
      dispatch(fetchMe());
    }
  },[dispatch]);

  return (
    <div className="App">
      <BrowserRouter>
      <Switch>
        <Route component={Home} path="/" exact rediretPath="/signin" />
        <Route component={Detail} path="/detail/:id" exact rediretPath />
        <PrivateRoute component={Profile} path="/profile" exact rediretPath />
        <AuthRoute component={Signin} path="/signin" exact rediretPath="/" />
        <AuthRoute component={Signup} path="/signup" exact rediretPath="/" />
      </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
