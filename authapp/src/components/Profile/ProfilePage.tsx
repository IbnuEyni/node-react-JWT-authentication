// src/components/ProfilePage.tsx
import React from "react";
import { useAuth } from "../../contexts/AuthContext";

const ProfilePage: React.FC = () => {
  const { user } = useAuth();

  if (!user) {
    return <div>Please log in to view your profile.</div>;
  }

  return (
    <div className="profile-container">
      <div className="profile-info">
        <h2>Profile</h2>
        <p>Name: {user.name}</p>
        <p>Email: {user.email}</p>
      </div>
    </div>
  );
};

export default ProfilePage;
