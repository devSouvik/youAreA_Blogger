// import "./security.css";
// mui imports
import { Container } from "@mui/material";
import Typography from "@mui/material/Typography";
import { makeStyles, StylesProvider } from "@mui/styles";

const useStyles = makeStyles({
  helperText: {
    fontWeight: "bold",
  },
  labelText: {
    color: "black",
    fontWeight: "bold",
  },
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
          Lorem ipsum dolor sit amet consectetur, adipisicing elit.
          Necessitatibus quasi porro voluptatibus accusamus. Laboriosam,
          distinctio ipsam doloremque maxime nisi harum, ex, debitis esse
          commodi quia enim repellat maiores suscipit dolorem.
        </Typography>
        <Typography variant="body1" className={classes.para}>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corporis
          aliquid unde pariatur ipsum porro molestias voluptatum odit
          laudantium, obcaecati aspernatur? Corporis voluptas, est aliquam
          dolorem dignissimos dolore nulla nemo quam a, odio temporibus.
          Exercitationem rerum veritatis quaerat sapiente nisi doloremque fugiat
          doloribus, laboriosam sequi rem aut temporibus dolorem minus a.
        </Typography>
      </Container>
    </>
  );
}
