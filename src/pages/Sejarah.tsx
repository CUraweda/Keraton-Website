import React from "react";
import bg from "../assets/images/sejarah.2fd3cd88.jpg";
import img1 from "../assets/images/macanalikasepuhan.22776d55.png";
import img2 from "../assets/images/img2.png";
import img3 from "../assets/images/img3.png";
import img4 from "../assets/images/img4.png";
import img5 from "../assets/images/img5.png";

const Sejarah = () => {
  return (
    <div>
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
              Mengenal Lebih Dekat dengan Sejarah Keraton
            </h1>
          </div>
        </div>
      </div>
      <ul className="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical p-10">
        <li>
          <div className="timeline-middle">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="h-5 w-5"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                clipRule="evenodd"
              />
            </svg>
          </div>
          <div className="timeline-start mb-10 md:text-end">
            <time className="font-mono italic"></time>
            <div className="flex flex-col sm:flex-row gap-3">
              <p>
                Kota Cirebon merupakan kota yang memiliki nilai historis yang
                sangat kental terutama pada masa kerajaan dan penyebaran agama
                Islam di Pulau Jawa. Salah satu peninggalan pada masa kerajaan
                tersebut adalah sebuah bangunan yang hingga kini masih berdiri
                dengan kokoh di kota ini yaitu Rumah Adat Kasepuhan Cirebon.
              </p>
              <div>
                <img src={img1} alt="img" className="w-[2000px] rounded-md" />
              </div>
            </div>
          </div>
          <hr />
        </li>
        <li>
          <hr />
          <div className="timeline-middle">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="h-5 w-5"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                clipRule="evenodd"
              />
            </svg>
          </div>
          <div className="timeline-end mb-10">
            <time className="font-mono italic font-bold">Pada abad XV (-+ 1430)</time>
            <div className="flex flex-col sm:flex-row gap-3">
              <div>
                <img src={img2} alt="img" className="w-[2000px] rounded-md" />
              </div>
              <p>
                Pangeran Cakrabuwana Putra mahkota Kerajaan Pajajaran membangun
                Keraton yang kemudian diserahkan kepada putrinya, Ratu Ayu
                Pakungwati. Maka Keratonnya dinamai Keraton Pakungwati (hingga
                sekarang dikenal dengan sebutan Dalem Agung Pakungwati)
              </p>
            </div>
          </div>
          <hr />
        </li>
        <li>
          <hr />
          <div className="timeline-middle">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="h-5 w-5"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                clipRule="evenodd"
              />
            </svg>
          </div>
          <div className="timeline-start mb-10 md:text-end">
            <time className="font-mono italic font-bold">Pada abad XVI</time>
            <div className="flex flex-col sm:flex-row gap-3">
              <p>
              Sunan Gunung Jati wafat. Kemudian Pangeran Emas Mochammad Arifin, cicit dari Sunan Gunung Jati, bertahta menggantikannya. Kemudian pada tahun Candra Sangkala Tunggal Tata Gunaning Wong atau 1451 Saka yaitu tahun 1529 Masehi beliau mendirikan Keraton baru sebelah barat daya Dalem Agung Pakungwati. Dan beliaupun bergelar Panembahan Pakungwati I.
              </p>
              <div>
                <img src={img3} alt="img" className="w-[2000px] rounded-md" />
              </div>
            </div>
          </div>
          <hr />
        </li>
        <li>
          <hr />
          <div className="timeline-middle">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="h-5 w-5"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                clipRule="evenodd"
              />
            </svg>
          </div>
          <div className="timeline-end mb-10">
            <time className="font-mono italic">Pada -+ 1549 M</time>
            <div className="flex flex-col sm:flex-row gap-3">
              <div>
                <img src={img4} alt="img" className="w-[2000px] rounded-md" />
              </div>
              <p>
              Masjid Agung Sang Cipta Rasa kebakaran. Ratu Ayu Pakungwati yang sudah tua itu turut memadamkan api. Api dapat dipadamkan, namun Ratu Ayu Pakungwati kemudian wafat. Semenjak itu, nama atau sebutan Pakungwati dimuliakan dan diabadikan oleh nasab Sunan Gunung Jati.
              </p>
            </div>
          </div>
          <hr />
        </li>
        <li>
          <hr />
          <div className="timeline-middle">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="h-5 w-5"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                clipRule="evenodd"
              />
            </svg>
          </div>
          <div className="timeline-start mb-10 md:text-end">
            <time className="font-mono italic">Pada -+ 1679 M</time>
            <div className="flex flex-col sm:flex-row gap-3">
              <p>
              Didirikan Keraton Kanoman oleh Sultan Anom I (Sultan Badridin). Maka semenjak itu, Keraton Pakungwati disebut Keraton Kasepuhan hingga sekarang dan sultannya bergelar Sultan Sepuh. Kasepuhan artinya tempat sepuh atau tua. Jadi, antara Kasepuhan dan Kanoman itu awalnya yang tua dan yang muda (kakak beradik). Lokasi bangunan Keraton Kasepuhan membujur dari utara ke Selatan atau menghadap ke utara, karena keraton-keraton di Jawa semuanya menghadap ke utara, artinya menghadap magnet dunia, artinya falsafahnya sang raja mengharapkan kekuatan.
              </p>
              <div>
                <img src={img5} alt="img" className="w-[2000px] rounded-md" />
              </div>
            </div>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default Sejarah;
