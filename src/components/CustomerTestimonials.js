import React from 'react'
import cardMidImage from "../images/testimonials.png"
import leftimg from "../images/leftimg.png"
import rightimg from "../images/rightimg.png"
import leftarrow from "../images/leftarrow.png"
import rightarrow from "../images/rightarrow.png"
let style = {
    fontFamily: "Poppins",
    fontSize: "40px",
    fontWeight: "bold",
  };
 let cardTop={
     backgroundColor:"#F1930C",
     padding:"4px"
 }
 let sideCard={
     width:"18rem",
     height:""
 }
 let sidecardTop={
     backgroundColor:"#C7C6C4",
     padding:"2px"
 }

export default function CustomerTestimonials() {
    return (
        <div style={{backgroundColor:"black", marginTop:"350px"}} className=''>
            <div className='container pt-5 text-center'>
             <div className='row text-white'><p style={style}>   Customer Testimonials </p> 
          
             </div>
            <div className='row mt-5'>
                <div className="col mt-5 pt-5">
                    <img src={leftarrow} alt="" className='mt-5 pt-5'/>
                </div>
                <div className='col mt-5'>
                <div className="card" style={sideCard}>
                
                <div style={sidecardTop}>
                <img
                  className="mx-auto"
                  src={leftimg}
                  alt="Card image cap "
                  width={"132px"}
                  height={"132px"}
                />
                </div>
                 <div className="card-body">
                    <h5 className="card-title">User Name</h5>
                    <div>
                    <span className="fa fa-star mx-1"></span>
                    <span className="fa fa-star mx-1"></span>
                    <span className="fa fa-star mx-1"></span>
                    <span className="fa fa-star mx-1"></span>
                    <span className="fa fa-star mx-1"></span>
                    </div>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <a href="#" className="btn btn-outline-secondary">Read More</a>
                </div>
                </div>
                </div>
                <div className='col'>
                <div className="card" style={{width: "18rem"}}>
                <div style={cardTop}>
                <img
                  className="mx-auto"
                  src={cardMidImage}
                  alt="Card image cap "
                  width={"200px"}
                  height={"200px"}
                />
                </div>
                <div className="card-body">
                    <h5 className="card-title">User Name</h5>
                    <div>
                    <span className="fa fa-star mx-1"></span>
                    <span className="fa fa-star mx-1"></span>
                    <span className="fa fa-star mx-1"></span>
                    <span className="fa fa-star mx-1"></span>
                    <span className="fa fa-star mx-1"></span>
                    </div>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <a href="#" className="btn btn-outline-secondary">Read More</a>
                </div>
                </div>
                </div>
                <div className='col mt-5'>
                <div className="card" style={sideCard}>
                
                <div style={sidecardTop}>
                <img
                  className="mx-auto"
                  src={rightimg}
                  alt="Card image cap "
                  width={"132px"}
                  height={"132px"}
                />
                </div>
                 <div className="card-body">
                    <h5 className="card-title">User Name</h5>
                    <div>
                    <span className="fa fa-star mx-1"></span>
                    <span className="fa fa-star mx-1"></span>
                    <span className="fa fa-star mx-1"></span>
                    <span className="fa fa-star mx-1"></span>
                    <span className="fa fa-star mx-1"></span>
                    </div>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <a href="#" className="btn btn-outline-secondary">Read More</a>
                </div>
                </div>
                </div>
                <div className="col mt-5 pt-5">
                    <img src={rightarrow} alt="" className='mt-5 pt-5'/>
                </div>
        </div>
        </div>
        </div>
    )
}
