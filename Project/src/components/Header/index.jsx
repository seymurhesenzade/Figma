import React from "react";
import "../Header/index.scss";
import { BsFillTelephoneFill } from "react-icons/bs";
import { CiSearch } from "react-icons/ci";
import { CgProfile } from "react-icons/cg";
import { CiHeart } from "react-icons/ci";
import { MdOutlineShoppingBag } from "react-icons/md";


const Header = () => {
  return (
    <>
      <header id="headerId">
        <div className="container">
          <div className="header">  
<div className="header-top">
    <p>
        <a href="#"><BsFillTelephoneFill />  +748 383 23 14</a>
    </p>

    <nav>
        <ul>
            <li><a href="#">Terms of Use</a></li>
            <li><a href="#">FAQ</a></li>
            <li><a href="#">Customer service</a></li>
        </ul>
    </nav>
</div>
</div>
</div>
</header>

{/* ___________________________________________________________________________ */}
<div className="header-middle">
<div className="container">
<header id="headermiddleId">
<h1 style={{display:'inline-block', margin:'-28px'}}>ChicCharry</h1>
<div style={{display:'flex', alignItems:'center'}}><input type="text" placeholder="Search all product"  /><CiSearch style={{fontSize:'30px'}} /></div>

<div style={{display:'inline-block',display:'flex',alignItems:'center'}} className="sign-up"><CgProfile style={{fontSize:'20px'}} /><p>Sign up</p> </div>
{/* --------------------------------------------------------------- */}
<div style={{display:'inline-block',display:'flex',alignItems:'center'}}  className="wishlist"><CiHeart style={{fontSize:'20px'}} /><p>Wishlist</p></div>
{/* --------------------------------------------------------------- */}

<div style={{display:'inline-block',display:'flex',alignItems:'center'}}  className="basket"><MdOutlineShoppingBag style={{fontSize:'20px'}} /><p>Basket</p></div>
</header>
</div>
</div>
{/* ___________________________________________________________________________ */}
<div className="header-bottom">
<div className="container">
<header id="headerbottomId">
<nav>
    <ul>
        <li><a href="#">Evening bags</a></li>
        <li><a href="#">Shoulder bag</a></li>
        <li><a href="#">Backpack</a></li>
        <li><a href="#">Handbag</a></li>
        <li><a href="#">Postman bag</a></li>
        <li><a href="#">Belt bags</a></li>
    </ul>
</nav></header>
</div>
</div>

       
    </>
  );
};

export default Header;
