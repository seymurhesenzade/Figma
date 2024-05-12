import '../Footer/index.scss'
import { CiSearch } from "react-icons/ci";
import { CgMail } from "react-icons/cg";
import { FaPhoneAlt } from "react-icons/fa";
import { PiTelegramLogoDuotone } from "react-icons/pi";
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";







const Footer = () => {
  return (
    <>

  <div className="container">
<footer id='footertopId'>

<div style={{display:'inline-block'}}><h1 style={{display:'inline-block'}}>Snobella</h1></div>
<div style={{display:'inline-block',display:'flex',alignItems:'center'}}><input type="text"placeholder='Search all product' /><CiSearch style={{fontSize:'25px'}} /></div>
</footer> 
  </div>
    
<hr />
{/* -------------------------------------------------------------------------------  */}

<div className="container">
<footer id='footermiddleId'>
<p style={{display:'inline-block'}}>The wise man therefore always holds
selectionThe wise man therefore always 
rejects pleasures to secure other greater</p>
<br />
<br />
<div style={{display:'inline-block',display:'flex',alignItems:'center'}} ><CgMail style={{fontSize:'25px',marginRight:'5px'}} /><p style={{display:'inline-block'}} >Snobella@gmail.com</p></div>
<br />
<div style={{display:'inline-block', display:'flex',alignItems:'center'}}><FaPhoneAlt style={{fontSize:'18px',marginRight:'5px'}} /> <p style={{display:'inline-block'}}>+748 383 23 14</p></div>
<br />
<br />

<div style={{display:'inline-block',display:'flex',alignItems:'center'}}><PiTelegramLogoDuotone style={{marginRight:'5px'}} /><button className='btn'>Send message</button></div>




</footer>   
</div>
<br />
<br />

<hr />
{/* --------------------------------------------------------------------------------- */}

<footer id='footerbottomId'>
<div className="container">

<div style={{display:'inline-block',display:'flex',alignItems:'center',justifyContent:'space-between'}} >
<p style={{display:'inline-block'}}>© 2020. All rights reserved.</p>

<div><FaInstagram style={{marginRight:'10px'}} />
<FaFacebook style={{marginRight:'10px'}} /> 
<IoLogoWhatsapp style={{marginRight:'10px'}} /></div>
</div>



</div>


</footer>
    </>
  )
}

export default Footer
