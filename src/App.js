import { BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import Home from './Components/Home/home';
import Events from './Components/Events/events';
import Register from './Components/Register/register';
import PreviousSynergy from './Components/PreviousSynergy/PreviousSynergy';
import Contact from './Components/Contact/contact';
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/events" element={<Events/>}/>
        <Route path="/register" element={<Register/>}/>
        <Route path="/previous-synergy" element={<PreviousSynergy/>}/>
        <Route path="/contact-us" element={<Contact/>}/>
      </Routes> 
    </Router>
  );
}

export default App;
