
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import Home from './components/Home'
import { Routes , Route } from 'react-router';
import Reservation from './components/Reservation';
import LoginUser from './components/LoginUser';
import ListRooms from './components/ListRooms';
 

const App=()=> {
  return (<>


  <Routes>

    <Route path='/' element={<Home/>}>

    
    <Route path='LoginUser' element={<LoginUser/>}/>
    <Route path='ListRooms' element={<ListRooms/>}/>
    <Route path='Reservation' element={<Reservation/>}/>
    
    </Route>
  </Routes>

  </>
   
  );
}

export default App;
