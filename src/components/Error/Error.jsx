import "./Style.scss";
import PropTypes from "prop-types";
const Error = ({ text }) => (
  <div className="wrapperError">
    <p className="parrafoError">{text}</p>
  </div>
);
Error.propTypes = {
  text: PropTypes.string.isRequired,
};
export default Error;
