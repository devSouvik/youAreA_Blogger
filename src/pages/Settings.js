import DefaultNavbar from "../components/common/DefaultNavbar";
import Settings_col from "../components/Settings_Page/Settings_col";
import "./Settings.css";

export default function Settings() {
  return (
    <div>
      <DefaultNavbar />

      <div class="settings_column row ">
        <Settings_col />
      </div>
    </div>
  );
}
