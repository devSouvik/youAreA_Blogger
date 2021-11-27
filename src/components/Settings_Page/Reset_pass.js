import "./Reset_pass.css";

export default function Reset_pass() {
  return (
    <div>
      <form className="reset_pass">
        <div class="form-group">
          <label htmlFor="InputOldPassword">Old Password</label>
          <input
            type="password"
            class="form-control"
            id="InputOldPassword"
            aria-describedby="emailHelp"
            placeholder="enter your old password"
          />
        </div>

        <div class="form-group">
          <label htmlFor="InputNewPassword">New Password</label>
          <input
            type="password"
            class="form-control"
            id="InputNewPassword"
            aria-describedby="emailHelp"
            placeholder="enter new password"
          />
        </div>

        <div class="form-group">
          <label htmlFor="InputConfirmNewPassword">Confirm New Password</label>
          <input
            type="password"
            class="form-control"
            id="InputConfirmNewPassword"
            aria-describedby="emailHelp"
            placeholder="confirm your new password"
          />
        </div>
        <button type="submit" class="reset_pass_btn btn btn-dark">
          Change Password
        </button>
      </form>
    </div>
  );
}
