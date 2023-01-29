import { catergories } from "../data";
import CatergoryItem from "./CatergoryItem";

function Catergories() {
  return (
    <div className="catergories-container flex p-20 justify-between max-sm:flex-col mt-10 max-sm:in-line-block">
        {
            catergories.map(item => (
                <CatergoryItem item={item} key={item.id}/>
            ))
        }
    </div>
  )
}

export default Catergories;