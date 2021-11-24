import "./Form.css";
import { useState } from "react";

export default function Form() {
  const [name, setName] = useState("");
  const [bio, setBio] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");

  return (
    <div>
      <div className="container py-5 px-5 ">
        {/* <form className="form-horizontal">
          <fieldset>
            <div className="form-group py-2">
              <label
                className="col-md-4 control-label"
                for="Name"
                onChange={(e) => {
                  setName(e.target.value);
                  console.log(e.target.value);
                }}
              >
                Name
              </label>
              <div className="col-md-4">
                <input
                  id="Name"
                  name="Name"
                  type="text"
                  placeholder="name"
                  className="form-control input-md"
                />
              </div>
            </div>

            <div className="form-group py-2">
              <label
                className="col-md-4 control-label"
                for="PhoneNumber"
                onChange={(e) => {
                  setPhoneNumber(e.target.value);
                  console.log(e.target.value);
                }}
              >
                Phone
              </label>
              <div className="col-md-4">
                <input
                  id="PhoneNumber"
                  name="PhoneNumber"
                  type="text"
                  placeholder="Phone"
                  className="form-control input-md"
                />
              </div>
            </div>

            <div className="form-group py-2">
              <label
                className="col-md-4 control-label"
                for="bio"
                onChange={(e) => {
                  setBio(e.target.value);
                  console.log(e.target.value);
                }}
              >
                Bio
              </label>
              <div className="col-md-4">
                <textarea
                  className="form-control"
                  id="bio"
                  name="bio"
                  placeholder="enter bio here"
                />
              </div>
            </div>

            <div className="form-group py-2">
              <label className="col-md-4 control-label" for="gender">
                Gender
              </label>
              <div className="col-md-5">
                <select id="gender" name="gender" className="form-control">
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                  <option value="NA">Prefer Not to Say</option>
                </select>
              </div>
            </div>

            <div className="form-group">
              <label className="col-md-4 control-label" for="submit"></label>
              <div className="col-md-4">
                <button id="submit" name="submit" className="btn btn-dark">
                  Update
                </button>
              </div>
            </div>
          </fieldset>
        </form> */}
        <form>
          <div class="form-group row py-2">
            <label class="col-4 col-form-label" for="name">
              Name
            </label>
            <div class="col-8">
              <input
                id="name"
                name="name"
                placeholder="Name"
                type="text"
                class="form-control"
              />
            </div>
          </div>
          <div class="form-group row py-2">
            <label class="col-4 col-form-label" for="phoneNumber">
              Phone
            </label>
            <div class="col-8">
              <input
                id="phoneNumber"
                name="phoneNumber"
                placeholder="Phone number"
                type="text"
                class="form-control"
              />
            </div>
          </div>
          <div class="form-group row py-2">
            <label for="bio" class="col-4 col-form-label">
              Bio
            </label>
            <div class="col-8">
              <textarea
                id="bio"
                name="bio"
                cols="40"
                rows="5"
                class="form-control"
              ></textarea>
            </div>
          </div>
          <div class="form-group row py-2">
            <label for="gener" class="col-4 col-form-label">
              Gender
            </label>
            <div class="col-8">
              <select id="gener" name="gener" class="custom-select">
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="na">Prefer Not To Say</option>
              </select>
            </div>
          </div>
          <div class="form-group row">
            <div class="offset-4 col-8">
              <button name="submit" type="submit" class="btn btn-dark">
                Submit
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
