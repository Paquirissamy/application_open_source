import { useNavigate } from "react-router-dom";
import { ServiceDiv } from "@/subcomponent/ServiceDiv";
import home from "../assets/home.svg";
function Service() {
  const data = [
    { id: 45, nom: "paquirissamy", prenom: "ari " },
    { id: 78, nom: "Ali", prenom: "Karibou " },
  ];

  function text() {
    const wrappeddata = data.find((nom) => nom.nom === "paquirissamy");

    console.log(wrappeddata);
    return wrappeddata;
  }
  text();
  return (
    <>
      <ServiceDiv></ServiceDiv>
    </>
  );
}

export default Service;
