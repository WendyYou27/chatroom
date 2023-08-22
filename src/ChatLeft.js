import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ChatLeft = () => {
  return (
    <div className="clearfix ">
      <div className=" m-3 text-info">
        <FontAwesomeIcon
          icon="fa-regular fa-circle"
          className=""
          style={{ fontSize: "50px" }}
        />

        <FontAwesomeIcon
          icon="fa-regular fa-message"
          className="float-end pt-1 pe-5"
          style={{ fontSize: "45px", transform: "scaleX(5)" }}
        />
      </div>
    </div>
  );
};

export default ChatLeft;
