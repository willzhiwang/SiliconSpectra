import React, { useState } from "react";

const EmailNameFormHooks = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = () => {
    window.alert(`Name: ${name}, Email: ${email}`);
  };

  return (
    <>
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
      <button onClick={handleSubmit}>Submit</button>
    </>
  );
};

export default EmailNameFormHooks;
