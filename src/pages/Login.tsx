// src/pages/Login.tsx
import { useEffect, useState } from "react";
import {
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";
import { auth } from "../firebase";
import { useNavigate, Link } from "react-router-dom";

import classes from "./Login.module.css";

export function Login() {
  useEffect(() => {
    document.body.classList.add("auth-background");
    return () => document.body.classList.remove("auth-background");
  }, []);

  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [error, setError] = useState<string>("");
  const navigate = useNavigate();

  const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate("/");
    } catch (err: unknown) {
      if (err instanceof Error) setError(err.message);
    }
  };

  const loginWithGoogle = async () => {
    const provider = new GoogleAuthProvider();
    try {
      await signInWithPopup(auth, provider);
      navigate("/");
    } catch (err: unknown) {
      if (err instanceof Error) setError(err.message);
    }
  };

  return (
    <div className={classes.center}>
      <form onSubmit={handleLogin} className={classes.container}>
        <h2 className={classes.title}>Login</h2>
        {error && <p>{error}</p>}
        <div className={classes.inputs}>
          <input
            type="email"
            className={classes.input}
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            className={classes.input}
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <div className={classes.buttons}>
          <button type="submit" className={classes.button}>
            Login
          </button>
          <button
            className={classes.button}
            type="button"
            onClick={loginWithGoogle}
          >
            Login with Google
          </button>
        </div>
        <div className={classes.acc}>
          <p>Don't have an account?</p>
          <p>
            <Link to="/signup">Sign up</Link>
          </p>
        </div>
      </form>
    </div>
  );
}
