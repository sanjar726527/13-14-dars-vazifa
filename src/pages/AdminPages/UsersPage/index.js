import React from "react";
import { Table } from "react-bootstrap";
import { FiEdit } from "react-icons/fi";
import { RiDeleteBin5Line } from "react-icons/ri";
import UsersPageWrapper from "./UsersPageWrapper";

export const UsersPage = () => {
  return (
    <UsersPageWrapper>
      <div className="container">
        <div className="applications-title">
          <h2>Arizlar</h2>
          <span>Yetib kelgan arizalarni kuzatishingiz mumkin</span>
        </div>
        <div className="applications-table pt-3">
          <Table>
            <thead>
              <tr>
                <th>#</th>
                <th>To’liq ismi</th>
                <th>Telefon raqami</th>
                <th>Roli</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>Abdulaziz Ochilov</td>
                <td>+998 97 888 10 27</td>
                <td>admin</td>
                <td colSpan={2}>
                  <button className="btn">
                    <FiEdit size={22} />
                  </button>
                  <button className="btn">
                    <RiDeleteBin5Line fill="red" size={22} />
                  </button>
                </td>
              </tr>
              <tr>
                <td>2</td>
                <td>Ergashev Islom</td>
                <td>+998 97 888 12 35</td>
                <td>yetkazuvchi</td>
                <td colSpan={2}>
                  <button className="btn">
                    <FiEdit size={22} />
                  </button>
                  <button className="btn">
                    <RiDeleteBin5Line fill="red" size={22} />
                  </button>
                </td>
              </tr>
              <tr>
                <td>3</td>
                <td>Samidullayev Bahodir</td>
                <td>+998 93 234 10 23</td>
                <td>yetkazuvchi</td>
                <td colSpan={2}>
                  <button className="btn">
                    <FiEdit size={22} />
                  </button>
                  <button className="btn">
                    <RiDeleteBin5Line fill="red" size={22} />
                  </button>
                </td>
              </tr>
              <tr>
                <td>4</td>
                <td>To’ramurodov Shoislom</td>
                <td>+998 90 375 67 15</td>
                <td>yetkazuvchi</td>
                <td colSpan={2}>
                  <button className="btn">
                    <FiEdit size={22} />
                  </button>
                  <button className="btn">
                    <RiDeleteBin5Line fill="red" size={22} />
                  </button>
                </td>
              </tr>
            </tbody>
          </Table>
          <div className="all-price">
            <h5>Jami</h5>
            <h5>4 ta akkaunt</h5>
          </div>
        </div>
      </div>
    </UsersPageWrapper>
  );
};
