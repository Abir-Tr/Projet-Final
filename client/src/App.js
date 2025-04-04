
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import Home from './components/Home'
import { Routes , Route } from 'react-router';
import Reservation from './components/Reservation';
 

const App=()=> {
  return (<>


  <Routes>

    <Route path='/' element={<Home/>}>

    <Route path='Reservation' element={<Reservation/>}/>
    
    </Route>
  </Routes>

  </>
   
  );
}

export default App;
