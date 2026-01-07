import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from "react";

import "bootstrap-icons/font/bootstrap-icons.css";

import Home from "./pages/Home";

import Container from "./classes/components/Container";

import "./main.scss";

export default class App extends React.Component {
  render() {
    return (
      <>
        <BrowserRouter>
          <Container fullscreen_x></Container>
          <Routes>
            <Route index element={<Home />}></Route>
          </Routes>
        </BrowserRouter>
      </>
    );
  }
}
