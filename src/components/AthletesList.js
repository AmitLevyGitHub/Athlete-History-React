import React from "react";
import Athlete from "./Athlete";

export default class AthletesList extends React.Component {
  constructor(props) {
    super(props);

    this.state = { athletes: [] };
  }

  add = ({ id, name, age, weight, playingSince, winnings }) => {
    this.setState(prevState => ({
      athletes: [
        ...prevState.athletes,
        {
          id: id,
          name: name,
          age: age,
          weight: weight,
          playingSince: playingSince,
          winnings: winnings
        }
      ]
    }));
  };

  eachAthlete = (item, i) => {
    return <Athlete item={item} key={i} />;
  };

  componentDidMount() {
    const url = "https://athletes-history.herokuapp.com/athletes";
    fetch(url)
      .then(response => {
        return response.json();
      })
      .then(data =>
        data.map(item =>
          this.add({
            id: item.id,
            name: item.properties.name,
            age: item.properties.age,
            weight: item.properties.weight,
            playingSince: item.playSince,
            winnings: item.winnings
          })
        )
      )
      .catch(err => console.log(err));
  }

  render() {
    return (
      <div className="ui container ui cards">
        {this.state.athletes.map(this.eachAthlete)}
      </div>
    );
  }
}
