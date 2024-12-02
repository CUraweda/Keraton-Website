import React, { FC } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

interface Props {
  children?: React.ReactNode;
  name?: string;
}

const Layout: FC<Props> = ({ children }) => {
  return (
    <>
      <div className="w-full min-h-screen flex flex-col" data-theme="light">
        <div className="top-0 sticky">
          <Navbar />
        </div>
        <div>{children}</div>
        <div>
          <Footer />
        </div>
      </div>
    </>
  );
};

export default  Layout;
