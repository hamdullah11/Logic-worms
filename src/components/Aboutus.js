import React from 'react'
import img1 from "../images/img1.png"
import img2 from "../images/img2.png"

export default function Aboutus() {
    let style = {
        fontFamily: "Poppins",
        fontSize: "40px",
        fontWeight: "bold",
    
      };
     let pic1={
        position: "relative",
        top: "0",
        left: "0",
        
     } 
     let pic2={
        position: "absolute",
        top: "300px",
        left: "250px"
    }
    let topText={
        position: "absolute",
        top: "100px",
        right: "400px"
    }
    return (
        <div className='container mt-5'>
            <div className="row text-center">
                <h1 style={style}>About Us</h1>
            </div>
         <div className='row'>
             <div className='position-relative'>
        
            <div  style={pic1}><img src={img1} alt="" width={"421px"} height={"567px"}/></div>
            <div style={topText}>
            <h3 style={{ fontFamily: "Poppins",fontWeight: "bold",color: "#FF8700"}}>10 Years Of Experience</h3>
            <p style={{ fontFamily: "Poppins",fontWeight: "bold"}}>We Are Independently-Run Computing And <br />
                Technology Consulting Company, Which Provides  <br />
                Customized And High-Quality Services.</p>
            </div>
            
            <div  style={pic2}><img src={img2} alt=""  width={"421px"} height={"567px"}/></div>
         </div>
         </div>
        </div>
    )
}
