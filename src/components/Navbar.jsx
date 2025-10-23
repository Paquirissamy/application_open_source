import { useState } from "react";
import { NavLink } from "react-router-dom";
import { useToggle } from "../hooks/useToggle";
import home from "../assets/home.svg";
import serviceIcon from "../assets/serviceIcon.svg";
import aboutIcon from "../assets/abouticon.svg";
import sigin from "../assets/sigin.png";
function Nav() {
  const { state, toogle } = useToggle();
  const [isActive, setIsActive] = useState(false);

  return (
    <div className=" flex gap-4 p-4 bg-blue-200 w-full text-xl justify-center duration-200  rounded-2xl">
      <div className="inline-flex gap-3">
        <NavLink
          className=" p-0 m-0 duration-300 transition-all  hover:text-2xl"
          to={"/login"}
        >
          <img src={sigin} className=""></img> Sign-in
        </NavLink>
        <br></br>
        <NavLink
          className=" p-0 m-0 duration-300 transition-all  hover:text-2xl"
          to={"/about"}
        >
          <img src={aboutIcon} className=""></img> About
        </NavLink>
        <br></br>
        <NavLink
          className=" p-0 m-0 transition-all  hover:text-2xl "
          to={"/service"}
        >
          <img src={serviceIcon} className=""></img> Service
        </NavLink>
        <br></br>
      </div>
    </div>
  );
}

export default Nav;
