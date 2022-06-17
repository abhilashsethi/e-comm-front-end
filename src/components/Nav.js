import React from 'react'
import { Link, useNavigate } from "react-router-dom";

const Nav = ()=>{
    const auth = localStorage.getItem('user');
    const navigate = useNavigate();
    const logout= ()=>{
        localStorage.clear();
        navigate("/signup");
    }

    return(
        <div>
            <img src="https://res.cloudinary.com/practicaldev/image/fetch/s--0FRJGdyZ--/c_imagga_scale,f_auto,fl_progressive,h_500,q_auto,w_1000/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/epv55hgtsfi8csprpj9u.jpg" alt="logo" 
           className='logo' />
            {
            auth ? 
            
           <ul className='nav-ul'>
               <li> <Link to="/">Products</Link></li>
               <li><Link to="/add">Add Products</Link></li>
               <li><Link to="/update">Update Products</Link></li>
               <li><Link to="/profile">Profile</Link></li>
               <li> <Link to="/login" onClick={logout} >Logout ({JSON.parse(auth).name}) </Link> </li>
               </ul>
               :
               <ul className='nav-ul nav-right'>
                   <li><Link to="/signup">SignUp</Link></li>
                    <li><Link to="/login">Login</Link></li>                 
               </ul>
                   
                } 
        </div>
    )
}

export default Nav;
