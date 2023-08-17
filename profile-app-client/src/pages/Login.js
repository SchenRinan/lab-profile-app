import { Link, useNavigate } from 'react-router-dom';
import './Signup.css'
import { useContext, useState } from 'react';
import axios from 'axios';
import { AuthContext } from '../context/auth.context';

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState(undefined);

    const { storeToken, authenticateUser, user } = useContext(AuthContext);
    const navigate = useNavigate();
    
    const handleButton = e => {
        e.preventDefault();
        axios.post('http://localhost:5005/auth/login',{
            username, password
        })
        .then(response => {
            storeToken(response.data.authToken);
            authenticateUser();
            navigate(`/${user._id}`)
        })
        .catch(err => {if(err.response){setErrorMessage(err.response.data.message)}})
    }
    
    return (
        <div className="Signup">
            <div className="column">
                <h2>Log In</h2>
                <form>
                    <label htmlFor="username">Username</label>
                    <input type="text" name="username" id="" required onChange={e=>setUsername(e.target.value)}/>
                    <label htmlFor="password">Password</label>
                    <input type="password" name="password" id="" required onChange={e=>setPassword(e.target.value)}/>
                </form>
                <p>If you don't have an account yet, you can create your account <Link to='/signup'>here</Link>.</p>
                {errorMessage && errorMessage}
            </div>
            <div className="column row">
                <div className="row">
                    <h3>Hello!!</h3>
                    <h4>Awesome to have you at IronProfile again!</h4>
                </div>
                <div className="row">
                    <p>
                        If you signup, you agree with all our terms and conditions where we can do whatever we want with the data!
                    </p>
                    <button onClick={handleButton}>Log In</button>
                </div>
            </div>
        </div>
    );
}
 
export default Login;