// import "./Reset_pass.css";
// mui imports
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { makeStyles } from "@mui/styles";
import { useState } from "react";

const useStyles = makeStyles({
  helperText: {
    fontWeight: "bold",
  },
  labelText: {
    color: "black",
    fontWeight: "bold",
  },
});

export default function Reset_pass() {
  const classes = useStyles();

  const [password, setPassword] = useState("");
  const [newPass, setNewPass] = useState("");
  const [confirmPass, setConfirmPass] = useState("");

  return (
    <>
      <TextField
        FormHelperTextProps={{
          className: classes.helperText,
        }}
        InputLabelProps={{
          className: classes.labelText,
        }}
        onChange={(e) => {
          setNewPass(e.target.value);
          console.log();
        }}
        sx={{ fontWeight: "bold" }}
        helperText="Please enter your Old Password"
        fullWidth
        id="outlined-basic"
        margin="normal"
        label="Old Password"
        variant="outlined"
      />
      <TextField
        FormHelperTextProps={{
          className: classes.helperText,
        }}
        InputLabelProps={{
          className: classes.labelText,
        }}
        onChange={(e) => {
          setNewPass(e.target.value);
          console.log();
        }}
        sx={{ fontWeight: "bold" }}
        helperText="Please enter your New Password"
        fullWidth
        id="outlined-basic"
        margin="normal"
        label="New Password"
        variant="outlined"
      />

      <TextField
        FormHelperTextProps={{
          className: classes.helperText,
        }}
        InputLabelProps={{
          className: classes.labelText,
        }}
        onChange={(e) => {
          setConfirmPass(e.target.value);
          console.log();
        }}
        sx={{ fontWeight: "bold" }}
        helperText="Please Confirm your New Password"
        fullWidth
        id="outlined-basic"
        margin="normal"
        label="Confirm Password"
        variant="outlined"
      />

      <Button sx={{ fontWeight: "bold" }} variant="contained">
        Submit
      </Button>
    </>
  );
}
