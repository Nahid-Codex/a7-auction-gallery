import { useEffect, useState } from "react";
import Banner from "./components/Banner"
import Footer from "./components/Footer"
import Navbar from "./components/Navbar"
import "./index.css"
import AuctionTable from "./components/AuctionTable";




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

      <main className="p-30 bg-[#EBF0F5]">
        <div>
          <h2 className="text-3xl font-bold">Active Auctions</h2>
          <p className="text-lg text-[#000] font-normal mt-5">
            Discover and bid on extraordinary items
          </p>
        </div>
        <div className="flex flex-col lg:flex-row gap-6 mt-8">
          <AuctionTable
            auctions={auctions}

          />


        </div>
      </main>



      <Footer></Footer>

    </div>
  )
}

export default App
