import React from "react";
import webimg from "../images/webdevelopment.png";
import andriod from "../images/androiddevelopment.png";
import Uiux from "../images/Uiux.png";
import contentWriting from "../images/contentWriting.png"
import seo from "../images/seo.png"
import socialmediamarketing from "../images/socialmediamarketing.png"

export default function Services() {
  let style = {
    fontFamily: "Poppins",
    fontSize: "40px",
    fontWeight: "bold",
  };
  return (
    <div style={{ backgroundColor: "black" }} className="pb-5">
      <div className="container text-center">
        <div className="row pt-5">
          <h3 className="" style={{ color: "#FF8700", fontFamily: "Poppins" }}>
            Our Services
          </h3>
          <h2 className="text-white" style={style}>
            We Provide You With High Quality <br /> It Solution Services
          </h2>
        </div>
        <div className="row mb-4">
          <div className="col">
            <div className="card" style={{ width: "25rem" ,height:"18rem" ,borderBottom:"8px solid #FF8700"}}>
              {/* <img className="cardimg-top mx-auto" src={webimg} alt="Card image cap " width={"80px"} height={"80px"}/> */}
              <div className="card-body">
                <img
                  className="mx-auto"
                  src={webimg}
                  alt="Card image cap "
                  width={"80px"}
                  height={"80px"}
                />
                <h5 className="card-title">Web Development</h5>
                <p className="card-text">
                  We Carefully Craft Each Website And Make It Adaptable,
                  Flexible And Responsive To Adapt To The Ever-Changing World Of
                  Technology.
                </p>
                <a href="#" className="btn btn-primary">
                  Learn more
                </a>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card" style={{ width: "25rem" ,height:"18rem",borderBottom:"8px solid #FF8700"}}>
              {/* <img className="cardimg-top mx-auto" src={webimg} alt="Card image cap " width={"80px"} height={"80px"}/> */}
              <div className="card-body">
                <img
                  className="mx-auto"
                  src={andriod}
                  alt="Card image cap "
                  width={"80px"}
                  height={"80px"}
                />
                <h5 className="card-title">Andriod Development</h5>
                <p className="card-text">
                We Provide Services In Android Application Development With High Professionalism & Reasonable Market Prices. 
                </p>
                <a href="#" className="btn btn-primary">
                  Learn more
                </a>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card" style={{ width: "25rem" ,height:"18rem",borderBottom:"8px solid #FF8700"}}>
              {/* <img className="cardimg-top mx-auto" src={webimg} alt="Card image cap " width={"80px"} height={"80px"}/> */}
              <div className="card-body">
                <img
                  className="mx-auto"
                  src={Uiux}
                  alt="Card image cap "
                  width={"80px"}
                  height={"80px"}
                />
                <h5 className="card-title">Ghraphics & UI/UX Design</h5>
                <p className="card-text">
                Our Design Team Creates Solutions That Are Both Intuitive To Use And Tailored To Match Our Clients' Specific User Tasks And Business Goals. 

                </p>
                <a href="#" className="btn btn-primary">
                  Learn more
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <div className="card" style={{ width: "25rem" ,height:"18rem",borderBottom:"8px solid #FF8700"}}>
              {/* <img className="cardimg-top mx-auto" src={webimg} alt="Card image cap " width={"80px"} height={"80px"}/> */}
              <div className="card-body">
                <img
                  className="mx-auto"
                  src={contentWriting}
                  alt="Card image cap "
                  width={"80px"}
                  height={"80px"}
                />
                <h5 className="card-title">Content Writing</h5>
                <p className="card-text">
                A Unique Blend Of Technical, Creative, And Qualified Content Writers, We Guarantee Customer Satisfaction Through Our Professional Writing Services. 
                </p>
                <a href="#" className="btn btn-primary">
                  Learn more
                </a>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card" style={{ width: "25rem" ,height:"18rem",borderBottom:"8px solid #FF8700"}}>
              {/* <img className="cardimg-top mx-auto" src={webimg} alt="Card image cap " width={"80px"} height={"80px"}/> */}
              <div className="card-body">
                <img
                  className="mx-auto"
                  src={seo}
                  alt="Card image cap "
                  width={"80px"}
                  height={"80px"}
                />
                <h5 className="card-title"> SEO/SEM</h5>
                <p className="card-text">
                Build Your Search Engine Optimization Foundation With Trusted Experts. We Offer The Right Plans And Strategies That Match Your Exact Needs. 

                </p>
                <a href="#" className="btn btn-primary">
                  Learn more
                </a>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card" style={{ width: "25rem" ,height:"18rem",borderBottom:"8px solid #FF8700"}}>
              {/* <img className="cardimg-top mx-auto" src={webimg} alt="Card image cap " width={"80px"} height={"80px"}/> */}
              <div className="card-body">
                <img
                  className="mx-auto"
                  src={socialmediamarketing}
                  alt="Card image cap "
                  width={"80px"}
                  height={"80px"}
                />
                <h5 className="card-title">Social Media Marketing</h5>
                <p className="card-text">
                Grow Brand Awareness, Engagement and Traffic With Our Social Media Marketing Services Team Using 
                   Social Media Platforms. 
                </p>
                <a href="#" className="btn btn-primary">
                  Learn more
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
