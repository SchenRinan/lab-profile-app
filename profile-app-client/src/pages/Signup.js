import { useState } from 'react';
import './Signup.css'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

// const API_URL = "http://localhost:5005";


const Signup = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [campus, setCampus] = useState("");
    const [course, setCourse] = useState("");
    const [errorMessage, setErrorMessage] = useState(undefined);

    const navigate = useNavigate();
  
    const handleUsername = (e) => setUsername(e.target.value);
    const handlePassword = (e) => setPassword(e.target.value);
    const handleCampus = (e) => setCampus(e.target.value);
    const handleCourse = (e) => setCourse(e.target.value);

    const handleSignupSubmit = (e) => {
        e.preventDefault();
        axios.post('http://localhost:5005/auth/signup', {
            username: username,
            password: password,
            campus: campus,
            course: course,
        })
        .then(response => {alert('Sign Up successful'); navigate(`/login`)})
        .catch((error) => {
            const errorDescription = error.response.data.message;
            setErrorMessage(errorDescription);
          })
    };

    return (
        <div className="Signup">
            <div className="column">
                <h2>Sign Up</h2>
                <form>
                    <label htmlFor="username">Username</label>
                    <input type="text" name="username" id="" required onChange={handleUsername} />
                    <label htmlFor="password">Password</label>
                    <input type="password" name="password" id="" required onChange={handlePassword} />
                    <label htmlFor="campus">Campus</label>
                    <select name="campus" id="" required onChange={handleCampus}>
                        <option value=""></option>
                        <option value="Madrid">Madrid</option>
                        <option value="Barcelona">Barcelona</option>
                        <option value="Miami">Miami</option>
                        <option value="Paris">Paris</option>
                        <option value="Berlin">Berlin</option>
                        <option value="Amsterdam">Amsterdam</option>
                        <option value="México">México</option>
                        <option value="Sao Paulo">Sao Paulo</option>
                        <option value="Lisbon">Lisbon</option>
                        <option value="Remote">Remote</option>
                    </select>
                    <label htmlFor="course">Course</label>
                    <select name="course" id="" required onChange={handleCourse}>
                        <option value=""></option>
                        <option value="Web Dev">Web Dev</option>
                        <option value="UX/UI">UX/UI</option>
                        <option value="Data Analytics">Data Analytics</option>
                        <option value="Cyber Security">Cyber Security</option>
                    </select>
                </form>
                {errorMessage && <p style={{color:`red`}}>{errorMessage}</p>}
            </div>
            <div className="column row">
                <div className="row">
                    <h3>Hello!!</h3>
                    <h4>Welcome to IronProfile!</h4>
                </div>
                <div className="row">
                    <p>
                        If you signup, you agree with all our terms and conditions where we can do whatever we want with the data!
                    </p>
                    <button onClick={handleSignupSubmit}>Create the Account</button>
                </div>
            </div>
        </div>
    );
}
 
export default Signup;