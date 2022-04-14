import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './Pages/About/About';
import Home from './Pages/Home/Home/Home';
// import Service from './Pages/Home/Service/Service';
import ServiceDetail from './Pages/ServiceDetail/ServiceDetail';
import Footer from './Pages/Shared/Footer/Footer';
import Header from './Pages/Shared/Header/Header';

function App() {
  return (
    <div className='App'>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/service/:serviceID' element={<ServiceDetail />}>
          {/* <Route path=':serviceID' element={<ServiceDetail />} /> */}
        </Route>
        <Route path='/about' element={<About />}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
