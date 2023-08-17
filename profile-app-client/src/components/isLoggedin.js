import { useContext } from "react";
import { AuthContext } from "../context/auth.context";
import { Navigate } from "react-router-dom";

function IsLoggedIn ({children}) {
    const { user, isLoading, isLoggedIn } = useContext(AuthContext);

    if (isLoading) return <p>Loading ...</p>;
    if(isLoggedIn) {return <Navigate to={`/${user._id}`} />}
    else {return children}
}
 
export default IsLoggedIn;