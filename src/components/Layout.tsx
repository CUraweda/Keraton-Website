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
        <div className="top-0 sticky z-50">
          <Navbar />
        </div>
        <div>{children}</div>
        <div className="bottom-0  z-50">
          <Footer />
        </div>
      </div>
    </>
  );
};

export default  Layout;
