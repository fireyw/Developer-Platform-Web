import { useSelector } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Login from './pages/Login';
import Main from './pages/Main';

const App = () =>  {
  const userInfo = useSelector(state => state.common.userInfo);

  return (
    <Router>
      <Switch>
        {/* {!userInfo.userId &&  */}
        <Route exact path='/' component={Main}/>
        {/* {userInfo.userId &&  */}
        <Route path='/login' component={Login}/>
      </Switch>
    </Router>
  );
}

export default App;