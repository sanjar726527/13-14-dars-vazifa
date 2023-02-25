import React from "react";
import { Dropdown } from "react-bootstrap";
import { FiUser } from "react-icons/fi";
import { HiOutlineClipboardList } from "react-icons/hi";
import { SlBasket } from "react-icons/sl";
import { TfiUser } from "react-icons/tfi";
import { RiDonutChartFill } from "react-icons/ri";
import { BsPlusLg } from "react-icons/bs";
import { ImCheckmark2 } from "react-icons/im";
import { FaRegChartBar, FaUsers } from "react-icons/fa";
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
          <div className="list-group">
            <Link to={"/admin"} className="list-card">
              <div className="card-icon">
                <RiDonutChartFill size={22} color="#78909C" />
              </div>
              <div className="card-info">
                <h5 className="title">Arizalar</h5>
                <span className="text">
                  Yetib kelgan arizalarni kuzatish mumkin
                </span>
              </div>
            </Link>
            <Link to={"/admin/delivered"} className="list-card">
              <div className="card-icon">
                <ImCheckmark2 size={22} color="#78909C" />
              </div>
              <div className="card-info">
                <h5 className="title">Yetkazilgan</h5>
                <span className="text">
                  Yetkazilgan taomlar ro’yxati bilan tanishing
                </span>
              </div>
            </Link>
            <Link to={"/admin/statistics"} className="list-card">
              <div className="card-icon">
                <FaRegChartBar size={22} color="#78909C" />
              </div>
              <div className="card-info">
                <h5 className="title">Statistika</h5>
                <span className="text">
                  Diagrammalar bilan ishlangan statistika
                </span>
              </div>
            </Link>
            <Link to={"/admin/add"} className="list-card">
              <div className="card-icon">
                <BsPlusLg size={22} color="#78909C" />
              </div>
              <div className="card-info">
                <h5 className="title">Qo’shish</h5>
                <span className="text">Yangi kategoriya/taom qo’shish</span>
              </div>
            </Link>
            <Link to={"/admin/users"} className="list-card">
              <div className="card-icon">
                <FaUsers size={22} color="#78909C" />
              </div>
              <div className="card-info">
                <h5 className="title">Foydalanuvchilar</h5>
                <span className="text" style={{ color: "#F3AA18" }}>
                  Rollarni biriktirishingiz mumkin
                </span>
              </div>
            </Link>
          </div>
        </div>
      </aside>
      <div className="rightSide">
        <header className="p-3 shadow">
          <div className="container">
            <div className="icon-one">
              <div className="hamburger hamburger-one"></div>
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
        <main className="pt-4 ps-3">
          <Outlet />
        </main>
      </div>
    </AdminPageWrapper>
  );
};
