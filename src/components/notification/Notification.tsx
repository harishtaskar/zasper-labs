import Link from "next/link";
import React from "react";
import "./index.scss";

const Notification = () => {
  return (
    <div className="notification">
      <span className="notification__content">
        Discover your delegation level in 3 minutes.{" "}
        <Link href={"#"} className="notification__content__link">
           Take assess
        </Link>
      </span>
    </div>
  );
};

export default Notification;
