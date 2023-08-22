import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import ChatLeft from "./ChatLeft";
import ChatRight from "./ChatRight";
import TextArea from "./TextArea";

const Layout = () => {
  return (
    <div>
      <div className="clearfix border-bottom p-4">
        <FontAwesomeIcon icon="fa-solid fa-bars" />
        <FontAwesomeIcon icon="fa-solid fa-camera" className="float-end pt-1" />
      </div>

      <ChatLeft />

      <ChatRight />

      <TextArea />
    </div>
  );
};

export default Layout;
