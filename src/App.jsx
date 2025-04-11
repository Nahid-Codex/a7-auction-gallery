import { useEffect, useState } from "react";
import Banner from "./components/Banner"
import Footer from "./components/Footer"
import Navbar from "./components/Navbar"
import "./index.css"
function App() {
  const [auctions, setAuctions] = useState([]);

  useEffect(() => {
    fetch("/auctions.json")
      .then((res) => res.json())
      .then((data) => setAuctions(data));
  }, []);

console.log(auctions);

  return (
    <div className="max-w-[1380px] mx-auto">


      <Navbar></Navbar>
      <Banner></Banner>
      <Footer></Footer>

    </div>
  )
}

export default App
