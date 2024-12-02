import { useState } from "react";
import Homepage from "./pages/Homepage";
import Layout from "./components/Layout";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Sejarah from "./pages/Sejarah";
import Silsilah from "./pages/Silsilah";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <Layout>
                <Homepage />
              </Layout>
            }
          />
          <Route
            path="/sejarah"
            element={
              <Layout>
                <Sejarah />
              </Layout>
            }
          />
          <Route
            path="/silsilah"
            element={
              <Layout>
                <Silsilah />
              </Layout>
            }
          />
          <Route
            path="/login"
            element={
              <Login/>
            }
          />
          <Route
            path="/register"
            element={
              <Register/>
            }
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
