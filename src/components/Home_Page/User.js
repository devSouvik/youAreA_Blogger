// import Container from "react-bootstrap/Container";
// import Row from "react-bootstrap/Row";
// import Col from "react-bootstrap/Col";
import { useState } from "react";
import user from "../../assets/images/user.jpg";
import tick from "../../assets/images/tick.png";
import follow_user from "../../assets/images/follow_user.png";
import "./User.css";

function User({ name, bio }) {
  const [icon, seticon] = useState(follow_user);

  const clickHandle = () => {
    seticon(tick);
  };

  return (
    <div>
      {/* <Container>
        <Row xs="auto">
          <Col>
            <img className="userImage" src={user} alt="" />
          </Col>
          <Col>
            {name} <br /> <span className="bio"> {bio}</span>
          </Col>
          <Col>
            <img onClick={clickHandle} src={icon} />
          </Col>
        </Row>
      </Container> */}
    </div>
  );
}

export default User;
