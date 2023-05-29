import { Dispatch } from "redux"
import Button from "../components/Button"
import { useDispatch } from "react-redux"
import { logout } from "../redux/auth/auth.action";

const Profile = () => {
    const dispatch: Dispatch<any> = useDispatch();

    const handleLogout = () => {
        dispatch(logout());
    }

    return (
        <div>
            <Button label="Logout" onClick={handleLogout} />
        </div>
    )
}

export default Profile