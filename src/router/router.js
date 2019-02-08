import React from "react";
import { Route } from "react-router-dom";
import NavBar from "../components/NavBar";
import AthletesList from "../components/AthletesList";
import AthleteWiningsUpdate from "../components/AthleteWiningsUpdate";
import AthletesByDateAndWinning from "../components/AthletesByDateAndWinning";

const ReactRouter = () => {
  return (
    <div className="ui container" style={{ marginTop: "30px" }}>
      <React.Fragment>
        <NavBar />
        <Route exact path="/2018-2019/dcs/dev_171/" component={AthletesList} />
        <Route
          path="/2018-2019/dcs/dev_171/AthletesByDateAndWinnings"
          component={AthletesByDateAndWinning}
        />
        <Route
          path="/2018-2019/dcs/dev_171/AthleteWiningsUpdate"
          component={AthleteWiningsUpdate}
        />
      </React.Fragment>
    </div>
  );
};

export default ReactRouter;
