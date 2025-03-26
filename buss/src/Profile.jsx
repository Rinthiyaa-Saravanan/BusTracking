import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./profile.css";

const API_URL = "http://localhost:5002/api/profile"; // ✅ Backend API URL

export default function Profile() {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [editMode, setEditMode] = useState(false);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [changePassword, setChangePassword] = useState(false);
  const [updatedUser, setUpdatedUser] = useState({
    name: "",
    email: "",
    mobile: "",
    gender: "",
    oldPassword: "",
    newPassword: "",
    confirmPassword: "",
  });

  const token = localStorage.getItem("token");

  // ✅ Redirect to login if user is not logged in
  useEffect(() => {
    if (!token) {
      alert("Please log in to access your profile.");
      navigate("/login");
    } else {
      fetchUserProfile();
    }
  }, [navigate, token]);

  // ✅ Fetch User Profile Data from Backend
  const fetchUserProfile = async () => {
    try {
      const response = await fetch(API_URL, {
        method: "GET",
        headers: { Authorization: `Bearer ${token}` },
      });

      const data = await response.json();
      if (!response.ok) throw new Error(data.msg);

      setUser(data);
      setUpdatedUser({
        name: data.name || "",
        email: data.email || "", // ✅ Email remains non-editable
        mobile: data.mobile || "",
        gender: data.gender || "",
        oldPassword: "",
        newPassword: "",
        confirmPassword: "",
      });

      setLoading(false);
    } catch (error) {
      console.error("Error fetching profile:", error);
      setError("Failed to load profile. Please try again.");
      setLoading(false);
    }
  };

  // ✅ Handle Input Change
  const handleChange = (e) => {
    setUpdatedUser({ ...updatedUser, [e.target.name]: e.target.value });
  };

  // ✅ Handle Profile Update
  const handleUpdateProfile = async () => {
    setError("");
    setSuccess("");

    if (!updatedUser.name.trim() || !updatedUser.mobile.trim()) {
      setError("Name and Mobile cannot be empty.");
      return;
    }

    // ✅ Password validation if user opts to change password
    if (changePassword) {
      if (!updatedUser.oldPassword.trim()) {
        setError("Old password is required to change your password.");
        return;
      }
      if (!updatedUser.newPassword.trim() || !updatedUser.confirmPassword.trim()) {
        setError("New password and confirmation are required.");
        return;
      }
      if (updatedUser.newPassword !== updatedUser.confirmPassword) {
        setError("New password and confirmation do not match.");
        return;
      }
    }

    try {
      const response = await fetch(API_URL, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(updatedUser),
      });

      const data = await response.json();
      if (!response.ok) throw new Error(data.msg);

      setUser({ ...user, name: updatedUser.name, mobile: updatedUser.mobile, gender: updatedUser.gender });
      setEditMode(false);
      setChangePassword(false);
      setSuccess("Profile updated successfully!");
    } catch (error) {
      console.error("Error updating profile:", error);
      setError("Failed to update profile. Please try again.");
    }
  };

  return (
    <div className="profile-container">
      {loading ? (
        <div className="profile-box skeleton-box">
          <div className="skeleton profile-pic"></div>
          <div className="skeleton skeleton-text"></div>
          <div className="skeleton skeleton-text"></div>
          <div className="skeleton skeleton-button"></div>
        </div>
      ) : (
        <div className="profile-box">
          <img 
            src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png" 
            alt="Profile" 
            className="profile-pic"
          />
          <h2>{editMode ? "Edit Profile" : "User Profile"}</h2>

          {error && <p className="error-text">{error}</p>} {/* ✅ Show Error Messages */}
          {success && <p className="success-text">{success}</p>} {/* ✅ Show Success Message */}

          <div className="profile-fields">
            <label>Name:</label>
            <input 
              type="text" 
              name="name" 
              value={updatedUser.name} 
              onChange={handleChange} 
              disabled={!editMode} 
            />

            <label>Email:</label>
            <input 
              type="email" 
              name="email" 
              value={updatedUser.email} 
              disabled 
            />

            <label>Mobile:</label>
            <input 
              type="text" 
              name="mobile" 
              value={updatedUser.mobile} 
              onChange={handleChange} 
              disabled={!editMode} 
              placeholder="Enter mobile number" 
            />

            <label>Gender:</label>
            <select name="gender" value={updatedUser.gender} onChange={handleChange} disabled={!editMode}>
              <option value="">Select Gender</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
            </select>

            {editMode && (
              <>
                <label>
                  <input 
                    type="checkbox" 
                    checked={changePassword} 
                    onChange={() => setChangePassword(!changePassword)} 
                  /> Change Password?
                </label>

                {changePassword && (
                  <>
                    <label>Old Password:</label>
                    <input 
                      type="password" 
                      name="oldPassword" 
                      value={updatedUser.oldPassword} 
                      onChange={handleChange} 
                      placeholder="Enter old password" 
                    />

                    <label>New Password:</label>
                    <input 
                      type="password" 
                      name="newPassword" 
                      value={updatedUser.newPassword} 
                      onChange={handleChange} 
                      placeholder="Enter new password" 
                    />

                    <label>Confirm New Password:</label>
                    <input 
                      type="password" 
                      name="confirmPassword" 
                      value={updatedUser.confirmPassword} 
                      onChange={handleChange} 
                      placeholder="Confirm new password" 
                    />
                  </>
                )}
              </>
            )}
          </div>

          <div className="profile-buttons">
            {editMode ? (
              <button className="save-btn" onClick={handleUpdateProfile}>Save</button>
            ) : (
              <button className="edit-btn" onClick={() => setEditMode(true)}>Edit</button>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
