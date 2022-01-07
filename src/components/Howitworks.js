import React from "react";
import requirementsgathering from "../images/requiremnt.png"
import uiUx from "../images/uiUx (2).png"
import prototype from "../images/prototype.png"
import development from "../images/development.png"
import quality from "../images/quality.png"
import deploement from "../images/deploement.png"
import support from "../images/support.png"




export default function Howitworks() {
  let style = {
    fontFamily: "Poppins",
    fontSize: "40px",
    fontWeight: "bold",
  };
  return (
    <div className="container text-center">
      <div className="row pt-5">
        <h3 className="" style={{ color: "#FF8700", fontFamily: "Poppins" }}>
          How It Works
        </h3>
        <h2 className="" style={style}>
          Process We Follow
        </h2>
      </div>
      <div className="row pt-5 mt-53">
        <div className="col">
            <img src={requirementsgathering} alt="image"/>
          <h4>Requirement Gathering</h4>
          <p>
            We follow the first and foremost priority of gathering requirements,
            resources, and information to begin our project.
          </p>
        </div>
        <div className="col">
            <img src={ uiUx} alt="" />
          <h4>Ul/UX Design</h4>
          <p>
          We Create Catchy And Charming 
            Designs Ibvith The Latest Tools Of 
            Designing To Make It A Best User-
            Friendly Experienee
          </p>
        </div>
      
        <div className="col">
            <img src={prototype} alt="" />
          <h4>Prototype</h4>
          <p>
          After Designing.. You Will Gel Your 
            Prototype, Which Will Be Sent 
            Ahead For The Development 
            Process For The Product. 


          </p>
        </div>
        <div className="col">
            <img src={ development} alt="" />
          <h4>Development </h4>
          <p>
          Development Of Mobile Application
            Website Started Using Latest 
            Tools & Technologies With 
            Transparency. 
          </p>
        </div>
      </div>
      <div className="row pt-5 mt-53">
        <div className="col">
            <img src={quality} alt="image"/>
          <h4>Quality Assurance</h4>
          <p>
          Logic Worms Values Quality And Provides 
            100% Bug Free Application With No 
            Compromisation In It. 
          </p>
        </div>
        <div className="col">
            <img src={deploement} alt="" />
          <h4>Deployment</h4>
          <p>After Trial And Following All Processes, Your App Is Ready To Launch On The Play Store.
          </p>
        </div>
        <div className="col">
            <img src={support} alt="" />
          <h4>Support & Maintenance </h4>
          <p>
          We Create Catchy And Charming Designs Ibvith The Latest Tools Of Designing To Make It A Best User-Friendly Experiene
          </p>
        </div>
        
      </div>
    </div>
  );
}
