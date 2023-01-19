import { productRows } from '../../data';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import { DataGrid } from '@mui/x-data-grid';
import {Link} from 'react-router-dom'
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { deleteProduct, getProducts } from '../../redux/apiCalls';

function ProductList() {

    const [data, setData ] = useState(productRows);

    const dispatch = useDispatch();
    const products = useSelector(state => state.product.products);

    useEffect(() => {
        getProducts(dispatch);
    },[dispatch])

    const handleDelete = (id) => {
        deleteProduct(id, dispatch);
    };

    const columns = [
        { field: '_id', headerName: 'ID', width: 220 },
        { 
          field: 'product', 
          headerName: 'Product', 
          width: 130,
          renderCell: (params) => {
              return (
                  <div className='productListUser'>
                      <img className='productListImg' src={params.row.img} alt=''/>
                      {params.row.title}
                  </div>
              )
          }
          },
        { field: 'stock', headerName: 'Stock', width: 200 },
        { field: 'status', headerName: 'Status', width: 120 },
        { field: 'price', headerName: 'Price', width: 160 },
        { field: 'action', headerName: 'Action', width: 150, renderCell: (params) => {
                  return (
                      <>
                      <Link to={'/product/' + params.row._id}>
                          <button className='product-list-edit mr-10 cursor-pointer'>Edit</button>
                      </Link>
                          <DeleteOutlineIcon className='product-list-delete cursor-pointer text-red-500' onClick={() => handleDelete(params.row._id)}/>
                      </>
                  )
              }}
      ];

  return (
    <div className='product-list' style={{ height: 400, width: '100%' }}>
        <DataGrid
        rows={products}
        disableSelectionOnClick
        columns={columns}
        getRowId={(row) => row._id}
        pageSize={10}
        checkboxSelection
      />
    </div>
  )
}

export default ProductList;