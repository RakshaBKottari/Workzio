import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div>
      <section className="m-auto max-w-lg my-10 px-6">
        <p className="text-gray-400 text-center py-4 px-6">
          Styled by{" "}
          <a
            href="https://github.com/RakshaBKottari"
            className="hover:text-yellow-200"
          >
            Raksha
          </a>{" "}
          &
          <span>
            {" "}
            Course by{" "}
            <a
              href="https://github.com/bradtraversy"
              className="hover:text-yellow-200"
            >
              Brad Traversy
            </a>
          </span>
        </p>
      </section>
    </div>
  );
};

export default Footer;
