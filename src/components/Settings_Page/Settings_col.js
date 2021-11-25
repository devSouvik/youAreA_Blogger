import Form from "./Form";
import user from "../../assets/images/user.jpg";
import "./Settings_col.css";
import { useState } from "react";
import Security from "./Security";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

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
      <div class="container">
        <div class="row">
          {/* left */}
          <div class="col-4 listClass">
            <div class="element editUser" onClick={() => setView(<Form />)}>
              Edit Profile
            </div>
            <hr />
            <div class=" element">
              <div className="resetPassword" onClick={notify}>
                Change Password
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
          </div>
          {/* right */}
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
      </div>
    </>
  );
}
