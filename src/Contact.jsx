import React, { useState } from "react";




const Contact=()=> {

  const [data ,setData] = useState({
    fname:"",
    phone:"",
    email:"",
  });

  const InputEvent =(event)=>{
    const {name,value} = event.target;

    setData((preVal)=>{
      return{
        ...preVal,
        [name]:value,
      };
    });
  };

  const formSubmit = (e)=>{
    e.preventDefault();
    alert(`my name is ${data.fname}. my mobile no.${data.phone}`);
  }

  
  return(
  <>
  <div className="my-5">
  <h1 className="text-center">Contact Us</h1>
  </div>
  <div className="container contact_div">
    <div className="row">
      <div className="col-md-6 col-10 mx-auto">
        <form onSubmit={formSubmit}>
  <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">Full Name</label>
    <input type="text" class="form-control"  name="fname" value={data.fname} onChange={InputEvent} id="exampleFormControlInput1" placeholder="Rnter your Name" />

  </div>
  <div class="mb-3">
    <label for="exampleInputEmail1"  class="form-label">Enter your Phone Number</label>
    <input type="number" name="phone" value={data.phone} class="form-control" id="exampleFormControlInput1" placeholder="Enter your Number" />
    
  </div>
  <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">Email address</label>
    <input type="email" name="email" value={data.email} class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
    <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
  </div>
  <div class="mb-3">
    <label for="exampleInputPassword1" class="form-label">Password</label>
    <input type="password" class="form-control" id="exampleInputPassword1" />
  </div>
  <div class="mb-3 form-check">
    <input type="checkbox" class="form-check-input" id="exampleCheck1" />
    <label class="form-check-label" for="exampleCheck1">Check me out</label>
  </div>
  <button type="submit" class="btn  btn-outline-primary">Submit</button>
</form>
      </div>
    </div>
  </div>
  </>

  )};
  

export default Contact;