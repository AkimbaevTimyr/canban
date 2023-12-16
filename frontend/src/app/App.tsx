import './App.css';
import Navbar from '../components/Navbar';
import TopBar from '../components/TopBar';
import { useEffect } from 'react';
import axios from 'axios';

function App() {
  useEffect(() => {
    axios.get('http://batr.com.kz:8090/api/orders')
    .then((resp) => {
      console.log(resp)
    })
    .catch((error) => {
      console.log(error.response)
    }) 
  }, [])
  return (
    <div className='app'>
      <Navbar />
      <TopBar />
    </div>
  );
}

export default App;
