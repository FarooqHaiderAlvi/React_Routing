import {Link, useNavigate} from 'react-router-dom'

export default function Home() {

  
       const navigate= useNavigate();
       const navToPage=(url)=>{
         navigate(url);
       }
    
    return (
        <>
           I am home section of this application.         
            <button className="btn btn-danger" ><Link to="/About" style={{'textDecoration':'none','color':'white'}}>About Page</Link> </button>
<br/>
            <button className="btn btn-primary" onClick={()=>{navToPage('/Filter')}} > go to Filter</button>
            <button className="btn btn-primary mx-3" onClick={()=>{navToPage('/About')}} > User</button>
        </>
    )
}
