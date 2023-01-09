import Annoucements from "../components/Annoucements";
import Catergories from "../components/Catergories";
import Navbar from "../components/Navbar";
import Slider from "../components/Slider";
import Products from "../components/Products";

function Home() {
  return (
    <div>
        <Annoucements/>
        <Navbar/>
        <Slider/>
        <Catergories/>
        <Products/>
    </div>
  )
}

export default Home;