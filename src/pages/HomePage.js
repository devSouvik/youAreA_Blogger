import DefaultNavbar from "../components/common/DefaultNavbar";
import BlogCard from "../components/Home_Page/BlogCard";
import Genres from "../components/Home_Page/Genres";
import User from "../components/Home_Page/User";
import user from "../assets/images/user.jpg";

// mui imports
import Grid from "@mui/material/Grid";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import { Typography } from "@mui/material";
import { Container } from "@mui/material";
import DeleteOutlineRoundedIcon from "@mui/icons-material/DeleteOutlineRounded";
import IconButton from "@mui/material/IconButton";

import "../App.css";
import { useEffect, useState, useContext } from "react";
import { collection, deleteDoc, doc, getDocs } from "firebase/firestore";
import { auth, db } from "../firebase";
// import Typography from "@mui/material/Typography";
// import DeleteOutlineRoundedIcon from "@mui/icons-material/DeleteOutlineRounded";

let dummyUserList = [
  {
    name: "souvik guria",
    bio: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Non, sed?",
    profile_pic: user,
  },
  {
    name: "souvik guria",
    bio: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Non, sed?",
    profile_pic: user,
  },
  {
    name: "souvik guria",
    bio: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Non, sed?",
    profile_pic: user,
  },
];

function HomePage() {
  const [postList, setPostList] = useState([]);

  // const postsCollectionRef = collection(db, "posts");

  useEffect(() => {
    const getPosts = async () => {
      const data = await getDocs(collection(db, "posts"));
      setPostList(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };

    getPosts();
  }, []);

  const deletePost = async (id) => {
    const postDoc = doc(db, "posts", id);
    await deleteDoc(postDoc);
    // console.log(postList);
    setPostList((previous) => previous.filter((value) => value.id !== id)); // automatically state updated after every post deletion
  };

  return (
    <>
      <DefaultNavbar />
      {/* <div className="homePage">
        {postList.map((post) => {
          return (
            <div className="post" key={post.id}>
              <div className="postHeader">
                <div className="title">
                  <h1>{post.title}</h1>
                </div>
                <div className="deletePost">
                  {post.author.id === auth.currentUser.uid && (
                    <button
                      onClick={() => {
                        deletePost(post.id);
                      }}
                    >
                      <DeleteOutlineRoundedIcon
                        sx={{ color: "white", fontSize: 40 }}
                      />
                    </button>
                  )}
                </div>
              </div>
              <div
                className="postTextContainer"
                dangerouslySetInnerHTML={{ __html: post.postText }} //formats html tags to normal text
              />
              <Typography
                style={{ fontSize: "1rem", color: "#6c757d", marginTop: 10 }}
                color="text.secondary"
              >
                - Written by &nbsp;
                <span style={{ fontStyle: "italic", fontWeight: "bold" }}>
                  {post.author.name}
                </span>
              </Typography>
            </div>
          );
        })}
      </div> */}

      <Container sx={{ marginTop: 5, mb: 5 }} maxWidth="xl">
        <Box>
          <Grid container spacing={2}>
            <Grid item lg={7} md={8} sm={12} xs={12}>
              {postList.map((post) => {
                return (
                  <Grid sx={{ mb: 3 }} key={post.id}>
                    <BlogCard
                      title={post.title}
                      desc={{ __html: post.postText }}
                      author={post.author.name}
                      children={
                        post.author.id === auth.currentUser.uid && (
                          <IconButton
                            aria-label="settings"
                            onClick={() => {
                              deletePost(post.id);
                            }}
                          >
                            <DeleteOutlineRoundedIcon />
                          </IconButton>
                        )
                      }
                      time={post.time}
                    />
                  </Grid>
                );
              })}
            </Grid>

            <Grid item lg={5} md={4} sm={9} xs={9}>
              <Genres />
              <Container>
                <Typography
                  sx={{ marginTop: 5, fontWeight: "bold" }}
                  gutterBottom
                  variant="h6"
                >
                  Recommended Users
                </Typography>
              </Container>

              {dummyUserList.map((user) => {
                return (
                  <User
                    name={user.name}
                    bio={user.bio}
                    profilePic={user.profile_pic}
                  />
                );
              })}
            </Grid>
          </Grid>
        </Box>
      </Container>
    </>
  );
}

export default HomePage;
