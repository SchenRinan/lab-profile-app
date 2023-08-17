// import { useParams } from "react-router-dom";
import { AuthContext } from "../context/auth.context";
import { useContext } from "react";
import './Signup.css'

const Profile = () => {
    // const {_id} = useParams();
    const { user, logOutUser } = useContext(AuthContext);

    const handleButton = e => {
        logOutUser();
    }

    return (
        <div className="Signup">
            {user &&
            <div className="column">
                <h2>Profile</h2>
                <p>Username</p>
                <h3>{user.username}</h3>
                <p>Campus</p>
                <h3>{user.campus}</h3>
                <p>Course</p>
                <h3>{user.course}</h3>
                <br />
                <br />
                <p className="logout" style={{color:'red', fontWeight:'bolder', paddingLeft:'30%'}}><span style={{cursor:'pointer'}} onClick={handleButton}>Logout</span></p>
            </div>
            }
            
            
            {/* {_id && user.username} */}
        </div>
    );
}
 
export default Profile;