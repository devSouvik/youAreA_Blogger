import Form from "./Form";
import user from "../../assets/images/user.jpg";
import "./Right_col.css";

export default function Right_col() {
  return (
    <>
      <div className="right_col">
        <div className="user">
          <img src={user} alt="Avatar" class="avatar" />
          <h3 className="username">souvikguria</h3>
        </div>
        <Form />
      </div>
    </>
  );
}
