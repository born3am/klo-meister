import React from "react";

import { Routes, NavLink, Route } from "react-router";

import "./App.css";
import Door from "./components/Door";
import Me from "./components/Me/Me";
import Merkel from "./components/Merkel/Merkel";
import NotFound from "./components/NotFound.js/NotFound";

import "bootstrap/dist/css/bootstrap.css";
import Container from "react-bootstrap/Container";

export default function App() {
  return (
    <div className="body">
      <nav className="navBar">
        <Container>
          <ul>
            <li>
              {" "}
              <NavLink activeClassName="selected" to={"/home"}>
                Home
              </NavLink>{" "}
            </li>
            <li>
              {" "}
              <NavLink activeClassName="selected" to={"/merkel"}>
                Poke Merkel
              </NavLink>{" "}
            </li>
            <li>
              {" "}
              <NavLink activeClassName="selected" to={"/me"}>
                Poke Me
              </NavLink>{" "}
            </li>
          </ul>
        </Container>
      </nav>

      <Routes>
        <Route path="/" element={<Door />} />
        <Route path="/home" element={<Door />} />
        <Route path="/merkel" element={<Merkel />} />
        <Route path="/me" element={<Me />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}
