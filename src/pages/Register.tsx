import React from "react";
import bg from "../assets/images/loginbg.png";
import logo from "../assets/images/icon.png";
import { Link } from "react-router-dom";

const Register = () => {
  return (
    <div className="min-h-screen flex" data-theme="light">
      {/* Left Section */}
      <div className="hidden lg:flex lg:w-1/2 relative ">
        <div className="absolute inset-0">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: `url(${bg})`,
            
              pointerEvents: "none",
            }}
          ></div>
           <div className="absolute inset-0 bg-black/40" />
        </div>
        <div className="relative z-10 p-8 text-white  w-full">
          <div className="flex items-center gap-3 mb-8 ">
            <img src={logo} alt="" className="w-20" />
            <div className="text-xl">
              <div>KERATON</div>
              <div>KASEPUHAN</div>
              <div>CIREBON</div>
            </div>
          </div>
          <div className="w-full flex flex-col items-center justify-start mt-10">
            <h1 className="text-5xl font-bold mb-4">
              Bersama Lestarikan Keraton Tertua di Kota Cirebon
            </h1>
            
          </div>
        </div>
      </div>

      {/* Right Section */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-8 bg-white">
        <div className="w-full max-w-md space-y-8">
          <div className="text-center lg:text-left">
            <h2 className="text-3xl font-bold">Sign In</h2>
          </div>

          <form className="space-y-6">
            <div className="space-y-2">
              <label htmlFor="email" className="block text-sm font-medium">
                Nama Lengkap
              </label>
              <input type="text" placeholder="Type here" className="input input-bordered w-full" />
            </div>
            <div className="space-y-2">
              <label htmlFor="email" className="block text-sm font-medium">
                Email
              </label>
              <input type="text" placeholder="Type here" className="input input-bordered w-full" />
            </div>

            <div className="space-y-2">
              <label htmlFor="password" className="block text-sm font-medium">
                Password
              </label>
              <input type="password" placeholder="Type here" className="input input-bordered w-full" />
            </div>
            <div className="space-y-2">
              <label htmlFor="password" className="block text-sm font-medium">
                Konfirmasi Password
              </label>
              <input type="password" placeholder="Type here" className="input input-bordered w-full" />
            </div>

            <button className="btn btn-ghost bg-green-800 text-white w-full">
              Sign Up
            </button>
          </form>

          <div className="text-center space-y-4">
            <p className="text-sm">
              Belum buat akun?{" "}
              <Link
                to="/login"
                className="text-indigo-600 hover:text-indigo-500"
              >
                Sign In
              </Link>
            </p>

            <p className="text-sm text-gray-500">
              Dengan signin ke Keraton Kasepuhan Cirebon, anda setuju dengan{" "}
              <Link to="/terms" className="text-gray-700">
                Terms
              </Link>{" "}
              dan{" "}
              <Link to="/privacy" className="text-gray-700">
                Privacy Policy
              </Link>
              .
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
