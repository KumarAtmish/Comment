import React from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";
import { adminPassword } from "./Validation";

export default class Navbar extends React.Component {
  render() {
    return (
      <>
        <div className="container-fluid nav_bg">
          <div className="row">
            <div className="col-10 mx-auto">
              <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid">
                  <NavLink className="navbar-brand" to="/">
                    <img
                      src="https://cdn2.iconfinder.com/data/icons/social-networks-26/1600/social-07-128.png"
                      alt=""
                      width="45"
                      height="40"
                    />
                    MyProject
                  </NavLink>
                  <div className="text-end">
                    <div className="card-header bg-primary fw-bold ">
                      {adminPassword.name}
                    </div>
                  </div>

                  <button
                    className="navbar-toggler"
                    type="button"
                    data-toggle="collapse"
                    data-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                  >
                    <span className="navbar-toggler-icon"></span>
                  </button>
                  <div
                    className="collapse navbar-collapse"
                    id="navbarSupportedContent"
                  >
                    <ul className="navbar-nav ml-auto mb-2 mb-lg-0">
                      <li className="nav-item">
                        <NavLink
                          activeClassName="menu_active"
                          exact
                          className="nav-link active"
                          aria-current="page"
                          to="/"
                        >
                          Home
                        </NavLink>
                      </li>
                    </ul>
                  </div>
                </div>
              </nav>
            </div>
          </div>
        </div>
      </>
    );
  }
}
