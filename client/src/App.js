import { Route } from "react-router-dom";
import {Landing, Home, Detail,Form} from './views';
import { useLocation } from "react-router-dom/cjs/react-router-dom.min";
import NavBar from "./components/NavBar/NavBar";

function App() {

  const location = useLocation()

  return (
    <div className="App">
        {location.pathname !== '/' && (<NavBar/>)}
        <Route exact path='/' component={Landing}/>
        <Route path='/home' component={Home}/>
        <Route path='/detail' component={Detail}/>
        <Route path='/create' component={Form}/>
    </div>
  );
}

export default App;
