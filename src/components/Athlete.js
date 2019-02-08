import React from "react";

export default class Athlete extends React.Component {
  render() {
    const item = this.props.item;
    return (
      <div className="card ui" style={{ marginLeft: "60px" }}>
        <div className="content">
          <div className="header">{item.name}</div>
          <div className="description">
            <h5>Id- {item.id}</h5>
            <h5>Age- {item.age}</h5>
            <h5>Numer of Winnings- {item.winnings}</h5>
            <h5>Started playing on {item.playingSince}</h5>
            <h5>Weight- {item.weight} kg</h5>
          </div>
        </div>
      </div>
    );
  }
}
