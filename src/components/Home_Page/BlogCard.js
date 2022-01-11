// import "./BlogCard.css";
// mui imports
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { makeStyles } from "@mui/styles";
import CardHeader from "@mui/material/CardHeader";
import Avatar from "@mui/material/Avatar";

import { useContext, useState } from "react";

import { GlobalContext } from "../../contexts/GlobalContext";

import { Markup } from "interweave";

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
    fontWeight: "bold",
    textOverflow: "ellipsis",
    overflow: "hidden",
  },

  footer: {
    fontSize: "1rem",
    color: "#6c757d",
    fontWeight: 900,
  },

  cardClass: {
    backgroundColor: "#f3f3f3",
  },

  readMore: {
    marginLeft: 5,
    color: "#1F51FF",
    marginRight: 10,
    marginBottom: "5px",
  },

  parentFlexRight: {
    display: "flex",
    justifyContent: "flex-end",
  },
});

export default function BlogCard({
  title,
  author,
  desc,
  children,
  time,
  dp,
  link,
}) {
  const classes = useStyles();

  const { user } = useContext(GlobalContext);

  return (
    <>
      <Card className={classes.cardClass}>
        <CardHeader
          titleTypographyProps={{
            fontSize: 22,
            fontWeight: "bold",
          }}
          subheaderTypographyProps={{
            fontWeight: "bold",
          }}
          avatar={<Avatar alt="" src={dp} sx={{ width: 44, height: 44 }} />}
          action={children}
          title={title}
          subheader={author}
        />
        <CardContent>
          {/* <div dangerouslySetInnerHTML={desc} /> */}
          <Markup content={desc} />
          <Typography className={classes.footer} color="text.secondary">
            - <span className={classes.timeStamp}> {time}</span>
          </Typography>
        </CardContent>
        <CardActions className={classes.parentFlexRight}>
          <a href={`/blog-reading/${link}`} className={classes.readMore}>
            Read More
          </a>
        </CardActions>
      </Card>
    </>
  );
}
