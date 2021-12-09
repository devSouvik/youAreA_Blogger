import DefaultNavbar from "../components/common/DefaultNavbar";
import BlogCard from "../components/Home_Page/BlogCard";
import Genres from "../components/Home_Page/Genres";
import User from "../components/Home_Page/User";
// mui imports
import Grid from "@mui/material/Grid";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
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
    bio: "hey, am a software engineer",
  },
  {
    id: 2,
    name: "Sneha Bhardwaj",
    bio: "hey, am a software engineer",
  },
  {
    id: 3,
    name: "FirstName LastName",
    bio: "hey, am a software engineer",
  },
];

function HomePage() {
  return (
    <>
      <DefaultNavbar />
      <Container sx={{ marginTop: 5, mb: 5, marginX: 2 }} maxWidth="xl">
        <Box>
          <Grid container spacing={2}>
            <Grid item lg={8} md={"auto"} sm={8} xs={6}>
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

            <Grid item lg={4} md={"auto"} sm={4} xs={4}>
              <Genres />
              <Container>
                <Typography
                  sx={{ marginTop: 5, fontWeight: "bold" }}
                  gutterBottom
                  variant="h6"
                >
                  Recomended Users
                </Typography>
              </Container>
              {/* recomended users  */}
              {dummyUserList.map((user) => {
                return <User name={user.name} bio={user.bio} />;
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
