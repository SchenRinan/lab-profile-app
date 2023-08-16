import { useParams } from "react-router-dom";

const Profile = () => {
    const {_id} = useParams();
    
    return (
        <div>
            {_id && _id}
        </div>
    );
}
 
export default Profile;