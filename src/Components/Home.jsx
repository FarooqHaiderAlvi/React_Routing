import {Link} from 'react-router-dom'

export default function Home() {
    return (
        <>
           I am home section of this application.         
            <Link to="/About">About Page</Link>
        </>
    )
}
