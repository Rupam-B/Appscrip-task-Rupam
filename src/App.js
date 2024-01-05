import './App.css';
import { Routes,Route } from 'react-router-dom'
// import { ToastContainer } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
import Home from './components/Home/Home';
import Navbar from './components/Navbar/Navbar';
import Sidebar from './components/Sidebar/Sidebar'
import { useSelector } from 'react-redux';


function App() {

  const sidebarData = useSelector((state)=>state.OpenCloseSidebar)
  console.log(sidebarData)
  return (
    <>
    <Navbar/>
    {/* <ToastContainer /> */}
    <div className='arrangement'>
    <Sidebar/>
    <div className={sidebarData===1?'changingScreen-Enlarge':'changingScreen'}>
    <Routes>
    <Route path="/" element={<Home/>}/>
    </Routes>
    </div>
    </div>
    </>
  );
}

export default App;
