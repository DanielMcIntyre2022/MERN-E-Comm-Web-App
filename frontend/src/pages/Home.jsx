import Annoucements from "../components/Annoucements";
import Catergories from "../components/Catergories";
import Navbar from "../components/Navbar";
import SliderComponent from "../components/SliderComponent";
import Products from "../components/Products";
import Footer from "../components/Footer";

function Home() {
  return (
    <div className="overflow-hidden">
        <Annoucements/>
        <Navbar/>
        <SliderComponent/>
        <Catergories/>
        <Products/>
        <Footer/>
    </div>
  )
}

export default Home;