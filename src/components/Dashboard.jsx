import '../App.css' ;
import { useNavigate  } from 'react-router-dom';
import { useEffect ,useState , useContext} from 'react';
import { ThemeContext } from "../context/themeContext";

const Dashboard = (props)=>{
const { toggle, setToggle } =useContext(ThemeContext);

const setAuth=()=>{
    setToggle(!toggle);
    localStorage.removeItem("auth");
    props.setAuth(false);
}

    return(
       <div className='App'>
            <h1 >Dashboard</h1>
            <h3>Hello.Welcome to our website</h3>
           <button className='btn btn-dark' onClick={setAuth}>logout</button>
       </div>
    )
}
export default Dashboard ;