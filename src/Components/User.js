import { useParams,useLocation } from "react-router";



function User(){
    
  let currentState=useLocation();
  console.log(currentState);
    const params=useParams();
    const name=params.name;
  return (

    <>
    <div>
        This is {name};
    </div>
    </>
  )
}

export default User;