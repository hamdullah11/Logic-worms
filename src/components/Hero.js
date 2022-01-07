import React from "react";
import backgroundImg from "./company.png";
// import backgroundImg2 from "./Rectangle 1080.png"
import microsoft from "../images/microsoft.png";
import caryn from "../images/crayn.png";
import int from "../images/int.png";
import sales from "../images/sales.png";
import veeam from "../images/veeam.png";
import vmware from "../images/vmware.png";
import "../App.css"

let heroImage = {
  backgroundImage: `url(${backgroundImg})`,
  height: "80vh",
  backgroundPosition: "center",
  backgroundSize: "cover",
  // WebkitFilter: 'brightness(79%)'
};
let heroh1 = {
  color: "white",
  fontFamily: "Poppins",
  fontWeight: "bold",
  marginTop: "6rem",
  fontSize: "107px",
  // WebkitFilter: 'brightness(100%) !important'
};

export default function Services() {
  return (
    <>
      <div className="pt-5" style={heroImage}>
        <div className="container">
          <div className="row">
            <h1 style={heroh1}>IT Services</h1>

            <div className="col-sm-5 text-white" style={{ fontSize: "24px" }}>
              Our Team Has Through Expertise In Developing And Implementing
              Effective Computing Solutions That Suit Your Business Unique
              Needs.
            </div>
          </div>
          <button type="button" className="btn btn-light  mt-4">
            Get In Touch
          </button>
          <button
            type="button"
            className="btn btn-primary mx-5 mt-4"
            style={{ backgroundColor: "#FF8700", color: "white" }}
          >
            Learn more
          </button>
        </div>
      </div>
      <div className="container">
        <div className="row mt-5"><h2>Trusted By &rarr;</h2></div>
        <div className="row pt-3">
          <div className="column">
            <img src={microsoft} alt="Snow" style={{width:"100%"}} />
          </div>
          <div className="column">
            <img src={int} alt="Forest" style={{width:"100%"}} />
          </div>
          <div className="column">
            <img src={veeam} alt="Mountains" style={{width:"100%"}} />
          </div>
          <div className="column">
            <img src={caryn} alt="Mountains" style={{width:"100%"}} />
          </div>
          <div className="column">
            <img src={sales} alt="Mountains" style={{width:"100%"}} />
          </div>
          <div className="column">
            <img src={vmware} alt="Mountains" style={{width:"100%",marginTop:"30px"}} />
          </div>
        </div>
      </div>
    </>
  );
}
