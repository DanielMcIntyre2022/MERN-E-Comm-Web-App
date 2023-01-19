import { productRows } from '../../data';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import { DataGrid } from '@mui/x-data-grid';
import { Link } from 'react-router-dom';
import { useState } from 'react';

function ProductList() {

    const [data, setData ] = useState(productRows);

    const handleDelete = (id) => {
        setData(data.filter((item) => item.id !== id));
    };

    const columns = [
        { field: 'id', headerName: 'ID', width: 90 },
        { 
          field: 'product', 
          headerName: 'Product', 
          width: 130,
          renderCell: (params) => {
              return (
                  <div className='productListUser'>
                      <img className='productListImg' src={params.row.img} alt=''/>
                      {params.row.name}
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
                      <Link to={'/product/' + params.row.id}>
                          <button className='product-list-edit mr-10 cursor-pointer'>Edit</button>
                      </Link>
                          <DeleteOutlineIcon className='product-list-delete cursor-pointer text-red-500' onClick={() => handleDelete(params.row.id)}/>
                      </>
                  )
              }}
      ];

  return (
    <div className='product-list' style={{ height: 400, width: '100%' }}>
        <DataGrid
        rows={data}
        disableSelectionOnClick
        columns={columns}
        pageSize={10}
        checkboxSelection
      />
    </div>
  )
}

export default ProductList;