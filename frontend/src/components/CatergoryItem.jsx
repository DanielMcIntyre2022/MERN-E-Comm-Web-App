
import { Link } from 'react-router-dom';

function CatergoryItem({item}) {

  console.log(item)
  return (
    <div className="catergory-item-container flex-1 m-3 h-16 -mt-10 relative">
        <Link to={`/products/${item.catergory}`}>
            <div className="catergory-image-container">
                <img className="w-100% h-80 object-cover" src={item.img}/>
            </div>
            <div className="catergory-info-container absolute w-100% h-full top-0 left-0 flex items-center justify-center flex-col ml-5 mt-5 font-bold">
                <p className="text-white mb-1">{item.title}</p>
                <button className="border-4 text-white p-2">SHOP NOW</button>
            </div>
        </Link>
    </div>
  )
}

export default CatergoryItem;