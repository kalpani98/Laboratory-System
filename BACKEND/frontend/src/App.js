
import './App.css';
import {BrowserRouter as Router , Switch, Route} from 'react-router-dom';
import Navbar from './components/Navbar';
import Products from './components/pages/Products';
import ContactUs from './components/pages/ContactUs';
import SignUp from './components/pages/Signup';
import Home from './components/pages/Home';
import Addresult from './components/lab/Addresult';
import AllLab from './components/lab/AllLab';
import Labs from './components/lab/Labs';
import Addreport from './components/lab/Addreport';
import LAB from './components/lab/LAB';
import ReportCRUD from './components/lab/ReportCRUD';
import Allreport from './components/lab/Allreport';
import EditForm from './components/lab/UpdateReport';
//import Book from './components/lab/Book';

//Main Component
import Appointment from './components/pages/Appointment';
//Sub Component
import MakeAppointment from './components/pages/MakeApp';
import BookingHistory from './components/pages/BookingHistory';
import TreatmentHistory from './components/pages/TreatmentHistory';
import ManageBooking from './components/pages/ManageBooking';
import AppFeedback from './components/pages/Feedback';
import LoginForm from './components/loginform/LoginForm';

function App() {
  return (
      <Router>
      <Navbar/>
        <Switch>
          <Route path='/' exact component={LoginForm}></Route>
          <Route path='/home' exact component={Home}></Route>
          <Route path='/Appointment' exact component={Appointment}></Route>
          <Route path='/products' exact component={Products}></Route>
          <Route path='/contact-us' exact component={ContactUs}></Route>
          <Route path='/sign-up' exact component={SignUp}/>
          <Route path='/add' exact component={Addresult}><Addresult/></Route>
          <Route path="/display" exact component={AllLab}></Route>
          <Route path="/labs" exact component={Labs}></Route>
          <Route path="/report" exact component={Addreport}></Route>
         <Route path="/lab" exact component={LAB}></Route>
         <Route path="/reCrud" exact component={ReportCRUD}></Route>
         <Route path="/redisplay" exact component={Allreport}></Route>
         <Route path="/update/:id" exact component={EditForm}></Route>


          <Route path='/make-appointment' exact component={MakeAppointment}></Route>
          <Route path='/booking-history' exact component={BookingHistory}></Route>
          <Route path='/treatment-history' exact component={TreatmentHistory}></Route>
          <Route path='/manage-booking' exact component={ManageBooking}></Route>
          <Route path='/app-feedback' exact component={AppFeedback}></Route>

    
        </Switch>
      </Router>
  );
}

export default App;

