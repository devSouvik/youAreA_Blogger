import DefaultNavbar from "../components/common/DefaultNavbar";
// import BlogCard from "../components/Home_Page/BlogCard";
// import Genres from "../components/Home_Page/Genres";
// import User from "../components/Home_Page/User";
// import user from "../assets/images/user.jpg";
// import user1 from "../assets/images/user1.jpg";
// import user2 from "../assets/images/user2.png";

// mui imports
// import Grid from "@mui/material/Grid";
// import { styled } from "@mui/material/styles";
// import Box from "@mui/material/Box";
// import Paper from "@mui/material/Paper";
import { Typography } from "@mui/material";

import "../App.css";

// new imports
import { useEffect, useState } from "react";
import { collection, deleteDoc, doc, getDocs } from "firebase/firestore";
import { auth, db } from "../firebase";
// import Typography from "@mui/material/Typography";
// import DeleteOutlineRoundedIcon from "@mui/icons-material/DeleteOutlineRounded";

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
      <div className="homePage">
        {postList.map((post) => {
          return (
            <div className="post" key={post.id}>
              <div className="postHeader">
                <div className="title">
                  <h1>{post.title}</h1>
                </div>
                {/* <div className="deletePost"></div> */}
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
      </div>

      {/* <Container sx={{ marginTop: 5, mb: 5 }} maxWidth="xl">
        <Box>
          <Grid container spacing={2}>
            <Grid item lg={7} md={8} sm={12} xs={12}>
              {dummyList.map((listItem) => {
                return (
                  <Grid sx={{ mb: 3 }} key={listItem.id}>
                    <BlogCard
                      title={listItem.title}
                      author={listItem.author}
                      desc={listItem.desc}
                      flare={listItem.flare}
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
                  recommended Users
                </Typography>
              </Container>

              {dummyUserList.map((user) => {
                return (
                  <User
                    name={user.name}
                    bio={user.bio}
                    profilePic={user.profilePic}
                  />
                );
              })}
            </Grid>
          </Grid>
        </Box>
      </Container> */}
    </>
  );
}

export default HomePage;
