import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { LoginContext } from "../../App";
import HomeWrapper from "./HomeWrapper";
import { LoginPage } from "../Login";

export const HomePage = () => {
  const { isLogin } = useContext(LoginContext);
  return (
    <HomeWrapper>
      {isLogin ? (
        <div>
          <div className="d-flex align-items-center justify-content-center">
            <h1>Welcome to Home</h1>
          </div>
          <div className="d-flex">
            <Link className="btn btn-danger" to={"/user/home"}>
              User
            </Link>
            <Link className="btn btn-primary  mx-3" to={"/admin/home"}>
              Admin
            </Link>
            <Link className="btn btn-warning me-5" to={"/deliverer/home"}>
              Deliverer
            </Link>
          </div>
        </div>
      ) : (
        <LoginPage />
      )}
    </HomeWrapper>
  );
};
