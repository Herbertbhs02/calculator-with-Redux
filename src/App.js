import React, { Component } from "react";
import "./styles.css";
import Button from "./Button";
import { connect } from "react-redux";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <h2>Created using React and Redux</h2>
        <input
          className="input"
          type="text"
          value={this.props.state.box1}
          onChange={this.props.BOX1}
        />
        <input
          className="input"
          type="text"
          value={this.props.state.box2}
          onChange={this.props.BOX2}
        />
        <br />
        <lable>=</lable>
        <input className="input" type="text" value={this.props.state.result} />
        <br />
        <Button operation={this.props.Add} btn="Add" />
        <Button operation={this.props.Sub} btn="Subtract" />
        <Button operation={this.props.Mult} btn="Multiply" />
        <Button operation={this.props.Clear} btn="Clear" />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    state
  };
};

const mapDispachToProps = dispatch => {
  return {
    BOX1: e => dispatch({ type: "INPUT1", value: Number(e.target.value) }),
    BOX2: e => dispatch({ type: "INPUT2", value: Number(e.target.value) }),
    Add: () => dispatch({ type: "ADD" }),
    Sub: () => dispatch({ type: "SUB" }),
    Mult: () => dispatch({ type: "MULT" }),
    Clear: () => dispatch({ type: "CLEAR" })
  };
};
export default connect(
  mapStateToProps,
  mapDispachToProps
)(App);
