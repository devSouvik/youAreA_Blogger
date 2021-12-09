import { useState } from "react";
import user from "../../assets/images/user.jpg";
import tick from "../../assets/images/tick.png";
import follow_user from "../../assets/images/follow_user.png";
import "./User.css";
// mui imports
import Grid from "@mui/material/Grid";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import { Typography } from "@mui/material";

function User({ name, bio }) {
  const [icon, seticon] = useState(follow_user);

  const clickHandle = () => {
    seticon(tick);
  };

  const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body1,
    padding: theme.spacing(1),
    // textAlign: "center",
    color: theme.palette.text.secondary,
  }));

  return (
    <>
      <Box sx={{ marginTop: 5, paddingX: 5 }}>
        <Grid container spacing={3}>
          <Grid item xs>
            <img src={user} className="userImage" alt="user_dp" />
          </Grid>
          <Grid item xs={6}>
            <Typography sx={{ fontWeight: "bold" }} variant="h6">
              {name}
            </Typography>
            <Typography
              sx={{ color: "#999", fontWeight: "bold" }}
              noWrap="true"
              variant="subtitle2"
            >
              {bio}
            </Typography>
          </Grid>
          <Grid item xs>
            <img onClick={clickHandle} src={icon} alt="" />
          </Grid>
        </Grid>
      </Box>
    </>
  );
}

export default User;
