import React from "react";
import { useState } from "react";

const ObjectState = () => {
  const [name, setName] = useState({
    firstName: "",
    lastName: " ",
  });

  const nameChange = (event) => {
    setName(
        { ...name ,
            [event.target.name] : event.target.value
        }
    );
  };

  return (
    <>
      <input
        type="text"
        name="firstName"
        value={name.firstName}
        onChange={nameChange}
      />

      <input
        type="text"
        name="lastName"
        value={name.lastName}
        onChange={nameChange}
      />
      <h1>
        firstName : {name.firstName} and LastName : {name.lastName}
      </h1>
    </>
  );
};

export default ObjectState;
