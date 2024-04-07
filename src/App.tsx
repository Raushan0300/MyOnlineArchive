import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import HomePage from './components/HomePage/HomePage';
import FooterPage from './components/FooterPage/FooterPage';
import LoginPage from './components/LoginPage/LoginPage';
import Dashboard from './components/Dashboard/Dashboard';
import YoutubePage from './components/YoutubePage/YoutubePage';

function App() {

  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<HomePage />} />
      <Route path='/login' element={<LoginPage />} />
      <Route path='/dashboard' element={<Dashboard />} />
      <Route path='/youtube' element={<YoutubePage />} />
    </Routes>
    </BrowserRouter>
    <FooterPage />
    </>
  )
}

export default App;
