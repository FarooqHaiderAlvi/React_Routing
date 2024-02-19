import { Link, Outlet } from "react-router-dom";

function Business(){

    return(
        <>
        <div>We have following Businesses</div>
        <Link  className="mx-2" to="FastFood">FastFood</Link>
        <Link to="Beverages">Beverages</Link>
        
        <Outlet/>
        </>
    )
}

export default Business;