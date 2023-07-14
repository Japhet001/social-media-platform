import React, { useEffect, useState } from "react";
import NoIdeas from "./NoIdeas";

const Profile = () => {
  const [update, setUpdate] = useState(false);
  const [userData, setUserData] = useState({});
  const [username, setUsername] = useState("");
  const [user_bio, setBio] = useState("");
  const [user_phone, setPhone] = useState("");
  const [user_domain, setDomain] = useState("");
  const [user_email, setEmail] = useState("");
  const [user_location, setLocation] = useState("");

  const myt = ideas
    .map((t) => t)
    .filter((te) => te.username === user.username);

  const fetchUserData = async () => {
    try {
      // Fetch user data from the server
      // Set the user data in state variables
    } catch (error) {
      alert(error.message);
    }
  };

  useEffect(() => {
    fetchUserData();
    setBio(userData?.user_bio);
    setUsername(userData?.username);
    setDomain(userData?.user_domain);
    setPhone(userData?.user_phone);
    setEmail(userData?.user_email);
    setLocation(userData?.user_location);
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Submit updated user data to the server
      // Show success message
      // Update user data in state variables
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <>
      <div className="profile">
        <div className="profile-intro">
          <span>{user.username.split(" ")[0]}@Instagram</span>
        </div>
        <div className="profile-bio">
          <div className="user_info">
            <img
              className="user_icon"
              width={50}
              height={50}
              src={user?.user_image}
            />
            <div>
              <form onSubmit={handleSubmit} className="user__data">
                <div className="user__data-content">
                  <h3>Name</h3>
                  <span>{userData?.username}</span>
                  {update && (
                    <input
                      type="text"
                      name="username"
                      value={username}
                      onChange={(e) => setUsername(e.target.value)}
                    />
                  )}
                </div>
                <div className="user__data-content">
                  <h3>Email</h3>
                  <span>{userData?.user_email}</span>
                  {update && (
                    <input
                      type="text"
                      name="user_email"
                      value={user_email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  )}
                </div>
                {/* Rest of the user data fields */}
                {update && <input className="pro_btn" type="submit" value="Update" />}
              </form>
            </div>
          </div>
          <div className="user_ideas">
            <button onClick={() => setUpdate(true)}>Update Your Profile</button>
            <h2>Ideas Shared</h2>
            {myt.length ? (
              myt.map((text) => (
                <div key={text.idea_title} className="idea">
                  <h3>{text.idea_title}</h3>
                  <p>{text.idea_text.slice(0, 100)}...</p>
                  <span>
                    <img
                      width={25}
                      height={25}
                      className="idea__icon"
                      src={user?.user_image}
                    />
                    <em>{text.username}</em>
                  </span>
                </div>
              ))
            ) : (
              <NoIdeas />
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
