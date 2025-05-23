import { useEffect, useState } from "react";
import Banner from "./components/Banner"
import Footer from "./components/Footer"
import Navbar from "./components/Navbar"
import "./index.css"
import AuctionTable from "./components/AuctionTable";
import FavoriteItems from "./components/FavouriteItems";
import { toast, ToastContainer } from "react-toastify";



function App() {
  const [auctions, setAuctions] = useState([]);
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    fetch("/auctions.json")
      .then((res) => res.json())
      .then((data) => setAuctions(data));
  }, []);

  console.log(favorites);

  const handleFavorite = (item) => {
    setFavorites([...favorites, item]);
    toast.success('item added to favorites!', {
      position: "top-right",
      autoClose: 1000,

    });
  };


  return (
    <div className="max-w-[1380px] mx-auto">


      <Navbar></Navbar>
      <Banner></Banner>

      <section className="p-2 sm:p-10 lg:p-20 xl:p-30 bg-[#EBF0F5]">
        <div className="font-sora">
          <h2 className="text-3xl font-bold text-[#0E2954] ">Active Auctions</h2>
          <p className="text-lg text-[#000] font-normal mt-5">
            Discover and bid on extraordinary items
          </p>
        </div>
        <div className="flex flex-col items-center sm:items-start sm:flex-row gap-6 mt-8">
          <AuctionTable
            auctions={auctions}
            handleFavorite={handleFavorite}
            favorites={favorites}

          />

          <FavoriteItems favorites={favorites} setFavorites={setFavorites} />
        </div>
      </section >

      <Footer></Footer>
      <ToastContainer />

    </div>
  )
}

export default App
