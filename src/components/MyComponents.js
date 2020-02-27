import React from "react";
import PropTypes from "prop-types";

const MyComponents = ({ name, children }) => {
  //   const { name, children } = props;
  return (
    <div>
      안녕 {name}, {children}
    </div>
  );
};

// MyComponents.defaultProps = {
//   name: "디폴트1"
// };
MyComponents.propTypes = {
  name: PropTypes.string
};

export default MyComponents;
