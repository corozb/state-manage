import {Link} from 'react-router-dom'

function Home() {
    return (
        <>
        <Link to='/state'>
            <button>Manage State</button>   
        </Link>
        <Link to='/signup'>
            <button>Sign Up</button>   
        </Link>
        </>
    )
}

export default Home
