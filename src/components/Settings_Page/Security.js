// import "./security.css";
// mui imports
import { Container } from "@mui/material";
import Typography from "@mui/material/Typography";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  para: {
    marginBottom: 20,
    textAlign: "left",
    fontWeight: "bold",
  },
});

export default function Security() {
  const classes = useStyles();

  return (
    <>
      <Container>
        <Typography variant="body1" className={classes.para}>
          ◉ Truley open source
        </Typography>
        <Typography variant="body1" className={classes.para}>
          ◉ No user data collection
        </Typography>
        <Typography variant="body1" className={classes.para}>
          ◉ Protected Database system from Google
        </Typography>
        <Typography variant="body1" className={classes.para}>
          ◉ No selling of private user data
        </Typography>
        <Typography variant="body1" className={classes.para}>
          ◉ No hidden charges
        </Typography>
        <Typography variant="body1" className={classes.para}>
          ◉ No advertisement
        </Typography>
      </Container>
    </>
  );
}
