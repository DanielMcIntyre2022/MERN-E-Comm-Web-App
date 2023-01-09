import { catergories } from "../data";
import CatergoryItem from "./CatergoryItem";

function Catergories() {
  return (
    <div className="catergories-container flex p-20 justify-between mb-20">
        {
            catergories.map(item => (
                <CatergoryItem item={item} key={item.id}/>
            ))
        }
    </div>
  )
}

export default Catergories;