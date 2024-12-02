import React from "react";
import bg from "../assets/images/bg1.png";
import bg2 from "../assets/images/megaMendung.jpg";
import section from "../assets/images/section-4a.png";
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
              <h1 className="mb-5 text-4xl sm:text-6xl font-bold text-white">
                Bersama Lestarikan Keraton Tertua di Kota Cirebon
              </h1>
            </div>
          </div>
        </div>

        <div className="relative">
          <div className="absolute inset-0">
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{
                backgroundImage: `url(${bg2})`,
                opacity: 0.5,
                pointerEvents: "none",
              }}
            ></div>
          </div>

          <div className="relative w-full py-20 flex flex-col sm:flex-row justify-center items-center px-5 gap-2 bg-gradient-to-b sm:bg-gradient-to-r from-yellow-200">
            <div className="w-full sm:w-1/2 flex flex-col justify-center items-center gap-3 text-center">
              <p className="text-yellow-800 text-3xl font-bold">Tentang</p>
              <p className="text-5xl">Keraton Kesepuhan Cirebon</p>
              <p className="text-sm">
                Pada awal pembangunannya, Keraton Kasepuhan dibangun oleh
                Pangeran Emas Zainul Arifin dengan maksud untuk memperluas
                bangunan pesanggerahan Keraton Pangkuwati.
              </p>
            </div>

            {/* Video YouTube */}
            <div className="w-full sm:w-1/2 flex flex-col justify-center items-center gap-3 text-center">
              <ReactPlayer
                url="https://www.youtube.com/watch?v=XdiSL6fzW-Q"
                controls
                width="100%"
              />
            </div>
          </div>
        </div>

        <div className="relative">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: `url(${bg2})`,
              opacity: 0.5,
              pointerEvents: "none",
            }}
          ></div>

          <div className="w-full py-10 flex flex-col  justify-center items-center px-5 gap-2 bg-gradient-to-t from-yellow-200 relative">
            <div className="w-full sm:w-1/2 min-h-96 flex flex-col justify-center items-center gap-3 text-center">
              <p className="text-yellow-800 text-3xl font-bold">Sejarah</p>
              <p className="text-5xl">Keraton Kesepuhan Cirebon</p>
            </div>
            <div className="mt-5 flex justify-center flex-wrap gap-3">
              <img
                src={section}
                alt=""
                className="rounded-md shadow-md transform transition-transform duration-300 hover:scale-125 hover:z-10"
              />
              <img
                src={section}
                alt=""
                className="rounded-md shadow-md transform transition-transform duration-300 hover:scale-125 hover:z-10"
              />
              <img
                src={section}
                alt=""
                className="rounded-md shadow-md transform transition-transform duration-300 hover:scale-125 hover:z-10"
              />
            </div>
            <button className="btn btn-ghost bg-green-800 text-white mt-10">
              Selengkapnya
            </button>
          </div>
        </div>

        <div className="relative">
          <div className="w-full py-10 flex flex-col  justify-center items-center px-5 gap-2 bg-gradient-to-b from-yellow-200 relative">
            <div className="w-full sm:w-1/2 min-h-96 flex flex-col justify-center items-center gap-3 text-center">
              <p className="text-yellow-800 text-3xl font-bold">Event</p>
              <p className="text-5xl">Keraton Kesepuhan Cirebon</p>
            </div>
            <div className="mt-5 flex justify-center flex-wrap gap-3">
              <div className="card card-compact bg-base-100 w-96 shadow-xl">
                <figure>
                  <img
                    src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                    alt="Shoes"
                  />
                </figure>
                <div className="card-body">
                  <h2 className="card-title">Shoes!</h2>
                  <p>If a dog chews shoes whose shoes does he choose?</p>
                </div>
              </div>
              <div className="card card-compact bg-base-100 w-96 shadow-xl">
                <figure>
                  <img
                    src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                    alt="Shoes"
                  />
                </figure>
                <div className="card-body">
                  <h2 className="card-title">Shoes!</h2>
                  <p>If a dog chews shoes whose shoes does he choose?</p>
                </div>
              </div>
              <div className="card card-compact bg-base-100 w-96 shadow-xl">
                <figure>
                  <img
                    src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                    alt="Shoes"
                  />
                </figure>
                <div className="card-body">
                  <h2 className="card-title">Shoes!</h2>
                  <p>If a dog chews shoes whose shoes does he choose?</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="relative">
          <div className="w-full py-10 flex flex-col  justify-center items-center px-5 gap-2 bg-gradient-to-t from-yellow-200 relative">
            <div className="w-full sm:w-1/2 min-h-96 flex flex-col justify-center items-center gap-3 text-center">
              <p className="text-yellow-800 text-3xl font-bold">Berita</p>
              <p className="text-5xl">Keraton Kesepuhan Cirebon</p>
            </div>
            <div className="mt-5 flex justify-center flex-wrap gap-3">
              <div className="card card-compact bg-base-100 w-96 shadow-xl">
                <figure>
                  <img
                    src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                    alt="Shoes"
                  />
                </figure>
                <div className="card-body">
                  <h2 className="card-title">Shoes!</h2>
                  <p>If a dog chews shoes whose shoes does he choose?</p>
                </div>
              </div>
              <div className="card card-compact bg-base-100 w-96 shadow-xl">
                <figure>
                  <img
                    src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                    alt="Shoes"
                  />
                </figure>
                <div className="card-body">
                  <h2 className="card-title">Shoes!</h2>
                  <p>If a dog chews shoes whose shoes does he choose?</p>
                </div>
              </div>
              <div className="card card-compact bg-base-100 w-96 shadow-xl">
                <figure>
                  <img
                    src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                    alt="Shoes"
                  />
                </figure>
                <div className="card-body">
                  <h2 className="card-title">Shoes!</h2>
                  <p>If a dog chews shoes whose shoes does he choose?</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="relative">
          <div className="w-full py-10 flex flex-col  justify-center items-center px-5 gap-1 bg-gradient-to-b from-yellow-200 relative">
            <div className="w-full sm:w-1/2 min-h-96 flex flex-col justify-center items-center gap-1 text-center">
              <p className="text-yellow-800 text-3xl font-bold">FAQ</p>
              <p className="text-5xl">Ada pertanyaan untuk Kami?</p>
            </div>
            <div className=" flex justify-center flex-wrap gap-3 w-full px-5">
              <div
                tabIndex={0}
                className="collapse collapse-arrow border-base-300 bg-base-200 border w-full"
              >
                <div className="collapse-title text-xl font-medium">
                  Focus me to see content
                </div>
                <div className="collapse-content">
                  <p>
                    tabindex={0} attribute is necessary to make the div
                    focusable
                  </p>
                </div>
              </div>
              <div
                tabIndex={0}
                className="collapse collapse-arrow border-base-300 bg-base-200 border w-full"
              >
                <div className="collapse-title text-xl font-medium">
                  Focus me to see content
                </div>
                <div className="collapse-content">
                  <p>
                    tabindex={0} attribute is necessary to make the div
                    focusable
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Homepage;
