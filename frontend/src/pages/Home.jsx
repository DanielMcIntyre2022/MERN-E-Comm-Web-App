import Annoucements from "../components/Annoucements";
import Catergories from "../components/Catergories";
import Navbar from "../components/Navbar";
import Slider from "../components/Slider";
import Products from "../components/Products";
import NewsLetter from "../components/NewsLetter";
import Footer from "../components/Footer";

function Home() {
  return (
    <div>
        <Annoucements/>
        <Navbar/>
        <Slider/>
        <Catergories/>
        <Products/>
        <NewsLetter/>
        <Footer/>
    </div>
  )
}

export default Home;