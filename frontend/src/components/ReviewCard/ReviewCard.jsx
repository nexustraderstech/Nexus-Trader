import React from "react";
import "./reviewCard.scss";
import { FcGoogle } from "react-icons/fc";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

const ReviewCard = ({ name, starsCount, content }) => {
  let stars = "";
  for (let i = 0; i < starsCount; i++) {
    stars += "⭐";
  }

  return (
    <div className="review_card_Container">
      <div className="top">
        <FcGoogle className="icon" />
        <div className="person">
          <span>{name}</span>
          <AccountCircleIcon className="icon" />
          <span className="stars">{stars}</span>
        </div>
      </div>
      <div className="content">{content}</div>
    </div>
  );
};

export default ReviewCard;
