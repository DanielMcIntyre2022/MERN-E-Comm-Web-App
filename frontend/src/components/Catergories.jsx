import { catergories } from "../data";
import CatergoryItem from "./CatergoryItem";

function Catergories() {
  return (
    <div className="catergories-container flex p-20 justify-between">
        {
            catergories.map(item => (
                <CatergoryItem item={item}/>
            ))
        }
    </div>
  )
}

export default Catergories;