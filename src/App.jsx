import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Navber from "./Components/Navber";
import Footer from "./Components/Footer";
import Body from "./Components/Body";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Navber />
      <div className="min-vh-100">
        <Body />
      </div>
      <Footer />
    </>
  );
}

export default App;
