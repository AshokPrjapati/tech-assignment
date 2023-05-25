import { useState } from "react";
import { IoEyeOffOutline, IoEyeOutline } from "react-icons/io5";
import styles from "./Authentication.module.css";

const Authentication = () => {
    const [signin, setSignin] = useState<boolean>(true);
    const [showPassword, setShowPassword] = useState<boolean>(false);
    const [loading, setLoading] = useState<boolean>(false);
    return (
        <div className={styles.form_container}>
            <h1>{signin ? "SignIn" : "Signup"}</h1>
            <form>
                {/* User name Field */}
                <div
                    className={styles.input_box}
                    style={{ display: signin ? "none" : "block" }}
                >
                    <label htmlFor="name">Name</label>
                    <input type="text" id="name" />
                </div>
                {/* User email field */}
                <div className={styles.input_box}>
                    <label htmlFor="email">Name</label>
                    <input type="text" id="name" />
                </div>
                {/* User password field */}
                <div className={styles.input_box}>
                    <label htmlFor="password">Password</label>
                    <input
                        id="password"
                        type={showPassword ? "text" : "password"}
                        required
                    />
                    <span
                        role="button"
                        onClick={() => {
                            setShowPassword(!showPassword);
                        }}
                    >
                        {showPassword ? <IoEyeOffOutline /> : <IoEyeOutline />}
                    </span>
                </div>
                {/* Submit button */}
                <div>
                    <input
                        type="submit"
                        value={loading ? "Wait..." : signin ? "Sign in" : "Sign up"}
                        disabled={loading}
                    />
                    <span onClick={() => setSignin(!signin)}>
                        {signin ? "Create an account!" : "Already have an account?"}
                    </span>
                </div>
            </form>
        </div>
    );
};

export default Authentication;
