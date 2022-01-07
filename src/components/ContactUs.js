import React from "react";
import formleft from "../images/formleft.png"
import "../App.css"


export default function ContactUs() {

       
  return (
    <div style={{}}>
      <div className="container">
          <div className="row text-center mt-5">
              <h3 style={{ color: "#FF8700", fontFamily: "Poppins" }}>Get In Touch</h3>
              <h1 className="font-weight-bold" style={{ fontFamily: "Poppins" }}>Heave Any Project In Mind?</h1>
          </div>
          <div className="row">
              <div className="col-6"></div>
              <div className="col-6">
                <div style={{fontWeight:"bold",fontSize:"20px"}} className="mt-5">Don't Be Shy <br />Send Us A Message</div>
                <p>Hethere You're Searching For A New Partner Or A New Career. We Want To Hear From You! Our Direct Contact Information Here. </p>
              </div>
          </div>
          <div className="row">
              <div className="col-6"><img src={formleft} alt="" width={"600px"} height={"400px"}/></div>
              <div className="col-6">
                <form action="">
             <div className="form-group">
                <label className="labelStyling" htmlFor="name">Your Name</label>
                <input type="text" className="form-control" id="name"/>
              </div>
              <div className="form-group">
                <label className="labelStyling" htmlFor="email">Email</label>
                <input type="email" className="form-control" id="email" />
              </div>
              <div className="form-group">
                <label className="labelStyling" htmlFor="subject">Subject</label>
                <input type="text" className="form-control" id="subject" />
              </div>
              <div className="form-group">
                <label className="labelStyling" htmlFor="exampleFormControlTextarea1">Your Message(Optional)</label>
                <textarea class="form-control" id="exampleFormControlTextarea1" rows="10"></textarea>

              </div>
                  {/* <label htmlFor="name">Your Name</label>
                  <input type="text" />
                  <label htmlFor="name">Email</label>
                  <input type="eamil" />
                  <label htmlFor="name">Subject</label>
                  <input type="text" />
                  <label htmlFor="name">Your Message (Optional)</label>
                  <input type="text" /> */}
                </form>
              </div>
          </div>
      </div>
      
    </div>
  );
}

