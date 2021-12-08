import DefaultNavbar from "../components/common/DefaultNavbar";
import BlogCard from "../components/Home_Page/BlogCard";
import Genres from "../components/Home_Page/Genres";
import User from "../components/Home_Page/User";
// import Container from "react-bootstrap/Container";
// import Row from "react-bootstrap/Row";
// import Col from "react-bootstrap/Col";
// import "bootstrap/dist/css/bootstrap.min.css";
import "./HomePage.css";

const dumyList = [
  {
    id: 1,
    title: "first blog",
    author: "souvik guria",
    desc: "this is our first blog",
    flare: "technology",
  },
  {
    id: 2,
    title: "second blog",
    author: "Ram ",
    desc: "this is our second blog",
    flare: "history",
  },
  {
    id: 3,
    title: "third blog",
    author: "shyam",
    desc: "this is our third blog",
    flare: "Culture",
  },
  {
    id: 4,
    title: "third blog",
    author: "shyam",
    desc: "this is our third blog",
    flare: "Culture",
  },
  {
    id: 5,
    title: "third blog",
    author: "shyam",
    desc: "this is our third blog",
    flare: "Culture",
  },
  {
    id: 6,
    title: "third blog",
    author: "shyam",
    desc: "this is our third blog",
    flare: "Culture",
  },
  {
    id: 7,
    title: "third blog",
    author: "shyam",
    desc: "this is our third blog",
    flare: "Culture",
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
    name: "FirstName LastName",
    bio: "hey, am a software engineer",
  },
  {
    id: 3,
    name: "Sneha Bhardwaj",
    bio: "hey, am a software engineer",
  },
];

function HomePage() {
  return (
    <>
      {/* <DefaultNavbar />

      <div className="blog-list">
        <Container classaName="py-5">
          <Row>
            <Col xs={12} md={12} lg={8}>
              {dumyList.map((blog) => {
                return (
                  <BlogCard
                    key={blog.id}
                    title={blog.title}
                    author={blog.author}
                    desc={blog.desc}
                  />
                );
              })}
            </Col>
            <Col xs={6} md={4} lg={4}>
              <div class="sticky-md-top">
                <Genres />
                <p className="userListHeading">
                  <strong> Whom To Follow - </strong>
                </p>
                {dummyUserList.map((user) => {
                  return (
                    <div className="userList">
                      <User key={user.id} name={user.name} bio={user.bio} />
                    </div>
                  );
                })}
              </div>
            </Col>
          </Row>
        </Container>
      </div> */}
    </>
  );
}

export default HomePage;
