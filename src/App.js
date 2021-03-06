
import { BrowserRouter as Router,Switch,Route } from 'react-router-dom';
import './App.css';
import Contact from './components/Contact/Contact';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import NotFound from './components/NotFound/NotFound';
import Services from './components/Services/Services';
import AuthProvider from './contexts/AuthProvider';
import Footer from "./components/Footer/Footer";
import Login from './components/login/Login';
import SignUp from './components/signup/SignUp';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import ServiceDetails from './components/ServiceDetails/ServiceDetails';
import AddServices from './components/AddServices/AddServices';
import MyOrder from './components/myOrder/MyOrder';
import ManageAll from './components/manageAll/ManageAll';


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
        <Route  path="/services">
        <Services></Services>
        </Route>
        <PrivateRoute  path="/addServices">
        <AddServices></AddServices>
        </PrivateRoute>
        <Route  path="/login">
        <Login></Login>
        </Route>
        <Route  path="/signup">
        <SignUp></SignUp>
        </Route>
        <PrivateRoute  path="/myOrder">
        <MyOrder></MyOrder>
        </PrivateRoute>
        <PrivateRoute  path="/manageAll">
        <ManageAll></ManageAll>
        </PrivateRoute>
        <PrivateRoute  path="/details/:serviceId">
       <ServiceDetails></ServiceDetails>
        </PrivateRoute>
       
        <Route  path="*">
        <NotFound></NotFound>
        </Route> 

        </Switch>
        <Footer></Footer>
      </Router>
     </AuthProvider>
    </div>
  );
}

export default App;
