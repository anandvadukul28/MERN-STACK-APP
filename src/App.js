import './App.css';
import Home from './Components/Home';
import CreateUser from './Components/CreateUser';
import ShowDeleteUser from './Components/ShowDeleteUser';
import UpdateUser from './Components/UpdateUser';

import {BrowserRouter,Link,Routes,Route} from 'react-router-dom';


function App() {

  return (
    <>
    <BrowserRouter>
    <nav className="navbar navbar-light bg-light">
      <div className="container-fluid">
      <div className="nav-item">
        <Link to="/Home">HomePage</Link>  </div>
  <div className="nav-item">

          <Link to="/CreateUser">Log-In</Link>  </div>
  <div className="nav-item">
        <Link to="/ShowDeleteUser">Users</Link>
      </div>
  

      </div>



    </nav>

    <Routes>
    <Route exact path='/Home' element={< Home />}></Route>
    <Route exact path='/CreateUser' element={< CreateUser />}></Route>
      <Route exact path='/ShowDeleteUser' element={< ShowDeleteUser />}></Route>
      <Route exact path='/UpdateUser/:id' element={< UpdateUser />}></Route>



</Routes>


</BrowserRouter>

  </>
  );
}

export default App;
