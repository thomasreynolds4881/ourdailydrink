import React from 'react';
import ReactDOM from 'react-dom/client';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Daily from './pages/daily';
import History from './pages/history';
import About from './pages/about';
import logo from './images/6.png'
  
function App() {
  return (
      <Router>
        <Navbar />
        <div className="logo-container">
          <img className="logo" src={logo} alt="logo"/>
        </div>
        <div className="spacer"/>
        <Routes>
          <Route exact path='/' element={<Daily />} />
          <Route path='/history' element={<History />} />
          <Route path='/about' element={<About />} />
        </Routes>
      </Router>
  );
}
  
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);