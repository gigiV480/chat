// components/Header.tsx
import { Link } from "react-router-dom";
import { auth } from "../firebase";
import { useAuthState } from "react-firebase-hooks/auth";

import classes from "./Header.module.css";

export function Header() {
  const [user] = useAuthState(auth);

  return (
    <header className={classes.header}>
      <h1 className={classes.logo}>
        <Link to="/">CHATI</Link>
      </h1>
      <nav>
        {user ? (
          <div className={classes.right}>
            <span className={classes.hello}>
              {" "}
              Hello, {user.displayName || user.email}
            </span>
            <button onClick={() => auth.signOut()} className={classes.button}>
              Logout
            </button>
          </div>
        ) : (
          <>
            <div className={classes.buttons}>
              <Link to="/login">
                <button className={classes.button}>Log in</button>
              </Link>
              <Link to="/signup">
                <button className={classes.button}>Sign up</button>
              </Link>
            </div>
          </>
        )}
      </nav>
    </header>
  );
}
