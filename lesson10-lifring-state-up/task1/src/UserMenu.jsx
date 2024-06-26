import React from "react";

const UserMenu = ({ userData }) => {
    return (
      <div className="menu">
        <span className="menu__greeting">{`Hello, ${userData.name}`}</span>
        <img
          alt="User Avatar"
          src={userData.avatar_url}
          className="menu__avatar"
        />
      </div>
    );
}

export default UserMenu;