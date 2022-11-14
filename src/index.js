import React from 'react';
import ReactDOM from 'react-dom/client';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Daily from './pages/daily';
import History from './pages/history';
import Footer from './components/Footer';
  
function App() {
  return (
      <Router>
        <Navbar />
        <h1 className='today'>Our Daily Drink</h1>
        <hr/>
        <Routes>
            <Route exact path='/' element={<Daily />} />
            <Route path='/history' element={<History />} />
        </Routes>
        <Footer />
      </Router>
  );
}
  
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);