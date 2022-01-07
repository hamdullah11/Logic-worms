import React from "react";
import invitationcard from "../images/invitationcard.png";
import flashOnCall from "../images/flashOnCall.png";
import lock from "../images/lock.png";
import scaner from "../images/scaner.png";
import thumbanail from "../images/thumbanail.png";
import fit from "../images/fit.png";


export default function Products() {
  let style = {
    fontFamily: "Poppins",
    fontSize: "40px",
    fontWeight: "bold",
  };
  return (
    <div className="" >
      <div className="container text-center">
        <div className="row pt-5">
          <h3 className="" style={{ color: "#FF8700", fontFamily: "Poppins" }}>
          Our Products
          </h3>
          <h2 className="" style={style}>
          We Head A Iight On Our Work.
          </h2>
        </div>
        <div className="row mb-4">
          <div className="col">
            <div className="card  text-white p-4" style={{ width: "25rem" ,height:"18rem",  backgroundColor:"#000000"}}>
              {/* <img className="cardimg-top mx-auto" src={webimg} alt="Card image cap " width={"80px"} height={"80px"}/> */}
              <div className="card-body">
                <img
                  className=""
                  src={invitationcard}
                  alt="Card image cap "
                  width={"200px"}
                  height={"200px"}
                />
                <h5 className="card-title mt-2 ">Invitaion Card Maker</h5>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card  text-white p-4" style={{ width: "25rem" ,height:"18rem",  backgroundColor:"#000000"}}>
              {/* <img className="cardimg-top mx-auto" src={webimg} alt="Card image cap " width={"80px"} height={"80px"}/> */}
              <div className="card-body">
                <img
                  className=""
                  src={flashOnCall}
                  alt="Card image cap "
                  width={"200px"}
                  height={"200px"}
                />
                <h5 className="card-title mt-2 ">Falsh On Call</h5>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card  text-white p-4" style={{ width: "25rem" ,height:"18rem", backgroundColor:"#000000"}}>
              {/* <img className="cardimg-top mx-auto" src={webimg} alt="Card image cap " width={"80px"} height={"80px"}/> */}
              <div className="card-body">
                <img
                  className=""
                  src={lock}
                  alt="Card image cap "
                  width={"200px"}
                  height={"200px"}
                />
                <h5 className="card-title mt-2 ">Fingerprint Lock</h5>
              </div>
            </div>
          </div>
        </div>
        <div className="row mb-4">
          <div className="col">
            <div className="card  text-white p-4" style={{ width: "25rem" ,height:"18rem",  backgroundColor:"#000000"}}>
              {/* <img className="cardimg-top mx-auto" src={webimg} alt="Card image cap " width={"80px"} height={"80px"}/> */}
              <div className="card-body">
                <img
                  className=""
                  src={scaner}
                  alt="Card image cap "
                  width={"200px"}
                  height={"200px"}
                />
                <h5 className="card-title mt-2 ">Qr Bar Code Scanner</h5>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card  text-white p-4" style={{ width: "25rem" ,height:"18rem",  backgroundColor:"#000000"}}>
              {/* <img className="cardimg-top mx-auto" src={webimg} alt="Card image cap " width={"80px"} height={"80px"}/> */}
              <div className="card-body">
                <img
                  className=""
                  src={thumbanail}
                  alt="Card image cap "
                  width={"200px"}
                  height={"200px"}
                />
                <h5 className="card-title mt-2 ">Thumbnail Maker</h5>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card  text-white p-4" style={{ width: "25rem" ,height:"18rem", backgroundColor:"#000000"}}>
              {/* <img className="cardimg-top mx-auto" src={webimg} alt="Card image cap " width={"80px"} height={"80px"}/> */}
              <div className="card-body">
                <img
                  className=""
                  src={fit}
                  alt="Card image cap "
                  width={"200px"}
                  height={"200px"}
                />
                <h5 className="card-title mt-2 ">Stay Fit</h5>
              </div>
            </div>
          </div>
        </div>
       
      </div>
    </div>
  );
}
