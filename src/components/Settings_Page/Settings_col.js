import Form from "./Form";
// import user from "../../assets/images/user.jpg";
import "./Settings_col.css";
import { useState, useContext } from "react";
import Security from "./Security";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Reset_pass from "./Reset_pass";
// mui imports
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Avatar from "@mui/material/Avatar";
import { GlobalContext } from "../../contexts/GlobalContext";

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
  fontWeight: "bold",
}));

toast.configure();
export default function Settings_col() {
  const [view, setView] = useState(<Form />);

  const { user } = useContext(GlobalContext);

  // const notify = () => {
  //   toast.success("Email sent, please check your inbox!", {
  //     position: "bottom-center",
  //     autoClose: 5000,
  //     hideProgressBar: false,
  //     closeOnClick: true,
  //     pauseOnHover: true,
  //     draggable: true,
  //     progress: undefined,
  //   });
  // };

  return (
    <div className="container">
      <Container maxWidth="xl">
        <Grid container spacing={2}>
          {/* === left col === */}
          <Grid sx={{ marginTop: 8 }} item xs={12} md={12} lg={4}>
            <Stack spacing={2}>
              <Item sx={{ textAlign: "left" }}>
                <div
                  className="itemClass"
                  onClick={() => {
                    setView(<Form />);
                  }}
                >
                  Edit Profile
                </div>
                <hr />
                <div
                  className="itemClass"
                  onClick={() => {
                    setView(<Reset_pass />);
                  }}
                >
                  Change Password
                </div>
                <hr />
                <div
                  className="itemClass"
                  onClick={() => {
                    setView(<Security />);
                  }}
                >
                  Security
                </div>
              </Item>
            </Stack>
          </Grid>
          {/* === Right col === */}
          <Grid item xs={12} md={12} lg={8}>
            <div style={{ marginBottom: "1.5rem" }}>
              <Stack direction="row" spacing={2}>
                <Avatar alt="Remy Sharp" src={user.profile_picture} />
                <Typography
                  variant="h4"
                  sx={{ textAlign: "left", fontWeight: "bold" }}
                >
                  {user.username}
                </Typography>
              </Stack>
            </div>
            <Item>{view}</Item>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}
