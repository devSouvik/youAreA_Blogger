import DefaultNavbar from "../components/common/DefaultNavbar";
import Left_col from "../components/Settings_Page/Left_col";
import Right_col from "../components/Settings_Page/Right_col";
import "./Settings.css";

export default function Settings() {
  return (
    <div>
      <DefaultNavbar />
      <div class="settings_column row ">
        <div class="col-4">
          <Left_col />
        </div>
        <div class=" col-lg-8 col-md-12 col-xs-12 col-12">
          <Right_col />
        </div>
      </div>
    </div>
  );
}
