import React, { useState } from "react";
import img from "../assets/img_landingpage.png";
import wave2 from "../assets/Vector2.svg";
import wave3 from "../assets/Rectangle 193.svg";
import wave4 from "../assets/Rectangle 193.svg";
import Navbar from "./Navbar";
import Login from "./Login";
import Register from "./Register";
import avatar from "../assets/3D00868 1.png";
import RoleCard from "./RoleCard";
import Footer from "./Footer";
import Popup from "./Popup";

function Responsive() {
  const [changeForm, setChangeForm] = useState(false);
  const [modal, setModal] = useState(false);

  const toogle = () => {
    setChangeForm(!changeForm);
  };
  const modalActive = () => {
    setModal(true);
  };
  const modalInactive = () => {
    setModal(false)
    setChangeForm(true)
  };
  const form = changeForm ? (
    <Login toogle={toogle} />
  ) : (
    <Register toogle={toogle} modal={modalActive} />
  );
  const footer = changeForm
    ? "absolute top-[224%] w-full"
    : "absolute top-[230%] w-full";

  return (
    <div className="overflow-x-hidden">
      <Navbar />
      {modal ? <Popup toogle={modalInactive} /> : null}
      <div className="w-full">
        <img
          src={img}
          alt="image"
          className="absolute z-[-999] right-[-10%] top-[5%]"
        />
      </div>
      <div className="w-full">
        <img id="tentang" src={wave2} className="absolute w-full top-[26%]" />
      </div>
      <div className="absolute top-[41%] w-full h-[10vh] bg-[#22A6B3]" />
      <img src={wave3} className="absolute -z-10 w-full top-[50%]" />
      <p className="absolute pl-3 w-[75%] text-justify text-white text-xs leading-[15px] top-[40%]">
        Sebuah solusi bagi team-seekers yang
        <span className="font-bold">
          {" "}
          membutuhkan partner dengan skill tertentu.{" "}
        </span>
        Kamu dapat
        <span className="font-bold"> memamerkan idemu </span>
        untuk memulai membangun bisnis yang menarik orang seminat. Kamu juga
        dapat
        <span className="font-bold"> bergabung dengan proyek </span>
        yang membutuhkan orang seperti dirimu!
      </p>
      <img src={avatar} className="absolute w-[45%] top-[51%] right-0" />
      <div className="absolute text-xl text-center top-[70%] inset-x-0 text-[#22A6B3]">
        <h1>
          Jadilah bagian
          <br />
          dari
          <span className="font-bold"> proyek pilihan mu</span>
        </h1>
        <p className="text-sm mt-5">Proyekmu akan muncul disini!</p>
      </div>
      <div>
        <img src={wave4} className="absolute w-full top-[85%] rotate-180" />
        <div className="absolute w-full h-[75vh] bg-[#22A6B3] top-[95%] rounded-b-[30px]" />
      </div>
      <h1 className="absolute text-hite text-xl text-center inset-x-0 top-[95%] text-white">
        Siapa saja yang
        <span className="font-bold"> berperan</span>
        <br />
        dalam sebuah
        <span className="font-bold"> Start-Up</span>?
      </h1>
      <div className="absolute flex overflow-x-auto snap-mandatory snap-x px-[15%] pt-[100px] pb-[25px] scroll-px- w-full gap-9 top-[102%]">
        {RoleCard.map((data, index) => {
          return (
            <div
              key={index}
              className="relative flex-[0_0_100%] snap-center bg-white text-justify shadow-[0_1px_4px_0_rgba(0,0,0,0.25)] rounded-3xl p-6"
            >
              <div className="absolute top-[-120px] inset-x-1 w-[250px]  z-[90]">
                <img src={data.image} alt={data.role} />
                <img
                  src={data.bg}
                  className="absolute top-[75px] left-[45px] w-[170px] -z-10"
                />
              </div>
              <h1 className="text-lg font-bold text-center pt-20">
                {data.role}
              </h1>
              <h3 className="font-[500] text-sm text-center">{data.as}</h3>
              <p className="text-xs pt-3">{data.desc}</p>
            </div>
          );
        })}
      </div>
      <ul className="absolute flex justify-center gap-2 top-[152%] inset-x-0 text-center z-[90]">
        <li className="w-5 h-1.5 bg-[rgba(245,245,245,0.5)] rounded-full"></li>
        <li className="w-10 h-1.5 bg-white rounded-full"></li>
        <li className="w-5 h-1.5 bg-[rgba(245,245,245,0.5)] rounded-full"></li>
      </ul>
      <h1 className="absolute top-[163%] inset-x-0 text-center text-xl text-white">
        <span className="font-bold">Daftarkan</span>
        {""} dirimu!
      </h1>
      <div>{form}</div>
      <div className={footer}>
        <Footer />
      </div>
    </div>
  );
}

export default Responsive;
