import React, { Component } from "react";

let dialogStyles = {
  width: "500px",
  height: "170px",
  maxWidth: "100%",
  margin: "0 auto",
  position: "fixed",
  left: "50%",
  top: "40%",
  transform: "translate(-50%,-50%)",
  zIndex: "999",
  backgroundColor: "#eee",
  padding: "10px 20px 40px",
  borderRadius: "8px",
  display: "flex",
  flexDirection: "column",
  textAlign: "center",
  fontSize: "20px",
  lineHeight: "160%"
};

let dialogCloseButtonStyles = {
  position: "absolute",
  marginTop: "110px",
  cursor: "pointer",
  borderRadius: "50%",
  border: "none",
  width: "50px",
  height: "30px",
  fontWeight: "bold",
  alignSelf: "center"
};

export default class Dialog extends Component {
  render() {
    let dialog = (
      <div style={dialogStyles}>
        <div>{this.props.children}</div>
        <button style={dialogCloseButtonStyles} onClick={this.props.onClose}>
          OK
        </button>
      </div>
    );

    if (!this.props.isOpen) {
      dialog = null;
    }
    return <div>{dialog}</div>;
  }
}
