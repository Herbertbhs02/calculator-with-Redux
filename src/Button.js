import React from "react";
import "./styles.css";
import { connect } from "react-redux";

const Button = props => (
  <button className="btn" onClick={props.operation}>
    {props.btn}
  </button>
);

const mapStateToProps = state => {
  return {
    state
  };
};

export default connect(mapStateToProps)(Button);
