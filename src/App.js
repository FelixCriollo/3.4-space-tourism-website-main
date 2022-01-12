import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
import Header from "./Components/Header";
import Home from './pages/home/Home';
import Crew from './pages/crew/Crew';
import Destintation from './pages/destination/Destination';
import Technology from './pages/technology/Technology';
import './app.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Header /> 

        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/crew" element={<Crew />} />
          <Route path="/destination" element={<Destintation />} />
          <Route path="/technology" element={<Technology/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
