import { useParams } from "react-router";



function User(){

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