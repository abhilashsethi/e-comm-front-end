import React ,{useState} from 'react'

function AddProduct() {
    const [name, setName] = useState("");
    const [price, setPrice] = useState("");
    const [category, setCategory] = useState("");
    const [company, setCompany] = useState("");
    const [err, setErr] = useState(false);

    const addProduct = async()=>{
        if(!name || !price || !category ||!company){
          setErr(true);
          return false;          
        }
        console.log(name, price, category, company);
        const userId = JSON.parse(localStorage.getItem('user'))._id;
        console.log(userId); 
        let result = await fetch("http://localhost:5000/add-product",{
            method: "post" ,
            body: JSON.stringify({name, price, category, company, userId}),
            headers:{
                "Content-type" : "application/json"
            }
            
        });
        result = await result.json();
        console.log(result);
    }

  return (
    <div className='product'>
      <h1>Add product page</h1>
      <input type="text" value={name} onChange={(e)=>{setName(e.target.value)}} className='inputBox' placeholder='Enter product name'/>
      {err && !name && <span className='invalid-input'>Enter valid name</span>}
      <input type="text" value={price} onChange={(e)=>{setPrice(e.target.value)}} className='inputBox' placeholder='Enter product price'/>
      {err && !price && <span className='invalid-input'>Enter valid price</span>}
      <input type="text" value={category} onChange={(e)=>{setCategory(e.target.value)}} className='inputBox' placeholder='Enter product category'/>
      {err && !category && <span className='invalid-input'>Enter valid category</span>}
      <input type="text" value={company} onChange={(e)=>{setCompany(e.target.value)}} className='inputBox' placeholder='Enter product company'/>
      {err && !company && <span className='invalid-input'>Enter valid company</span>}
      
      <button onClick={addProduct} className='appButton' >Add Product</button>
    </div>
  )
}

export default AddProduct
