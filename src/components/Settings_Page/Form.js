// import "./Form.css";
import { useState } from "react";
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
  const [phoneNumber, setPhoneNumber] = useState("");
  const [gender, setGender] = useState("");

  // const handleClick = () => {
  //   console.log(name, bio, phoneNumber);
  // };

  const handleChange = (e) => {
    setGender(e.target.value);
    console.log(gender);
  };

  const classes = useStyles();
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
        FormHelperTextProps={{
          className: classes.helperText,
        }}
        InputLabelProps={{
          className: classes.labelText,
        }}
        onChange={(e) => {
          setPhoneNumber(e.target.value);
          console.log(phoneNumber);
        }}
        sx={{ fontWeight: "bold" }}
        helperText="Please enter your Phone Number"
        fullWidth
        margin="normal"
        id="outlined-basic"
        label="Phone"
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
        sx={{ fontWeight: "bold" }}
        variant="contained"
        endIcon={<UpgradeIcon />}
      >
        Submit
      </Button>
    </>
  );
}
