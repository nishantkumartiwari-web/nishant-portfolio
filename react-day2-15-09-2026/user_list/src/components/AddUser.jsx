import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { useState } from "react";

export default function ValidationTextFields() {
  const [userDetailsSubmitted, setUserDetailsSubmitted] = useState(false);

  const [userDetails, setUserDetails] = useState({
    firstName: "",
    lastName: "",
    age: "",
  });

  async function addUser() {
    console.log("fn called");
    const data = await fetch("https://dummyjson.com/users/add", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userDetails),
    });
    const res = await data.json();
    console.log(res);
    setUserDetailsSubmitted(true);
    setTimeout(() => {
      setUserDetailsSubmitted(false);
    }, 2000);
    setUserDetails({ firstName: "", lastName: "", age: "" });
  }

  return (
    <>
      {!userDetailsSubmitted ? (
        <>
          {" "}
          <TextField
            onChange={(e) =>
              setUserDetails((prev) => ({ ...prev, firstName: e.target.value }))
            }
            value={userDetails.firstName}
            id="outlined-basic"
            label="First Name"
            variant="outlined"
          />
          <TextField
            onChange={(e) =>
              setUserDetails((prev) => ({ ...prev, lastName: e.target.value }))
            }
            value={userDetails.lastName}
            id="outlined-basic"
            label="Last Name"
            variant="outlined"
          />
          <TextField
            onChange={(e) =>
              setUserDetails((prev) => ({ ...prev, age: e.target.value }))
            }
            value={userDetails.age}
            id="outlined-basic"
            label="Age"
            type="number"
            variant="outlined"
          />
          <br />
          <br />
          <div className="btn">
            <Button onClick={addUser} variant="contained">
              Submit
            </Button>
          </div>
        </>
      ) : (
        "Data Submitted Successfully!"
      )}
    </>
  );
}
