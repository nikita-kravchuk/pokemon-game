import { useEffect, useState } from "react";

import s from "./logInForm.module.css";

const LogInForm = ({ onSubmit, isResetField = false }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLogin, setLogin] = useState(true);

  useEffect(() => {
    setEmail("");
    setPassword("");
  }, [isResetField]);

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit &&
      onSubmit({
        type: isLogin ? "login" : "signup",
        email,
        password,
      });
    setEmail("");
    setPassword("");
  };
  return (
    <form onSubmit={handleSubmit}>
      <div className={s.root}>
        <input
          className={s.input}
          label="Email"
          value={email}
          type="text"
          name="email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <span className={s.highlight}></span>
        <span className={s.bar}></span>
        <label className={s.label}>Email</label>
      </div>
      <div className={s.root}>
        <input
          className={s.input}
          label="Password"
          value={password}
          type="password"
          name="password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <span className={s.highlight}></span>
        <span className={s.bar}></span>
        <label className={s.label}>Password</label>
      </div>
      <div className={s.flex}>
        <button>{isLogin ? "Log In" : "Sign Up"}</button>
        <div className={s.link} onClick={() => setLogin(!isLogin)}>
          {isLogin ? "Register" : "Log In"}
        </div>
      </div>
    </form>
  );
};

export default LogInForm;
