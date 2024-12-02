import React from "react";
import bg from "../assets/images/bg1.png";

const Homepage = () => {
  return (
    <>
      <div>
        {/* //hero section */}
        <div
          className="hero min-h-screen"
          style={{
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(${bg})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="hero-content text-neutral-content text-center w-full">
            <div className="w-full">
              <p className="mb-5 text-yellow-400 text-xl">
                Warisan Leluhur di Cirebon
              </p>
              <h1 className="mb-5 text-5xl font-bold text-white">
                Bersama Lestarikan Keraton Tertua di Kota Cirebon
              </h1>
            </div>
          </div>
        </div>
        {/* //tentang section */}
        <div
          className="w-full"
          style={{
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(${bg})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
            <div>
                <p className="text-yellow-400 text-xl">Tentang</p>
            </div>
        </div>
      </div>
    </>
  );
};

export default Homepage;
