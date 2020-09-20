import React from "react";
import './footer.css'


export default function Footer() {
  return (
    <div className="container-fluid footer shadow bg-transparent ">
      <div className="row">
        <div className="col footer__note">
          <p className="text-center">
            {" "}
            &copy; Copyright 2020, McBryan Solomon. All Rights Reserved.
          </p>
        </div>
      </div>
    </div>
  );
}
