import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ChatRight = () => {
  return (
    <div className="clearfix">
      <div className=" m-3 text-success">
        <FontAwesomeIcon
          icon="fa-regular fa-circle"
          className="pe-2 pb-2 float-end"
          style={{ fontSize: "50px" }}
        />
        <FontAwesomeIcon
          icon="fa-regular fa-message"
          className=" pe-4"
          style={{ fontSize: "45px", transform: "scaleX(-5)" }}
        />
      </div>
    </div>
  );
};

export default ChatRight;
