import { useContext } from "react";
import { AuthContext } from "../context/auth.context";
import { Navigate, useParams } from "react-router-dom";

function IsOwner ({children}) {
    const { user, isLoading } = useContext(AuthContext);
    const { _id } = useParams();

    if (isLoading) return <p>Loading ...</p>;
    if(user && user._id === _id){return children}
    else {return <Navigate to='/'/>}
}
 
export default IsOwner;