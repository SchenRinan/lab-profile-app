import './Signup.css'

const Signup = () => {
    return (
        <div className="Signup">
            <div className="column">
                <h2>Sign Up</h2>
                <form>
                    <label htmlFor="username">Username</label>
                    <input type="text" name="username" id="" required />
                    <label htmlFor="password">Password</label>
                    <input type="password" name="password" id="" required />
                    <label htmlFor="campus">Campus</label>
                    <select name="campus" id="" required>
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
                    <select name="course" id="" required>
                        <option value=""></option>
                        <option value="Web Dev">Web Dev</option>
                        <option value="UX/UI">UX/UI</option>
                        <option value="Data Analytics">Data Analytics</option>
                        <option value="Cyber Security">Cyber Security</option>
                    </select>
                </form>
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
                    <button>Create the Account</button>
                </div>
            </div>
        </div>
    );
}
 
export default Signup;