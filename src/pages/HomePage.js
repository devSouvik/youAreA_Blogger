import DefaultNavbar from "../components/common/DefaultNavbar";
import BlogCard from "../components/Home_Page/BlogCard";
import Genres from "../components/Home_Page/Genres";
import User from "../components/Home_Page/User";
import user from "../assets/images/user.jpg";
import user1 from "../assets/images/user1.jpg";
import user2 from "../assets/images/user2.png";

// mui imports
import Grid from "@mui/material/Grid";
// import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
// import Paper from "@mui/material/Paper";
import { Container, Typography } from "@mui/material";

const dummyList = [
  {
    id: 1,
    title: "First Blog",
    author: "Souvik Guria",
    desc: " Lorem ipsum dolor sit amet consectetur adipisicing elit.Cum nihil voluptatibus praesentium atque, expedita  minus animi a eum. Officiis enim laudantium quibusdam nulla incidunt.",
    flare: "technology",
  },
  {
    id: 2,
    title: "Second blog",
    author: "Ram ",
    desc: " Lorem ipsum dolor sit amet consectetur adipisicing elit.Cum nihil voluptatibus praesentium atque, expedita  minus animi a eum. Officiis enim laudantium quibusdam nulla incidunt.",
    flare: "history",
  },
  {
    id: 3,
    title: "Third blog",
    author: "Shyam",
    desc: " Lorem ipsum dolor sit amet consectetur adipisicing elit.Cum nihil voluptatibus praesentium atque, expedita  minus animi a eum. Officiis enim laudantium quibusdam nulla incidunt.",
    flare: "Culture",
  },
  {
    id: 4,
    title: "Forth blog",
    author: "Raju",
    desc: " Lorem ipsum dolor sit amet consectetur adipisicing elit.Cum nihil voluptatibus praesentium atque, expedita  minus animi a eum. Officiis enim laudantium quibusdam nulla incidunt.",
    flare: "money",
  },
  {
    id: 5,
    title: "Fifth blog",
    author: "Babu Bhaiya",
    desc: " Lorem ipsum dolor sit amet consectetur adipisicing elit.Cum nihil voluptatibus praesentium atque, expedita  minus animi a eum. Officiis enim laudantium quibusdam nulla incidunt.",
    flare: "literature",
  },
  {
    id: 6,
    title: "third blog",
    author: "shyam",
    desc: " Lorem ipsum dolor sit amet consectetur adipisicing elit.Cum nihil voluptatibus praesentium atque, expedita  minus animi a eum. Officiis enim laudantium quibusdam nulla incidunt.",
    flare: "society",
  },
  {
    id: 7,
    title: "third blog",
    author: "shyam",
    desc: " Lorem ipsum dolor sit amet consectetur adipisicing elit.Cum nihil voluptatibus praesentium atque, expedita  minus animi a eum. Officiis enim laudantium quibusdam nulla incidunt.",
    flare: "education",
  },
];

const dummyUserList = [
  {
    id: 1,
    name: "Souvik Guria",
    bio: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    profilePic: user,
  },
  {
    id: 2,
    name: "Sneha Bhardwaj",
    bio: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    profilePic: user2,
  },
  {
    id: 3,
    name: "FirstName LastName",
    bio: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    profilePic: user1,
  },
];

function HomePage() {
  return (
    <>
      <DefaultNavbar />
      <Container sx={{ marginTop: 5, mb: 5 }} maxWidth="xl">
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
              {/* recomended users  */}
              {dummyUserList.map((user) => {
                return (
                  <User
                    name={user.name}
                    bio={user.bio}
                    profilePic={user.profilePic}
                  />
                );
              })}
              {/* ends */}
            </Grid>

            {/* end of 2nd col */}
          </Grid>
          {/* end of grid-container  */}
        </Box>
      </Container>
    </>
  );
}

export default HomePage;
