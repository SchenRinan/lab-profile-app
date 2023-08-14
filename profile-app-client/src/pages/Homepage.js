import { Link } from 'react-router-dom';
import './Homepage.css';


const Homepage = () => {
    return (
        <div className="Homepage">
            <h2>Iron Profile</h2>
            <h3>Today we will create an app with authorization, adding some cool styles!</h3>
            <Link to='/signup'><button>Sign Up</button></Link>
            <Link to='/login'><button>Log In</button></Link>
        </div>
    );
}
 
export default Homepage;