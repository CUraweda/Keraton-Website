import { useState } from "react";
import Homepage from "./pages/Homepage";
import Layout from "./components/Layout";

function App() {
  return (
    <>
      <Layout>
        <Homepage />
      </Layout>
    </>
  );
}

export default App;
