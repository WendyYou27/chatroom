import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const TextArea = () => {
  return (
    <div className="fixed-bottom m-2 clear-fix border-top">
      <div>
        <FontAwesomeIcon
          icon="fa-regular fa-square"
          style={{ fontSize: "45px", transform: "scaleX(10)" }}
          className="ms-5 ps-4 col-sm"
        />

        <FontAwesomeIcon
          icon="fa-solid fa-plus"
          className="float-end me-5 pb-2 col-sm"
          style={{ fontSize: "45px" }}
        />
      </div>
    </div>
  );
};

export default TextArea;
