import { Route, Routes } from 'react-router-dom';
import './App.css';
import Login from './Screens/Login';
import DashBoard from './Screens/DashBoard';
import { AuthProvider } from './Screens/GlobalContext';

function App() {
  return (
    <div className="App">
        <AuthProvider>
      <Routes>
        <Route path='/dashboard' element={<DashBoard/>}></Route>
        <Route path='/' element={<Login/>}></Route>
      </Routes>
        </AuthProvider>
    </div>
  );
}

export default App;
