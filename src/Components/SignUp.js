import React from 'react'
import InputField from '../Utils.js';

const handleChange = () =>{
  var radios = document.querySelectorAll('input[name="radio"]');
  for (var i = 0 ; i < radios.length; i++){
    var elem = document.querySelector(`label[for="${radios[i].id}"]`);
    if (radios[i].checked){
      elem.className+=' checked';
    }
    else{
      elem.classList.remove('checked');
    }
  } 
}

const RadioComp = ()  =>{
  return(
    <div className="d-flex flex-row signup-check">
        <div className="col-md-5">
          <label className='checks' htmlFor="box">
            <input type="radio"  id="box" onChange={handleChange} name = 'radio'/>
            <p>Professor</p>
          </label>
        </div>
        <div className="col-md-4">
        <label className='checks' htmlFor="box2">
            <input type="radio"  id="box2" name='radio' onChange={handleChange}/>
            <p>Student</p>
          </label>
        </div>
    </div>
  );
}

const Form1 = () => {
  const inputs = 
    [ {id:"form3Example1c",text:"Your Name",type:"text"},
      {id:"form3Example3c",text:"Email",type:"email"},
      {id:"form3Example4c",text:"Password",type:"password"},
      {id:"form3Example5c",text:"Repeat your password",type:"password"}
    ]
  return(
      <form className="mx-1 mx-md-4 sign-up-form">
        {inputs.map(x =>
            <div className="d-flex flex-row align-items-center mb-4" key = {x.text}>
              <InputField 
                formclassName={"form-outline flex-fill mb-0"} 
                type={x.type} 
                id={x.id} 
                inputClass={"form-control sign-up-input"} 
                labelClass={"form-label sign-up-label"} 
                labelFor={x.id}
                labelText={x.text}
              />
            </div>
          )}
        <div className="form-check d-flex justify-content-center mb-5">
          <input className="form-check-input me-2" type="checkbox" value="" id="form2Example3c" />
          <label className="form-check-label" htmlFor="form2Example3">
            I agree all statements in <a href="#! ">Terms of service</a>
          </label>
        </div>
        <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
          <button type="button" className="next-button">&#8250;</button>
        </div>
    </form>
  );
}

const Step1 = () => {
  return(
    <>
      <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">
        <p className="text-center h1 fw-bold signup-title">Sign up</p>
        <RadioComp />
        <Form1 />
      </div>
      <div className="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2 signup-banner">
      </div>
    </>
  );
} 


export default function SignUp() {
  return (
    <section className="signin-section" style={{"backgroundColor": "eee"}}>
      <div className="container h-100">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col-lg-12 col-xl-11">
          <div className="card text-black" style={{"borderRadius": "25px"}}>
              <div className="card-body ">
                <div className="row justify-content-center">
                    <Step1 />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
