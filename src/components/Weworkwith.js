import React from "react";
import small from "../images/small.png"
import chart from "../images/chart.png"
import enterprise from "../images/enterprise.png"
import resident from "../images/resident.png"


export default function Weworkwith() {
    let style={
        marginBottm:"-100px",
    }
  return (
    <div style={{ backgroundColor: "black" }}>
      <div className="container">
        
        <div className="w-50 p-3 d-inline-block" style={{}}> 
        <div className="row">
        <h3
              className=""
              style={{ color: "#FF8700", fontFamily: "Poppins",marginTop:"100px"}}
            >
              Who We Work With
            </h3>
            <p className="text-white">
              As A Leading Mobile App Development Company In Pakistan, We Worked
              With 2000+ Business Either It Is A Start-Up Or Enterprise And
              Delivers The Best Solution In The Industry. Logic Worms, We Offer
              A Broad Range Of App Development Services On Business
              Requirements.
            </p>
        </div>
        
      </div>
            <div className="w-50 p-3 d-inline-block">   
           <div className="row">
             <div className="col-6 mb-2">
             <div className="card text-center">
              {
                <img
                  className="cardimg-top mx-auto"
                  src={small}
                  alt="Card image cap "
                //   width={"80px"}
                //   height={"80px"}
                />
              }
              <p>Small & Medium Business</p>
            </div>
             </div>
             <div className="col-6">
             <div className="card text-center">
              {
                <img
                  className="cardimg-top mx-auto"
                  src={chart}
                  alt="Card image cap "
                //   width={"80px"}
                //   height={"80px"}
                />
              }
              <p>Startup Business</p>
            </div>
             </div>
             <div className="col-6">
             <div className="card text-center">
              {
                <img
                  className="cardimg-top mx-auto"
                  src={enterprise}
                  alt="Card image cap "
                //   width={"80px"}
                //   height={"80px"}
                />
              }
              <p>Enterprise</p>
            </div>
             </div>
             <div className="col-6">
             <div className="card text-center">
              {
                <img
                  className="cardimg-top mx-auto"
                  src={resident}
                  alt="Card image cap "
                //   width={"80px"}
                //   height={"80px"}
                />
              }
              <p>Agencies</p>
            </div>
             </div>
           </div>
            </div>
      </div>
      
    </div>
  );
}
