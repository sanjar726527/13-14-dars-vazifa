import React from "react";
import { Dropdown } from "react-bootstrap";
import { FiUser } from "react-icons/fi";
import { HiOutlineClipboardList } from "react-icons/hi";
import { SlBasket } from "react-icons/sl";
import { TfiUser } from "react-icons/tfi";
import { Link, Outlet } from "react-router-dom";
import logo from "../../assets/logo.png";
import AdminPageWrapper from "../AdminPage/AdminPageWrapper";

export const AdminPage = () => {
  return (
    <AdminPageWrapper>
      <aside className="p-3 shadow">
        <div className="aside-row">
          <div className="logo">
            <Link to="/">
              <img src={logo} alt="logo" />
            </Link>
          </div>
        </div>
      </aside>
      <div className="rightSide">
        <header className="p-3 shadow">
          <div className="container">
            <div class="icon-one">
              <div class="hamburger hamburger-one"></div>
            </div>
            <div className="user-login">
              <Dropdown>
                <Dropdown.Toggle id="dropdown-basic">
                  <TfiUser className="user-avatar" size={35} />
                  <p className="user-name">Axror</p>
                </Dropdown.Toggle>

                <Dropdown.Menu>
                  <Dropdown.Item href="//action-1">
                    <FiUser className="me-2" size={20} /> Профиль
                  </Dropdown.Item>
                  <Dropdown.Item href="//action-2">
                    <HiOutlineClipboardList className="me-2" size={20} />
                    Мои заказы
                  </Dropdown.Item>
                  <Dropdown.Item href="//action-3">
                    <SlBasket className="me-2" size={20} /> Корзина
                  </Dropdown.Item>
                  <Dropdown.Item href="//action-4">Выйти</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </div>
          </div>
        </header>
        <main className="p-3">
          <Outlet />
        </main>
      </div>
    </AdminPageWrapper>
  );
};
