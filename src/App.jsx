import Banner from "./components/Banner"
import Footer from "./components/Footer"
import Navbar from "./components/Navbar"
import "./index.css"
function App() {


  return (
    <div className="max-w-[1380px] mx-auto">

     
      <Navbar></Navbar>
      <Banner></Banner>
      <Footer></Footer>
   
    </div>
  )
}

export default App
