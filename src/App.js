import logo from './logo.svg';
import Home from './pages/home'
import {BrowserRouter as Router, Switch} from 'react-router-dom'
import * as ROUTES from './route-constants/routes'


function App() {
  return (
     <Router>
       <Switch>
         <Home
         exact
         path={ROUTES.HOME}
         />
         {/* <About
         exact
         path={ROUTES.ABOUT}
         /> */}
       </Switch>
     </Router>
  );
}

export default App;
