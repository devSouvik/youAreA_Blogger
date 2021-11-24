import "./Left_col.css";

export default function Left_col() {
  return (
    <div className="container px-5 d-none d-sm-block">
      <ul className="listClass container py-5 px-5">
        <li>Edit Profile</li>
        <hr />
        <li>Change Password</li>
        <hr />
        <li>Security</li>
      </ul>
    </div>
  );
}
