import Form from "./Form";
import user from "../../assets/images/user.jpg";
import "./Settings_col.css";
import { useState } from "react";
import Security from "./Security";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Reset_pass from "./Reset_pass";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import Stack from "react-bootstrap/Stack";

toast.configure();
export default function Settings_col() {
  const [view, setView] = useState(<Form />);

  const notify = () => {
    toast.success("Email sent, please check your inbox!", {
      position: "bottom-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };

  return (
    <>
      {/* <div class="container">
        <div class="row">
          left

          <div class="listClass">
            <Col>
              <div class="element editUser" onClick={() => setView(<Form />)}>
                Edit Profile
              </div>
              <hr />
              <div class=" element">
                <div
                  className="resetPassword"
                  onClick={() => {
                    setView(<Reset_pass />);
                  }}
                >
                  Reset Password
                </div>
              </div>
              <hr />
              <div class="element">
                <div
                  className="security"
                  onClick={() => {
                    setView(<Security />);
                  }}
                >
                  Security
                </div>
              </div>
            </Col>
          </div>
          right


          <div class="col-8">
            <div className="right_col">
              <div className="user">
                <img src={user} alt="Avatar" class="avatar" />
                <h3 className="username">souvikguria</h3>
              </div>
              {view}
            </div>
          </div>
        </div>
      </div> */}
      <Container>
        <Row>
          <Col md={4} className="left-col">
            <Stack gap={5} className="element">
              <div className="editUser" onClick={() => setView(<Form />)}>
                Edit Profile
              </div>
              <div
                className="resetPassword"
                onClick={() => {
                  setView(<Reset_pass />);
                }}
              >
                Reset Password
              </div>
              <div
                className="security"
                onClick={() => {
                  setView(<Security />);
                }}
              >
                Security
              </div>
            </Stack>
          </Col>
          <Col md={8} className="right-col">
            <Stack>
              <div className="user">
                <img src={user} alt="Avatar" class="avatar" />
                <h3 className="username">souvikguria</h3>
              </div>
              <div>{view}</div>
            </Stack>
          </Col>
        </Row>
      </Container>
    </>
  );
}
