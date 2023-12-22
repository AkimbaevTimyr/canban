import './App.css';
import Navbar from '../components/Navbar';
import TopBar from '../components/TopBar';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

function App() {
  const isAuth = localStorage.getItem('isAuth');
  let navigate = useNavigate();
  useEffect(() => {
    if(isAuth == 'false'){
      navigate('/login')
    }
  })
  return (
    <div className='app'>
      <Navbar />
      <TopBar />
    </div>
  );
}

export default App;
