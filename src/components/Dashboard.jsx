import '../App.css' ;
import { Navigate } from 'react-router-dom';
import { useEffect ,useState , useContext} from 'react';
const Dashboard = (props)=>{

    // const [check , setCheck] = useState(false);
    // const [flag , setFlag]  =useState(false)
    // const [userEmail , setUserEmail] = useState("");
//  useEffect(()=>{
//     const user_session =  JSON.parse(localStorage.getItem('user_session'))
//      console.log(user_session);
//     if(user_session==null){
//       setCheck(!check)
//     }else{
//         setUserEmail(user_session)
//     }
//  },[flag])
//  if(check==true){
//      return  <Navigate to='/'  />
//  }

const logout =()=>{
    localStorage.removeItem("auth");
    props.setAuth(false)
    if(props.auth==false){
        return <Navigate to="/"></Navigate>
    }
}
    return(
       <div className='App'>
            <h1 >Dashboard</h1>
            <h3>Hello.Welcome to our website</h3>
           <button className='btn btn-dark' onClick={logout}>logout</button>
       </div>
    )
}
export default Dashboard ;