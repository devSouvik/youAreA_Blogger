import { useState } from "react";
import user from "../../assets/images/user.jpg";
import tick from "../../assets/images/tick.png";
import follow_user from "../../assets/images/follow_user.png";
import "./User.css";
// mui imports
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
// import ArticleIcon from "@mui/icons-material/Article";
import SubjectTwoToneIcon from "@mui/icons-material/SubjectTwoTone";
import {
  Avatar,
  Card,
  Chip,
  createStyles,
  Divider,
  IconButton,
  makeStyles,
  Stack,
  Switch,
  Typography,
} from "@mui/material";
import { grey, red } from "@mui/material/colors";
import CardHeader from "@mui/material/CardHeader";
import PersonAddAltRoundedIcon from "@mui/icons-material/PersonAddAltRounded";
import HowToRegRoundedIcon from "@mui/icons-material/HowToRegRounded";
import { fontWeight } from "@mui/system";

// const useStyle = makeStyles((theme: Theme) => createStyles({}));

function User({ name, bio, profilePic }) {
  const [icon, seticon] = useState(follow_user);

  const clickHandle = () => {
    seticon(tick);
  };

  // const Item = styled(Paper)(({ theme }) => ({
  //   ...theme.typography.body1,
  //   padding: theme.spacing(1),
  //   // textAlign: "center",
  //   color: theme.palette.text.secondary,
  // }));

  return (
    <>
      {/* <Box sx={{ marginTop: 5, paddingX: 5 }}>
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
      </Box> */}

      <Card sx={{ marginBottom: 5, marginLeft: 4, marginRight: 10 }}>
        <Box sx={{ p: 2, display: "flex" }}>
          <Avatar variant="rounded" sx={{ marginTop: 1.25 }} src={profilePic} />
          <Stack spacing={0.5}>
            <Typography fontWeight={700} sx={{ marginX: 2 }}>
              {name}
            </Typography>
            <div style={{ display: "flex" }}>
              <SubjectTwoToneIcon sx={{ color: grey[500], marginLeft: 1.75 }} />
              <Typography
                variant="body2"
                color="text.secondary"
                // noWrap="true"
                sx={{ marginLeft: 1, fontWeight: "bold" }}
              >
                {bio}
              </Typography>
            </div>
          </Stack>
          <img
            style={{ width: 30, height: 32, marginTop: 15, marginLeft: 5 }}
            src={icon}
            onClick={clickHandle}
            alt=""
          />
        </Box>
      </Card>
    </>
  );
}

export default User;
