import React from 'react'
import InputField from '../Utils.js';

const Form = () => {
  const inputs = 
    [ {id:"form3Example1c",text:"Your Name",type:"text"},
      {id:"form3Example3c",text:"Your Email",type:"email"},
      {id:"form3Example4c",text:"Password",type:"password"},
      {id:"form3Example5c",text:"Repeat your password",type:"password"}
    ]
  return(
    <form className="mx-1 mx-md-4">
      {inputs.map(x =>
          <div className="d-flex flex-row align-items-center mb-4" key = {x.text}>
            <InputField 
              formclassName={"form-outline flex-fill mb-0"} 
              type={x.type} 
              id={x.name} 
              inputClass={"form-control"} 
              labelClass={"form-label"} 
              labelFor={x.name}
              labelText={x.text}
            />
          </div>
        )}
      <div className="form-check d-flex justify-content-center mb-5">
        <input className="form-check-input me-2" type="checkbox" value="" id="form2Example3c" />
        <label className="form-check-label" htmlFor="form2Example3">
          I agree all statements in <a href="#!">Terms of service</a>
        </label>
      </div>
      <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
        <button type="button" className="btn btn-primary btn-lg">Register</button>
      </div>
  </form>
  );
} 

export default function SignUp() {
  const form_img="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/draw1.webp";
  return (
    <section className="signin-section" style={{"backgroundColor": "eee"}}>
      <div className="container h-100">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col-lg-12 col-xl-11">
            <div className="card text-black" style={{"borderRadius": "25px"}}>
              <div className="card-body p-md-5">
                <div className="row justify-content-center">
                  <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">
                    <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">Sign up</p>
                    <Form />
                  </div>
                  <div className="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2">
                    <img src={form_img}
                      className="img-fluid" alt="sample"/>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
