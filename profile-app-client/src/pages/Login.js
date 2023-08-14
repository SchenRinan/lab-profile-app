import { Link } from 'react-router-dom';
import './Signup.css'

const login = () => {
    return (
        <div className="Signup">
            <div className="column">
                <h2>Log In</h2>
                <form>
                    <label htmlFor="username">Username</label>
                    <input type="text" name="username" id="" required />
                    <label htmlFor="password">Password</label>
                    <input type="password" name="password" id="" required />
                </form>
                <p>If you don't have an account yet, you can create your account <Link to='/signup'>here</Link>.</p>
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
                    <button>Log In</button>
                </div>
            </div>
        </div>
    );
}
 
export default login;