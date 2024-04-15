import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { BiArrowBack } from "react-icons/bi";
import LoginWrapper from "./LoginWrapper";
import { LoginContext } from "../../App";
import { Form } from "react-bootstrap";

export const LoginPage = () => {
  const navigate = useNavigate();
  const { isLogin, setIsLogin } = useContext(LoginContext);
  const [input, setInput] = useState([]);
  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setInput((prev) => {
      return { ...prev, [name]: value };
    });
  };
  const addInput = () => {
    console.log(input);
    setIsLogin(true);
    navigate("/");
  };
  return (
    <LoginWrapper>
      <form className="form-signin " onSubmit={addInput}>
        <h1 className="h2 mb-3 font-weight-normal">Please sign in</h1>
        <label htmlFor="inputEmail" className="sr-only">
          Email address
        </label>
        <input
          onChange={handleChange}
          id="validationCustom01"
          type="email"
          name="email"
          placeholder="name@example.com"
          className="form-control"
          required
        />
        <label htmlFor="inputPassword" className="sr-only">
          Password
        </label>
        <input
          onChange={handleChange}
          type="password"
          placeholder="@aBf!23v@$"
          name="password"
          className="form-control"
          required
        />
        <div className="checkbox mb-3">
          <label>
            <input type="checkbox" value="remember-me" /> Remember me
          </label>
        </div>
        <button className="btn btn-primary">Sign in</button>
      </form>
    </LoginWrapper>
  );
};
