import { useSelector } from 'react-redux';
import { BrowserRouter, Route } from 'react-router-dom';
import Login from './pages/Login';
import Main from './pages/Main';

const App = () =>  {
  const userInfo = useSelector(state => state.common.userInfo);

  return (
    <BrowserRouter>
      {!userInfo.userId && <Route exact path='/' component={Login}/>}
      {userInfo.userId && <Route exact path='/' component={Main}/>}
    </BrowserRouter>
  );
}

export default App;