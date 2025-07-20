// pages/Signup.tsx
import { useEffect, useState } from "react";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { auth, db } from "../firebase"; // make sure db is imported here
import { doc, setDoc } from "firebase/firestore";
import styles from "./Signup.module.css";

export function Signup() {
  useEffect(() => {
    document.body.classList.add("auth-background");
    return () => document.body.classList.remove("auth-background");
  }, []);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSignup = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError(""); // reset errors on each submit
    try {
      const userCred = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      // Update Firebase Auth profile display name
      await updateProfile(userCred.user, { displayName: name });

      // Create user document in Firestore
      await setDoc(doc(db, "users", userCred.user.uid), {
        name: name,
        email: email,
        avatarUrl: "", // optional: put a default avatar or leave empty
      });
      console.log("User document created in Firestore", userCred.user.uid);

      navigate("/chat"); // redirect after successful signup
    } catch (err: unknown) {
      if (err instanceof Error) setError(err.message);
    }
  };

  return (
    <div className={styles.center}>
      <form className={styles.container} onSubmit={handleSignup}>
        <h1 className={styles.title}>Create Account</h1>

        {error && <p style={{ color: "red" }}>{error}</p>}

        <div className={styles.inputs}>
          <input
            type="text"
            className={styles.input}
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
          <input
            type="email"
            className={styles.input}
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            className={styles.input}
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>

        <div className={styles.buttons}>
          <button type="submit" className={styles.button}>
            Sign Up
          </button>
        </div>
      </form>
    </div>
  );
}
