import './App.css';
/*import Ui from '*/
/*import StateDemo from './components/state/StateDemo';*/
/*import StateDemo from './components/state/StateDemo';*/
import Profiles from './components/state/Profiles';
import Parent from './components/Props/Parent';
/*import A from './components/PropsDriling/A';*/
/*import Parent1 from './components/contextapi/Parent1';*/
import User from './components/axios/User';
import UserInfo from './components/useeffect/UserInfo';
import Nav from './components/route/Nav';
import Products from './components/route/Products';
import { Routes,Route } from 'react-router-dom';
import Electronics from './components/route/Electronics';
import Jewellery from './components/route/Jewellery';
import Retails from './components/route/Retails';
import Garments from './components/route/Garments';
import "bootstrap/dist/css/bootstrap.css";
import Main from './components/condrender/Main';

function App() {
  return (
    <div className="App">
      <h2>REACT APPLICATION</h2>
     <Nav/>
     <Routes>
      <Route path={"/profile"} element={<Profiles/>}/>
      <Route path={"/user"} element={<User/>}/>
      <Route path={"/uinfo"} element={<UserInfo/>}/>
      <Route path={"/props"} element={<Parent/>}/>
      <Route path={"/condrend"} element={<Main/>}/>
      <Route path={"/products"} element={<Products/>}>
      <Route path={"electronics"} element={<Electronics/>}/>
      <Route path={"garments"} element={<Garments/>}/>
      <Route path={"jewellery"} element={<Jewellery/>}/>
      <Route path={"retails"} element={<Retails/>}/>
</Route>
     
     </Routes>
    </div>
    
  );
}

export default App;
