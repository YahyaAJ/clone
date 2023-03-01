import { useState } from "react";
import "./App.css";
import Main from "./LandingPages/Main";
import Tentang from "./LandingPages/Tentang";
import Role from "./LandingPages/Role";
import Footer from "./LandingPages/Footer";
import Register from "./LandingPages/Register";
import Login from "./LandingPages/Login";
import PopupSuccess from "./LandingPages/PopupSuccess";

function LandingPage() {
  const [changeForm, setChangeForm] = useState(false);
  const [modal, setModal] = useState(false);

  const toogle = () => {
    setChangeForm(!changeForm);
  };
  const modalActive = () => {
    setModal(true);
  };
  const modalInactive = () => {
    setModal(false);
    setChangeForm(true);
  };
  const form = changeForm ? (
    <Login toogle={toogle} />
  ) : (
    <Register toogle={toogle} modal={modalActive} />
  );
  return (
    <div className="">
      <Main />
      <Tentang />
      <Role />
      <div className="flex justify-center sm:w-[85%] sm:mx-auto lg:hidden px-5 mb-10 -mt-8">{form}</div>
      {modal ? <PopupSuccess toogle={modalInactive} /> : null}
      <Footer />
    </div>
  );
}

export default LandingPage;
