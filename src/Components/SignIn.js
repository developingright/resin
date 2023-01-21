import React from 'react'
import InputField from '../Utils.js';

const form_img = "https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/img3.webp";

const Form = () => {
  return (
  <form className="signin-form">
      <h3 className="fw-normal mb-3 pb-3" style={{"letterSpacing": "1px"}}>Log in</h3>
      <InputField 
        formClass={"form-outline mb-4"} 
        type={"email"} 
        id={"form"} 
        inputClass={"form-control form-control-lg"} 
        labelClass={"form-label"} 
        labelFor={"form"} 
        labelText={"Email Address"}
        />
      <InputField 
        formClass={"form-outline mb-4"} 
        type={"password"} 
        id={"form2"} 
        inputClass={"form-control form-control-lg"} 
        labelClass={"form-label"} 
        labelFor={"form2"} 
        labelText={"Password"}
        />
      <div className="pt-1 mb-4">
        <button className="btn btn-info btn-lg btn-block" type="button">Login</button>
      </div>
      <p className="small mb-5 pb-lg-2"><a className="text-muted" href="#!">Forgot password?</a></p>
      <p>Don't have an account? <a href="#!" className="link-info">Register here</a></p>
    </form>
  );
}

const SignIn  = () => {
  return (
    <section className='signin-section'>
          <div className="container-fluid">
          <div className="row">
            <div className="col-sm-6 text-black mx-auto signin">
              <div className="px-5 ms-xl-4">
                <span className="h1 fw-bold mb-0">RESIN</span>
              </div>
              <div className="d-flex align-items-center h-custom-2 px-5 ms-xl-4 mt-5 pt-5 pt-xl-0 mt-xl-n5">
                <Form />
              </div>
            </div>
            <div className="col-sm-6 px-0 d-none d-sm-block">
              <img src={form_img} alt="Login" className="w-100 signin-img"/>
            </div>
          </div>
      </div>
    </section>
  );
}

export default SignIn;
