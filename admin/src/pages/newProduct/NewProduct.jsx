function NewProduct() {
    return (
      <div className="new-product flex-[4] ml-10">
          <h1 className="add-product-title text-2xl">New Product</h1>
          <form className="add-product-form flex flex-wrap flex-col">
              <div className='add-product-item flex flex-col mt-10 w-2/4'>
                  <label>Image</label>
                  <input type='file' id='file'/>
              </div>
              <div className='add-product-item flex flex-col mt-5 w-2/4'>
                  <label>Name</label>
                  <input 
                  type='text' 
                  placeholder='Winter Sweater' 
                  className="border-[2px] p-2"/>
              </div>
              <div className="add-product-item flex flex-col mt-5 w-2/4">
                  <label>Stock</label>
                  <input 
                  type='text' 
                  placeholder='123' 
                  className="border-[2px] p-2"/>
              </div>
              <div className="add-product-item mt-5">
                  <label>Active</label>
                  <select name='active' id='idStock'>
                      <option value='yes'>Yes</option>
                      <option value='no'>No</option>
                  </select>
              </div>
              <button className="new-user-button w-28 h-12 border-[2px] bg-teal-500 text-white rounded-lg mt-14">Create</button>
          </form>
      </div>
    )
  }
  
  export default NewProduct;