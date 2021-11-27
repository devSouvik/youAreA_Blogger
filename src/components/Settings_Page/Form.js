import "./Form.css";
import { useState } from "react";

export default function Form() {
  const [name, setName] = useState("");
  const [bio, setBio] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");

  const handleClick = () => {
    console.log(name, bio, phoneNumber);
  };

  return (
    <div>
      <div className="container py-5 px-5 ">
        <form>
          <div className="form-group row py-2">
            <label htmlFor="inputPassword" className="col-sm-2 col-form-label">
              Name
            </label>
            <div className="col-sm-10">
              <input
                type="text"
                className="form-control"
                id="inputText"
                placeholder="name"
                onChange={(e) => {
                  setName(e.target.value);
                }}
              />
            </div>
          </div>

          <div className="form-group row py-2">
            <label htmlFor="inputPassword" className="col-sm-2 col-form-label">
              Phone
            </label>
            <div className="col-sm-10">
              <input
                type="number"
                className="form-control"
                id="inputPhone"
                placeholder="phone Number"
                onChange={(e) => {
                  setPhoneNumber(e.target.value);
                }}
              />
            </div>
          </div>

          <div className="form-group row py-2">
            <label htmlFor="inputPassword" className="col-sm-2 col-form-label">
              Bio
            </label>
            <div className="col-sm-10">
              <textarea
                className="form-control"
                id="bioTextArea"
                rows="5"
                placeholder="write your bio here"
                onChange={(e) => {
                  setBio(e.target.value);
                }}
              ></textarea>
            </div>
          </div>

          <select className=" genderSelection custom-select py-2">
            <option selected>Select Gender</option>
            <option value="1">Male</option>
            <option value="2">Female</option>
          </select>

          <div className="py-2">
            <button
              type="submit"
              className="btn btn-outline-dark float-right py-2 "
              onClick={handleClick}
            >
              Update
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
