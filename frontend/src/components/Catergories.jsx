import { catergories } from "../data";
import CatergoryItem from "./CatergoryItem";

function Catergories() {
  return (
    <div className="catergories-container max-sm:flex-col flex p-20 mt-10 max-sm:-mb-56">
        {
            catergories.map(item => (
                <CatergoryItem item={item} key={item.id}/>
            ))
        }
    </div>
  )
}

export default Catergories;