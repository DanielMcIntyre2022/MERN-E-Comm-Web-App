import { getStorage, ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import app from "../../firebase";
import { useState } from "react";
import { useDispatch } from 'react-redux';
import { addProduct } from "../../redux/apiCalls";

function NewProduct() {

const [ inputs, setInputs ] = useState({});
const [ file, setFile ] = useState(null);
const [ catergories, setCatergories ] = useState([]);
const dispatch = useDispatch();

const handleChange = (e) => {
    setInputs(prev => {
        return {...prev, [e.target.name]:e.target.value}
    })
};

const handleCatergories = (e) => {
    setCatergories(e.target.value.split(','));
};

const handleClick = (e) => {
    e.preventDefault();
    const fileName = new Date().getTime() + file.name;
    const storage = getStorage(app);
    const storageRef = ref(storage, fileName);

    const uploadTask = uploadBytesResumable(storageRef, file);

    // Register three observers:
// 1. 'state_changed' observer, called any time the state changes
// 2. Error observer, called on failure
// 3. Completion observer, called on successful completion
uploadTask.on('state_changed', 
(snapshot) => {
  // Observe state change events such as progress, pause, and resume
  // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
  const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
  console.log('Upload is ' + progress + '% done');
  switch (snapshot.state) {
    case 'paused':
      console.log('Upload is paused');
      break;
    case 'running':
      console.log('Upload is running');
      break;
      default:
  }
}, 
(error) => {
  // Handle unsuccessful uploads
}, 
() => {
  // Handle successful uploads on complete
  // For instance, get the download URL: https://firebasestorage.googleapis.com/...
  getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
    const product = {...inputs, img: downloadURL, catergories: catergories};
    addProduct(product, dispatch)
  });
}
);

};

  return (
    <div className="new-product flex-[4] ml-10">
        <h1 className="add-product-title text-2xl">New Product</h1>
        <form className="add-product-form flex flex-wrap flex-col">
            <div className='add-product-item flex flex-col mt-10 w-2/4'>
                <label>Image</label>
                <input type='file' id='file' onChange={e=> setFile(e.target.files[0])}/>
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
                type='number' 
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
            <button onClick={handleClick} className="new-user-button w-28 h-12 border-[2px] bg-teal-500 text-white rounded-lg mt-14">Create</button>
        </form>
    </div>
  )
}

export default NewProduct;