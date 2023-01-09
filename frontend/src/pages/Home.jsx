import Annoucements from "../components/Annoucements";
import Catergories from "../components/Catergories";
import Navbar from "../components/Navbar";
import Slider from "../components/Slider";

function Home() {
  return (
    <div>
        <Annoucements/>
        <Navbar/>
        <Slider/>
        <Catergories/>
    </div>
  )
}

export default Home;