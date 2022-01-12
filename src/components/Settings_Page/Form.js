// import "./Form.css";
import { useState, useContext } from "react";
// MUI imports
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import UpgradeIcon from "@mui/icons-material/Upgrade";
import { makeStyles } from "@mui/styles";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Box from "@mui/material/Box";
import FormHelperText from "@mui/material/FormHelperText";

import { GlobalContext } from "../../contexts/GlobalContext";

import { doc, updateDoc, collection } from "firebase/firestore";
import { auth, db } from "../../firebase";

const useStyles = makeStyles({
  helperText: {
    fontWeight: "bold",
    fontSize: 15,
  },
  labelText: {
    color: "black",
    fontWeight: "bold",
  },
});

export default function Form() {
  const [name, setName] = useState("");
  const [bio, setBio] = useState("");
  const [email, setEmail] = useState("");
  const [gender, setGender] = useState("");

  const handleChange = (e) => {
    setGender(e.target.value);
    console.log(gender);
  };

  const classes = useStyles();

  const { user } = useContext(GlobalContext);

  const userCollectionRef = doc(db, "users", user.id);

  // const updateDetails = async (id, name, email, bio, gender) => {
  //   await updateDoc(userCollectionRef, {});
  //   const userDoc = doc(db, "users", id);
  //   const newFields = { name: name, email: email, bio: bio, gender: gender };
  //   await updateDoc(userDoc, newFields);
  //   alert("Successfully updated !");

  // };

  const updateDetails = async () => {
    await updateDoc(userCollectionRef, {
      name: name,
      email: email,
      bio: bio,
      gender: gender,
    })
      .then(function () {
        alert("updated successfully !!");
      })
      .catch(function (error) {
        // The document probably doesn't exist.
        console.error("Error updating document: ", error);
      });
  };

  return (
    <>
      <TextField
        inputProps={{ style: { fontWeight: "bold" } }}
        FormHelperTextProps={{
          className: classes.helperText,
        }}
        InputLabelProps={{
          className: classes.labelText,
        }}
        onChange={(e) => {
          setName(e.target.value);
          console.log(name);
        }}
        sx={{ fontWeight: "bold" }}
        helperText="Please enter your name"
        fullWidth
        id="outlined-basic"
        margin="normal"
        label="Name"
        variant="outlined"
      />
      <TextField
        inputProps={{ style: { fontWeight: "bold" } }}
        FormHelperTextProps={{
          className: classes.helperText,
        }}
        InputLabelProps={{
          className: classes.labelText,
        }}
        onChange={(e) => {
          setEmail(e.target.value);
          console.log(email);
        }}
        sx={{ fontWeight: "bold" }}
        helperText="Please enter your new Email id"
        fullWidth
        margin="normal"
        id="outlined-basic"
        label="Email"
        variant="outlined"
      />
      <TextField
        inputProps={{ style: { fontWeight: "bold" } }}
        FormHelperTextProps={{
          className: classes.helperText,
        }}
        InputLabelProps={{
          className: classes.labelText,
        }}
        onChange={(e) => {
          setBio(e.target.value);
          console.log(bio);
        }}
        multiline
        rows={4}
        helperText="Please enter your bio"
        fullWidth
        margin="normal"
        id="outlined-basic"
        label="Bio"
        variant="outlined"
      />

      <Box sx={{ minWidth: 120, marginBottom: 5 }}>
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">Gender</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            helperText="Please select your Gender"
            value={gender}
            label="Gender"
            onChange={handleChange}
          >
            <MenuItem value={"male"}>Male</MenuItem>
            <MenuItem value={"female"}>Female</MenuItem>
          </Select>
          <FormHelperText sx={{ fontWeight: "bold", fontSize: 15 }}>
            Please Select Your Gender
          </FormHelperText>
        </FormControl>
      </Box>

      <Button
        onClick={() => {
          updateDetails();
        }}
        sx={{ fontWeight: "bold" }}
        variant="contained"
        endIcon={<UpgradeIcon />}
      >
        Submit
      </Button>
    </>
  );
}
