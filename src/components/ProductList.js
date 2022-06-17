import React, {useEffect, useState} from 'react'
import {Link} from 'react-router-dom'

function ProductList() {

const [products, setProducts] = useState([]);

useEffect(()=>{
 getPrducts();
},[])

const getPrducts = async()=>{
    let result = await fetch("http://localhost:5000/products")
    result = await result.json();
    setProducts(result);
}
// console.log("products", products);
const deleteProduct = async(id)=>{
    let result = await fetch(`http://localhost:5000/product/${id}`,{
        method: "Delete"
    });
    result = await result.json();
    if(result){
        // alert("Product Deleted");
        getPrducts();
    }
}

  return (
    <div className='product-list'>
      <h1>Product list</h1>
      <ul>
          <li>Sl.no</li>
          <li>Name</li>
          <li>Price</li>
          <li>Category</li>
          <li>Company</li>
          <li>Operation</li>
      </ul>
      {
           products.map((item, index)=>
            <ul key={index}>
                <li>{index+1}</li>
                <li>{item.name}</li>
                <li>{item.price}</li>
                <li>{item.category}</li>
                <li>{item.company}</li>
                <li><button onClick={()=>deleteProduct(item._id)}>Delete</button>
                    <Link to={`/update/${item._id} `}>Update</Link>
                </li>

            </ul>
           )
      }
    </div>
  )
}

export default ProductList
