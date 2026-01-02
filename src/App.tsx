import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from "react";

import Home from "./pages/Home";

import Container from "./components/Container";
import Title from "./components/Title";

import "./App.css";

export default class App extends React.Component {
  render() {
    return (
      <>
        <BrowserRouter>
          <Container fullscreen_x>
            <Title>Xenon</Title>
          </Container>
          <Routes>
            <Route index element={<Home />}></Route>
          </Routes>
        </BrowserRouter>
      </>
    );
  }
}
