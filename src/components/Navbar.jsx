import { useState } from "react";
import { NavLink } from "react-router-dom";
import { useToggle } from "../hooks/useToggle";

function Nav() {
  const { state, toogle } = useToggle();
  const [isActive, setIsActive] = useState(false);

  return (
    <div className=" flex gap-4 p-4 bg-blue-200 w-full text-xl justify-center duration-200  rounded-2xl">
      <div>
        <NavLink
          className=" p-0 m-0 bg-blue-500 duration-300 transition-all  hover:text-2xl"
          to={"/login"}
        >
          Sign-in
        </NavLink>
        <br></br>
        <NavLink
          className=" p-0 m-0 bg-blue-500 duration-300 transition-all  hover:text-2xl"
          to={"/about"}
        >
          About
        </NavLink>
        <br></br>
        <NavLink
          className=" p-0 m-0 bg-blue-500 duration-300 transition-all  hover:text-2xl "
          to={"/service"}
        >
          Service
        </NavLink>
        <br></br>
      </div>
    </div>
  );
}

export default Nav;
