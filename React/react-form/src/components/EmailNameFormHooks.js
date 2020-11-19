import React, { useState } from "react";

const EmailNameFormHooks = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [errs, setErrs] = useState([]);
  const [items, setItems] = useState([]);


  const handleSubmit = (e) => {
    e.preventDefault();
    const getErrs = validations(e);
    setErrs(getErrs);

    if (getErrs.length !== 0){
      console.log('there are errors');
      window.alert(getErrs);
    }
    else{
      console.log('no errors');
      window.alert(`Name: ${name}, Email: ${email}`);
    }
  };

  const validations = (e) => {
    let newErrs = [];
    if (name == ""){
      newErrs.push(' Please enter name');
    }
    if (email == ""){
      newErrs.push(' Please enter email');
    }
    return newErrs;
  }

  return (
    <div style={{ display: 'flex',  flexDirection:'column', justifyItems:'center'}}>
      <div>
        <label>Name:</label>
        <input
          onChange={(e) => setName(e.target.value)}
          name="name"
          value={name}
        />
      </div>
      <div>
        <label>Email: </label>
        <input
          onChange={(e) => setEmail(e.target.value)}
          name="email"
          value={email}
        />
      </div>
      <label style={{color: 'red'}}>{errs}</label>
      <div>
        <button style={{width:"130px", height:"40px"}} onClick={handleSubmit} type="submit">Submit</button>
      </div>
    </div>
  );
};

export default EmailNameFormHooks;
