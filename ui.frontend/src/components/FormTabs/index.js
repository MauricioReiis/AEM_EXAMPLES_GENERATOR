import React from "react";
import { MapTo } from "@adobe/aem-react-editable-components";

const Exemplo = ({ multifieldOne, multifieldTwo }) => {
  return (
    <>
      {multifieldOne.map((item) => (
        <h1 key={item}>{item}</h1>
      ))}
      {multifieldTwo.map(({ textOne, textTwo }, index) => (
        <div key={index}>
          <h3>{textOne}</h3>
          <h3>{textTwo}</h3>
        </div>
      ))}
    </>
  );
};

Exemplo.defaultProps = {
  multifieldOne: ["Eu sou um texto"],
  multifieldTwo: [
    {
      textOne: "Eu sou o texto 1",
      textTwo: "Eu sou o texto 2",
    },
  ],
  certificates: [
    {
      textOne: "Eu sou o texto 1",
      textTwo: "Eu sou o texto 2",
    },
  ],
};

export default MapTo("reactapp/components/multifield-tabs")(Exemplo);
