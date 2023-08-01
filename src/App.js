import { Route, Routes} from 'react-router-dom';
import './App.css';
import Login from './Screens/Login';
import DashBoard from './Screens/DashBoard';
import { AuthProvider } from './Screens/GlobalContext';
import AssetLists from './Screens/AssetLists';
// import Navbar from './Screens/Navbar';

function App() {

  // const location= useLocation();
  // const showNavbar=location.pathname!=='/';
  return (
    <div className="App">
        <AuthProvider>
      <Routes>
        <Route path='/' element={<Login/>}></Route>
        <Route path='/dashboard' element={<DashBoard/>}></Route>
        <Route path='/dashboard/assetlists' element={<AssetLists/>}></Route>
      </Routes>
        </AuthProvider>
    </div>
  );
}

export default App;
