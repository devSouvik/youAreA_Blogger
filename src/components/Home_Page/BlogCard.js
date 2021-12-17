// import "./BlogCard.css";
// mui imports
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  flareBtn: {
    display: "inline-block",
    marginLeft: 200,
    borderRadius: 50,
    fontSize: 19,
  },
  author: {
    fontStyle: "italic",
    fontWeight: "bold",
  },
  titleStyle: {
    fontSize: 25,
    fontWeight: "bold",
  },
  flareStyle: {
    marginLeft: "50px",
    borderRadius: "50px",
    backgroundColor: "whitesmoke",
    paddingLeft: "10px",
    paddingRight: "10px",
    fontFamily: "Andale Mono, monospace",
  },
  descStyle: {
    marginBottom: "1rem",
    fontWeight: 900,
  },
  footer: {
    fontSize: "1rem",
    color: "#6c757d",
  },
});

export default function BlogCard({ title, author, desc, flare }) {
  const classes = useStyles();

  return (
    <>
      <Card>
        <CardContent>
          <Typography
            className={classes.titleStyle}
            color="text.secondary"
            gutterBottom
          >
            {title}
            <Button size="small" className={classes.flareStyle}>
              {flare}
            </Button>
          </Typography>
          <Typography className={classes.descStyle} variant="body1">
            {desc}
          </Typography>
          <Typography className={classes.footer} color="text.secondary">
            - Written by
            <span className={classes.author}> {author}</span>
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small" sx={{ fontWeight: "bold" }}>
            Learn More
          </Button>
        </CardActions>
      </Card>
    </>
  );
}
