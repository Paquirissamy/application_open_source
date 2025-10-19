import number1 from "../assets/number1.svg";
import number2 from "../assets/number2.svg";
import number3 from "../assets/number3.svg";
import { CircleArrowDown } from "lucide-react";

import { useNavigate } from "react-router-dom";
function Service() {
  const navigate = useNavigate();
  return (
    <div className="inline-flex">
      <h2 className="flex font-bold text-2xl justify-center ">
        Crée votre personnage en 3 étape{" "}
      </h2>

      <div className="inline-flex justify-center h-screen">
        <div className="flex justify-center">
          <div className="w-[300px] h-[270px] bg-blue-200 m-35 rounded-2xl inline-block">
            <img src={number1} className=" duration-300 hover:scale-110 "></img>
            <p className=" font-light text-center">
              En premier vous aller crée donner une petite description de votre
              futur personnage !
              <br />
              <br />
              <p>Découvrez quelque template en cliquant ici ! </p>
            </p>
            <br />
            <div className=" justify-center flex m-[-10px]">
              <CircleArrowDown
                size={50}
                onClick={() => navigate("/template-character-1")}
                className="animate-bounce justify-center gap-5 p-1 cursor-pointer"
              />
            </div>
          </div>
        </div>
        <div className="flex justify-center">
          <div className="w-[300px] h-[250px] bg-red-200 m-35 rounded-2xl">
            {" "}
            <img src={number2} className="duration-300 hover:scale-110"></img>
          </div>
        </div>
        <div className="justify-center">
          <div className="w-[300px] h-[250px] bg-blue-200 m-35 rounded-2xl">
            {" "}
            <img src={number3} className="duration-300 hover:scale-110"></img>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Service;
