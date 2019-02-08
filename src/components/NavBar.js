import React from "react";
import { NavLink } from "react-router-dom";

export default class NavBar extends React.Component {
  render() {
    return (
      <div className="ui tabular menu">
        <NavLink exact to="/2018-2019/dcs/dev_171/" className="item">
          Show All Athletes
        </NavLink>
        <NavLink
          to="/2018-2019/dcs/dev_171/AthletesByDateAndWinnings"
          className="item"
        >
          Find Athlete
        </NavLink>
        <NavLink
          to="/2018-2019/dcs/dev_171/AthleteWiningsUpdate"
          className="item"
        >
          Update Athlete Winnings
        </NavLink>
      </div>
    );
  }
}
