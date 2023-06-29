import "./App.css";
import GalletFortuna from "./components/GalletFortuna";
import phrases from "./data/phrases.json";
import { useState } from "react";

function App() {
  const [suerte, setSuerte] = useState(0);
  const [randomImg, setRandomImg] = useState(0);
  let img = ["/fondo1.png", "/fondo3.png", "/fondo4.png"];
  const generateImg = () => {
    setRandomImg(Math.floor(Math.random() * 3));
  };
  const generateText = () => {
    setSuerte(Math.floor(Math.random() * 15));
  };

  const changeSuerte = () => {
    generateImg();
    generateText();
  };
  document.body.style.backgroundImage = `url(${img[randomImg]})`;
  return (
    <>
      <GalletFortuna data={phrases[suerte]} />
      <div className="center">
      <button onClick={changeSuerte} className="button">
        <box-icon className="cambiar" name="right-arrow-alt"></box-icon>
      </button>
      </div>
    </>
  );
}

export default App;
