import React from "react";
import bg from "../assets/images/bg1.png";
import ReactPlayer from "react-player";

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
        <div className="w-full py-5 flex flex-col sm:flex-row justify-center items-center px-5 gap-2">
          <div className="w-full sm:w-1/2 flex flex-col justify-center items-center gap-3 text-center">
            <p className="text-yellow-400 text-xl">Tentang</p>
            <p className="text-5xl">Keraton Kesepuhan Cirebon</p>
            <p className="text-sm">
              Pada awai pembangunannya. Keraton Kasepuhan dibangun oleh Pangeran
              Emas Zainul Arifin dengan maksud untuk memperluas bangunan
              pesanggerahan Keraton Pangkuwati
            </p>
          </div>
          <div className="w-full sm:w-1/2 flex flex-col justify-center items-center gap-3 text-center">
            <ReactPlayer
              url="https://www.youtube.com/watch?v=XdiSL6fzW-Q"
              controls
              width="100%"
              
            />
          </div>
        </div>

        {/* section video youtube */}
        <div className="w-full p-5 "></div>
      </div>
    </>
  );
};

export default Homepage;
