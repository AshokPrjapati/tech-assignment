import { FormEvent, useRef, useState } from "react";
import { IoEyeOffOutline, IoEyeOutline } from "react-icons/io5";
import styles from "./Authentication.module.css";

const Authentication = () => {
    const [signin, setSignin] = useState<boolean>(true);
    const [showPassword, setShowPassword] = useState<boolean>(false);
    const [loading, setLoading] = useState<boolean>(false);

    const formRef = useRef(null);

    // handel the submission of form
    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        // credentials for signIn
        let credentials = {};

        if (formRef.current) {
            credentials = {
                email: formRef.current.email.value,
                password: formRef.current.password.value
            }
        }

        // for Signup
        if (!signin) {
            credentials = { ...credentials, name: formRef.current.name.value }
        }

        // console.log(credentials);

    }

    return (
        <div className={styles.form_container}>
            <h1>{signin ? "SignIn" : "Signup"}</h1>
            <form ref={formRef} onSubmit={handleSubmit}>
                {/* User name Field */}
                <div
                    className={styles.input_box}
                    style={{ display: signin ? "none" : "block" }}
                >
                    <input type="text" id="name" />
                    <label htmlFor="name">Name</label>
                </div>
                {/* User email field */}
                <div className={styles.input_box}>
                    <input type="text" id="email" required />
                    <label htmlFor="email">Email</label>
                </div>
                {/* User password field */}
                <div className={styles.input_box}>
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
                    <label htmlFor="password">Password</label>
                </div>
                {/* Submit button */}
                <div className={styles.form_submit}>
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
