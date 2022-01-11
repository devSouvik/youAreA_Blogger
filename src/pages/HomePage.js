import DefaultNavbar from "../components/common/DefaultNavbar";
import BlogCard from "../components/Home_Page/BlogCard";
import Genres from "../components/Home_Page/Genres";
import User from "../components/Home_Page/User";
import user from "../assets/images/user.jpg";

// mui imports
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import { Typography } from "@mui/material";
import { Container } from "@mui/material";
import DeleteOutlineRoundedIcon from "@mui/icons-material/DeleteOutlineRounded";
import IconButton from "@mui/material/IconButton";

import "../App.css";
import { useEffect, useState, useNavigate, useCallback } from "react";
import { collection, deleteDoc, doc, getDocs } from "firebase/firestore";
import { auth, db } from "../firebase";

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
  // const navigate = useNavigate();

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
    setPostList((previous) => previous.filter((value) => value.id !== id)); // automatically state updated after every post deletion
  };

  return (
    <>
      <DefaultNavbar />
      <Container sx={{ marginTop: 5, mb: 5 }} maxWidth="xl">
        <Box>
          <Grid container spacing={2}>
            <Grid item lg={7} md={8} sm={12} xs={12}>
              {postList.map((post) => {
                // truncate
                var text = post.postText;
                var length = 300;
                var trimmedString = text.substring(0, length);
                let finalString = trimmedString + " ...";
                return (
                  <Grid sx={{ mb: 3 }} key={post.id}>
                    <BlogCard
                      title={post.title}
                      desc={finalString}
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
                      dp={post.author.profile_picture}
                      link={post.id}
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
