import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Modal from "@mui/material/Modal";
import { useState } from "react";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  textAlign: "center",
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export default function BasicModal() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [userDetailsSubmitted, setUserDetailsSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const [userDetails, setUserDetails] = useState({
    firstName: "",
    lastName: "",
    age: "",
  });

  const [errorState, setErrorState] = useState({});

  const validated = () => {
    console.log("validating")
    const errObj= {};
    if (!userDetails.firstName) {
      errObj.firstNameError = "First Name is mandatory";
    }
    if (!userDetails.lastName) {
      errObj.lastNameError = "Last Name is mandatory";
    }
    if (!userDetails.age) {
      errObj.ageError = "Age is mandatory";
    }

    setErrorState(errObj);
    console.log(errObj);

    if(!userDetails.firstName || !userDetails.lastName || !userDetails.age){
      return false;
    }
    return true;  
  };

  async function addUser() {
    console.log("fn called");
    if (!validated()) {
      console.log("not validated")
      return;
    }
    setLoading(true);
    const data = await fetch("https://dummyjson.com/users/add", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userDetails),
    });
    const res = await data.json();
    setLoading(false);
    console.log(res);
    setUserDetailsSubmitted(true);
    setTimeout(() => {
      setUserDetailsSubmitted(false);
      setOpen(false);
    }, 2000);
    setUserDetails({ firstName: "", lastName: "", age: "" });
  }

  return (
    <div>
      <Button sx={{ width: 150 }} variant="contained" onClick={handleOpen}>
        Add User
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <>
            {loading ? (
              <Button loading loadingPosition="end">
                Loading...
              </Button>
            ) : (
              <>
                {!userDetailsSubmitted ? (
                  <>
                    <h2>Fill in the user details</h2>
                    <TextField
                      onChange={(e) =>
                        setUserDetails((prev) => ({
                          ...prev,
                          firstName: e.target.value,
                        }))
                      }
                      value={userDetails.firstName}
                      id={
                        errorState.firstName
                          ? "outlined-error-helper-text"
                          : "outlined-basic"
                      }
                      label={errorState.firstName ? "Error" : "First Name"}
                      required
                      variant="outlined"
                      error={errorState.firstNameError ? true : false}
                      helperText={
                        errorState.firstNameError
                          ? "First Name is required"
                          : false
                      }
                    />
                    <br />
                    <br />
                    <TextField
                      onChange={(e) =>
                        setUserDetails((prev) => ({
                          ...prev,
                          lastName: e.target.value,
                        }))
                      }
                      value={userDetails.lastName}
                      id={
                        errorState.firstName
                          ? "outlined-error-helper-text"
                          : "outlined-basic"
                      }
                      label={errorState.lastName ? "Error" : "Last Name"}
                      required
                      variant="outlined"
                      error={errorState.lastNameError ? true : false}
                      helperText={
                        errorState.lastNameError
                          ? "Last Name is required"
                          : false
                      }
                    />
                    <br />
                    <br />
                    <TextField
                      onChange={(e) =>
                        setUserDetails((prev) => ({
                          ...prev,
                          age: e.target.value,
                        }))
                      }
                      type="number"
                      value={userDetails.age}
                      id={
                        errorState.firstName
                          ? "outlined-error-helper-text"
                          : "outlined-basic"
                      }
                      label={errorState.age ? "Error" : "Age"}
                      required
                      variant="outlined"
                      error={errorState.ageError ? true : false}
                      helperText={
                        errorState.ageError
                          ? "Age is required"
                          : false
                      }
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
            )}
          </>
        </Box>
      </Modal>
    </div>
  );
}
