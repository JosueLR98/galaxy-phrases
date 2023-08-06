import { useState } from "react";
import db from "./db/db.json";
import "./App.css";
import ContainerInfo from "./components/ContainerInfo";
import Button from "./components/Button";

const images = ["bg1", "bg2", "bg3", "bg4"];
function App() {
  const getRandomItem = (listItems) => {
    const randomIndex = Math.floor(Math.random() * listItems.length);
    return listItems[randomIndex];
  };

  const [quote, setQuote] = useState(getRandomItem(db));
  const [bgImages, setBgImages] = useState(getRandomItem(images));

  const handleNewQuote = () => {
    setQuote(getRandomItem(db));
    setBgImages(getRandomItem(images));
  };
  return (
    <div className={`App ${bgImages}`}>
      <ContainerInfo quote={quote} handleNewQuote={handleNewQuote} />
    </div>
  );
}

export default App;
