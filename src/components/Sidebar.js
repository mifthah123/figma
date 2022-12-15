import React from "react";

const Icons = [
  {
    icon: "Category.svg",
    width: "25px",
  },
  {
    icon: "Checkmark.svg",
    width: "20px",
  },
  {
    icon: "Calender.svg",
    width: "25px",
  },
  {
    icon: "StarIcon.svg",
    width: "30px",
  },
  {
    icon: "UsersGroup.svg",
    width: "30px",
  },
  {
    icon: "Building.svg",
    width: "27px",
  },
];

function Sidebar() {
  return (
    <div className="sidebar">
      <div className="profile_pic">
        <div className="avatar_img"></div>
      </div>

      <div className="icon_container">
        {Icons.map(({ icon, width }) => (
          <img className="icon_img" src={"icons/" + icon} width={width} />
        ))}
      </div>

      <div className="icon_container">
        <img className="icon_img" src="icons/Notification.svg" width={"20px"} />
        <img className="icon_img" src="profile-pic.png" width={"30px"} />
      </div>
    </div>
  );
}

export default Sidebar;
