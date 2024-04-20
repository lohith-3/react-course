import { useEffect, useState } from "react";

import { useNavigate } from "react-router-dom";

import PageNav from "../components/PageNav";
import Button from "../components/Button";

import { useAuth } from "../context/FakeAuthContext";

import styles from "./Login.module.css";

const defaultFormFields = {
  email: "jack@example.com",
  password: "qwerty",
};

// jack@example.com
// qwerty

export default function Login() {
  const navigate = useNavigate();
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { email, password } = formFields;

  const { login, isAuthenticated } = useAuth();

  useEffect(() => {
    if (isAuthenticated) {
      navigate("/app", { replace: true });
    }
  }, [isAuthenticated]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (email && password) login(email, password);
    else alert("Please fill the values");
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value });
  };

  return (
    <main className={styles.login}>
      <PageNav />
      <form className={styles.form} onSubmit={handleSubmit}>
        <div className={styles.row}>
          <label htmlFor="email">Email address</label>
          <input
            type="email"
            id="email"
            onChange={handleChange}
            name="email"
            value={email}
          />
        </div>

        <div className={styles.row}>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            onChange={handleChange}
            value={password}
          />
        </div>

        <div>
          <Button type="primary">LOGIN</Button>
        </div>
      </form>
    </main>
  );
}
