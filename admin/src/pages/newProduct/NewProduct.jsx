import { useState } from "react";

function NewProduct() {

const [ inputs, setInputs ] = useState({});
const [ file, setFile ] = useState(null);
const [ catergories, setCatergories ] = useState([]);

const handleChange = (e) => {
    setInputs(prev => {
        return {...prev, [e.target.name]:e.target.value}
    })
};

const handleCatergories = () => {

};

  return (
    <div className="new-product flex-[4] ml-10">
        <h1 className="add-product-title text-2xl">New Product</h1>
        <form className="add-product-form flex flex-wrap flex-col">
            <div className='add-product-item flex flex-col mt-10 w-2/4'>
                <label>Image</label>
                <input type='file' id='file' onChange={e=> setFile(e.target.files)[0]}/>
            </div>
            <div className='add-product-item flex flex-col mt-5 w-2/4'>
                <label>Title</label>
                <input 
                type='text' 
                placeholder='Winter Sweater' 
                name='title'
                onChange={handleChange}
                className="border-[2px] p-2"/>
            </div>
            <div className='add-product-item flex flex-col mt-5 w-2/4'>
                <label>Description</label>
                <input 
                type='text' 
                placeholder='description...' 
                name='description'
                onChange={handleChange}
                className="border-[2px] p-2"/>
            </div>
            <div className='add-product-item flex flex-col mt-5 w-2/4'>
                <label>Price</label>
                <input 
                type='text' 
                placeholder='100' 
                name='price'
                onChange={handleChange}
                className="border-[2px] p-2"/>
            </div>
            <div className='add-product-item flex flex-col mt-5 w-2/4'>
                <label>Catergories</label>
                <input 
                type='text' 
                placeholder='Mens Shoes' 
                onChange={handleCatergories}
                className="border-[2px] p-2"/>
            </div>
            <div className="add-product-item flex flex-col mt-5 w-2/4">
                <label>Stock</label>
                <select name='inStock' onChange={handleChange}>
                    <option value='true'>Yes</option>
                    <option value='false'>No</option>
                </select>
            </div>
            <button className="new-user-button w-28 h-12 border-[2px] bg-teal-500 text-white rounded-lg mt-14">Create</button>
        </form>
    </div>
  )
}

export default NewProduct;