import { productRows } from '../../data';
import { DataGrid } from '@mui/x-data-grid';
import { Link } from 'react-router-dom';
import { useState } from 'react';

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
                    {/* <DeleteOutlineIcon className='product-list-delete cursor-pointer text-red-500' onClick={() => handleDelete(params.row.id)}/> */}
                </>
            )
        }}
//   { field: 'action', 
//     headerName: 'Action', 
//     width: 150,
//     renderCell: (params) => {
//         return (
//             <>
//             <Link to={'/product' + params.row.id}>
//                 <button className='product-list-edit'>Edit</button>
//             </Link>
//             </>
//         )
//     }
//     },
];

const rows = [
  { id: 1, lastName: 'Snow', firstName: 'Jon', age: 35 },
  { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42 },
  { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 45 },
  { id: 4, lastName: 'Stark', firstName: 'Arya', age: 16 },
  { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null },
  { id: 6, lastName: 'Melisandre', firstName: null, age: 150 },
  { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
  { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36 },
  { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
];


function ProductList() {

    const [data, setData ] = useState(productRows);

    const handleDelete = (id) => {
        setData(data.filter((item) => item.id !== id));
    };

  return (
    <div className='product-list' style={{ height: 400, width: '100%' }}>
        <DataGrid
        rows={rows}
        columns={columns}
        pageSize={5}
        checkboxSelection
      />
    </div>
  )
}

export default ProductList;