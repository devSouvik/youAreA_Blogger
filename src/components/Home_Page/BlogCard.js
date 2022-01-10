// import "./BlogCard.css";
// mui imports
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { makeStyles } from "@mui/styles";
import CardHeader from "@mui/material/CardHeader";
import Avatar from "@mui/material/Avatar";

import { useContext } from "react";

import { GlobalContext } from "../../contexts/GlobalContext";

const useStyles = makeStyles({
  flareBtn: {
    display: "inline-block",
    marginLeft: 200,
    borderRadius: 50,
    fontSize: 19,
  },

  timeStamp: {
    fontStyle: "italic",
    fontWeight: "bold",
  },

  titleStyle: {
    fontSize: 25,
    fontWeight: "bold",
  },

  flareStyle: {
    marginLeft: "100px",
    borderRadius: "50px",
    backgroundColor: "whitesmoke",
    paddingLeft: "10px",
    paddingRight: "10px",
    fontFamily: "Andale Mono, monospace",
  },

  descStyle: {
    fontWeight: 900,
  },

  footer: {
    fontSize: "1rem",
    color: "#6c757d",
    fontWeight: 900,
  },
});

export default function BlogCard({ title, author, desc, children, time }) {
  const classes = useStyles();

  const { user } = useContext(GlobalContext);

  return (
    <>
      <Card>
        <CardHeader
          titleTypographyProps={{
            fontSize: 22,
            fontWeight: "bold",
          }}
          subheaderTypographyProps={{
            fontWeight: "bold",
          }}
          avatar={
            <Avatar
              alt={user.username}
              src={user.profile_picture}
              sx={{ width: 44, height: 44 }}
            />
          }
          action={children}
          title={title}
          subheader={author}
        />

        <CardContent>
          <Typography
            noWrap
            className={classes.descStyle}
            variant="body1"
            dangerouslySetInnerHTML={desc}
          />
          <Typography className={classes.footer} color="text.secondary">
            - <span className={classes.timeStamp}> {time}</span>
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small" sx={{ fontWeight: "bold" }}>
            Read More
          </Button>
        </CardActions>
      </Card>
    </>
  );
}
