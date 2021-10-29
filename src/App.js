
import { BrowserRouter as Router,Switch,Route } from 'react-router-dom';
import './App.css';
import Contact from './components/Contact/Contact';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import NotFound from './components/NotFound/NotFound';
import AuthProvider from './contexts/AuthProvider';


function App() {
  return (
    <div className="App">
     <AuthProvider>
     <Router>
        <Header></Header>
        <Switch>
        <Route exact path="/">
          <Home></Home>
        </Route>
        <Route  path="/home">
        <Home></Home>
        </Route>
        <Route  path="/contact">
        <Contact></Contact>
        </Route>
        <Route  path="*">
        <NotFound></NotFound>
        </Route>
        </Switch>
      </Router>
     </AuthProvider>
    </div>
  );
}

export default App;
