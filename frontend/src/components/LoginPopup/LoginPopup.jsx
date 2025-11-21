import React, { useContext } from "react";
import "./LoginPopup.css";
import { useState } from "react";
import { assets } from "../../assets/assets"; 
import { StoreContext } from "../../context/StoreContext";
import axios from "axios";

const LoginPopup = ({ setShowLogin }) => {

  const {url, setToken, fetchUserProfile} = useContext(StoreContext);
  const [currState, setCurrState] = useState("Login");
  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
    phone: "",
    street: "",
    city: "",
    state: "",
    zipcode: "",
    country: "",
  });
  const [profileImage, setProfileImage] = useState(null);
  const [previewImage, setPreviewImage] = useState(null);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setProfileImage(file);
      // Create preview URL
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreviewImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const onChangeHandler = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setData((data) => ({ ...data, [name]: value }));
  };

  const onLogin = async (event)=>{
    event.preventDefault();
    let newUrl = url;
    if (currState === "Login") {
      newUrl += "/api/user/login";//appending login api to url.
      
      const response = await axios.post(newUrl, {
        email: data.email,
        password: data.password
      });

      if (response.data.success) {
        // Save Token
        setToken(response.data.token);
        localStorage.setItem("token", response.data.token);
        await fetchUserProfile(response.data.token);
        setShowLogin(false);
        // Reset form
        setData({
          name: "",
          email: "",
          password: "",
          phone: "",
          street: "",
          city: "",
          state: "",
          zipcode: "",
          country: "",
        });
        setProfileImage(null);
        setPreviewImage(null);
      } else {
        alert(response.data.message);
      }
    }
    else{
      newUrl += "/api/user/register";//appending register api to url.
      
      const formData = new FormData();
      formData.append("name", data.name);
      formData.append("email", data.email);
      formData.append("password", data.password);
      formData.append("phone", data.phone);
      formData.append("street", data.street);
      formData.append("city", data.city);
      formData.append("state", data.state);
      formData.append("zipcode", data.zipcode);
      formData.append("country", data.country);
      if (profileImage) {
        formData.append("profileImage", profileImage);
      }

      const response = await axios.post(newUrl, formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });

      if (response.data.success) {
        // Save Token
        setToken(response.data.token);
        localStorage.setItem("token", response.data.token);
        await fetchUserProfile(response.data.token);
        setShowLogin(false);
        // Reset form
        setData({
          name: "",
          email: "",
          password: "",
          phone: "",
          street: "",
          city: "",
          state: "",
          zipcode: "",
          country: "",
        });
        setProfileImage(null);
        setPreviewImage(null);
      } else {
        alert(response.data.message);
      }
    }
  }

  return (
    <div className="login-popup">
      <form onSubmit={onLogin} className="login-popup-container">
        <div className="login-popup-title">
          <h2>{currState}</h2>
          <img
            onClick={() => setShowLogin(false)}
            src={assets.cross_icon}
            alt=""
          />
        </div>

        <div className="login-popup-inputs">
          {currState === "Login" ? (
            <>
              <input
                name="email"
                onChange={onChangeHandler}
                value={data.email}
                type="email"
                placeholder="Your Email"
                required
              />
              <input
                name="password"
                onChange={onChangeHandler}
                value={data.password}
                type="password"
                placeholder="Password"
                required
              />
            </>
          ) : (
            <>
              <input
                name="name"
                onChange={onChangeHandler}
                value={data.name}
                type="text"
                placeholder="Your Name"
                required
              />
              <input
                name="email"
                onChange={onChangeHandler}
                value={data.email}
                type="email"
                placeholder="Your Email"
                required
              />
              <input
                name="password"
                onChange={onChangeHandler}
                value={data.password}
                type="password"
                placeholder="Password"
                required
              />
              <input
                name="phone"
                onChange={onChangeHandler}
                value={data.phone}
                type="tel"
                placeholder="Phone Number"
              />
              <input
                name="street"
                onChange={onChangeHandler}
                value={data.street}
                type="text"
                placeholder="Street Address"
              />
              <div className="multi-fields">
                <input
                  name="city"
                  onChange={onChangeHandler}
                  value={data.city}
                  type="text"
                  placeholder="City"
                />
                <input
                  name="state"
                  onChange={onChangeHandler}
                  value={data.state}
                  type="text"
                  placeholder="State"
                />
              </div>
              <div className="multi-fields">
                <input
                  name="zipcode"
                  onChange={onChangeHandler}
                  value={data.zipcode}
                  type="text"
                  placeholder="Zip Code"
                />
                <input
                  name="country"
                  onChange={onChangeHandler}
                  value={data.country}
                  type="text"
                  placeholder="Country"
                />
              </div>
              <div className="profile-image-upload">
                <label className="image-upload-label">
                  <div className="image-preview">
                    {previewImage ? (
                      <img src={previewImage} alt="Preview" className="preview-img" />
                    ) : (
                      <div className="upload-placeholder">
                        <span>📷</span>
                        <p>Upload Profile Picture</p>
                      </div>
                    )}
                  </div>
                  <input
                    type="file"
                    accept="image/*"
                    onChange={handleImageChange}
                    className="file-input-hidden"
                  />
                </label>
              </div>
            </>
          )}
        </div>

        <button type="submit">{currState === "Sign Up" ? "Create Account" : "Login"}</button>

        <div className="login-popup-condition">
          <input type="checkbox" required />
          <p>By continuing, I agree to the terms of use & privacy policy.</p>
        </div>

        {currState === "Login" ? (
          <p>
            Create a new account?{" "}
            <span onClick={() => {
              setCurrState("Sign Up");
              setData({
                name: "",
                email: "",
                password: "",
                phone: "",
                street: "",
                city: "",
                state: "",
                zipcode: "",
                country: "",
              });
              setProfileImage(null);
              setPreviewImage(null);
            }}>Create Account</span>
          </p>
        ) : (
          <p>
            Already have an account?{" "}
            <span onClick={() => {
              setCurrState("Login");
              setData({
                name: "",
                email: "",
                password: "",
                phone: "",
                street: "",
                city: "",
                state: "",
                zipcode: "",
                country: "",
              });
              setProfileImage(null);
              setPreviewImage(null);
            }}>Login</span>
          </p>
        )}
      </form>
    </div>
  );
};

export default LoginPopup;
