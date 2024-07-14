import React from "react";
import "./index.scss";
import Link from "next/link";
import PrimaryButton from "../common/buttons/PrimaryButton";

const Navbar = () => {
  return (
    <section className="navbar">
      <div className="navbar__logo">
        <b>Logo</b>
      </div>
      <div>
        <ul className="navbar__links">
          <li>
            <Link className="navbar__links__link" href={"#"}>
              Solution
            </Link>
          </li>
          <li>
            <Link className="navbar__links__link" href={"#"}>
              Integrations
            </Link>
          </li>
          <li>
            <Link className="navbar__links__link" href={"#"}>
              Pricing
            </Link>
          </li>
          <li>
            <Link className="navbar__links__link" href={"#"}>
              Customer Services
            </Link>
          </li>
          <li>
            <Link className="navbar__links__link" href={"#"}>
              Resources
            </Link>
          </li>
          <li>
            <Link className="navbar__links__link" href={"#"}>
              Company
            </Link>
          </li>
        </ul>
      </div>
      <div>
        <PrimaryButton title="Request a demo" />
      </div>
    </section>
  );
};

export default Navbar;
