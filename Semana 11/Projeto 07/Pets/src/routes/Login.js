import React from "react";
import { useAuth } from "../context/auth-context";
import { useLocation, useNavigate } from "react-router-dom";

export default function Acesse() {
  const auth = useAuth();
  const location = useLocation();
  const navigate = useNavigate();

  const from = location.state?.from?.pathname || "/";

  const Submit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const email = formData.get("email");
    const password = formData.get("password");

    const data = {
      email,
      password,
    };
    auth.login(data, () => navigate(from, { replace: true }));
  };

  return (
    <div>
      Login
      <form onSubmit={Submit}>
        <label>
          E-mail: <input type="email" name="email" />
        </label>
        <label>
          Senha: <input type="password" name="password" />
        </label>
        <button type="submit">Login</button>
      </form>
    </div>
  );
}