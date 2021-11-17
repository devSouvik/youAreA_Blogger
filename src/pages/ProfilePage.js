import Navbar from "../components/common/DefaultNavbar";
import ProfileBody from "../components/Profile_Page/ProfileBody";

const ProfilePage = () => {
  return (
    <div>
      <Navbar />
      <div>
        <p>
          Posts <hr />
        </p>
      </div>
      <ProfileBody />
    </div>
  );
};

export default ProfilePage;
