import React, { useState } from "react";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { ZapIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import usersicon from "../assets/users.png";
export const ServiceDiv = () => {
  const navigate = useNavigate();
  const [isLoading, setisLoading] = useState(false);
  console.log(isLoading);
  return (
    <div className=" p-15 m-15  flex rounded-2xl font-light justify-center bg-white text-center">
      <div className=" inline-flex p-0 m-0 animate-pulse">
        <div className=" bg-sky-200 flex rounded-2xl h-[50px]">
          <ZapIcon size={50}> </ZapIcon>
          <p className="">Nouveaux : IA générative intégrer</p>
        </div>
      </div>
      <div className="">
        <h1 className=" font-bold text-3xl">
          Créez votre CV parfait en quelques minutes .
        </h1>
        <div>
          <p className="text-center">
            Gagnez en impact avec nos services de création de CV et de lettres
            de motivation sur mesure. Grâce à des modèles professionnels, une IA
            intelligente et des outils puissants, nous vous aidons à valoriser
            votre profil et à capter l’attention des recruteurs. Notre objectif
            : vous accompagner à chaque étape pour décrocher l’emploi de vos
            rêves.
          </p>
        </div>
        <div className="inline-flex gap-5 m-10">
          <br />
          <Button
            size="lg"
            className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-2 group"
          >
            {" "}
            Crée mon CV gratuitement{" "}
          </Button>
          <br />
          <Button
            size="lg"
            className="bg-gradient-to-r from-sky-600 to-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-2 group"
          >
            {" "}
            Voir des exemples{" "}
          </Button>
          <br />
        </div>
      </div>
      <div className="inline-flex">
        <div className="">
          <img src={usersicon}></img>
          <img src={usersicon}></img>
          <img src={usersicon}></img>
        </div>
      </div>
    </div>
  );
};
