import { NavLink } from "react-router-dom";
import styles from "../../styles/Navbar.module.css";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";

const Navbar = () => {
    const { userCredential, authenticated } = useSelector((store: RootState) => store.auth);

    // navlinks list
    const list = [
        { name: "Home", path: "/" },
        { name: "Dashboard", path: "/dashboard" },
    ];

    // links based on authentication state
    if (authenticated) list.push({ name: userCredential.name, path: "/profile" });
    else list.push({ name: "Signin/Signup", path: "/auth" })

    return (
        <div className={styles.navbar}>
            <ul>
                {list.map((link) => (
                    <NavLink
                        className={({ isActive }) =>
                            isActive ? styles.active : styles.default
                        }
                        key={link.path}
                        to={link.path}
                    >
                        {link.name}
                    </NavLink>
                ))}
            </ul>
        </div>
    );
};

export default Navbar;
