import React from "react";
import Title from "./Title";
import PropTypes from "prop-types";
const Header = ({ title }) => {
  return (
    <header className="wrapperHeader">
      <nav className="wrapperNav">
        <Title title={title} />
      </nav>
    </header>
  );
};
Header.propTypes = {
  title: PropTypes.string.isRequired,
};
export default Header;
