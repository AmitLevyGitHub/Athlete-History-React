import React from "react";
import Athlete from "./Athlete";
import Dialog from "./Dialog";

export default class AthletesByDateAndWinning extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      formFilled: false,
      isOpen: false,
      athletes: []
    };
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

  renderAtheletes = () => {
    return (
      <div className="ui container">
        {this.state.athletes.map(this.eachAthlete)}
      </div>
    );
  };

  send = event => {
    event.preventDefault();
    const winnings = this.winnings.value;
    const playingSince = this.playingSince.value;

    const url = `https://athletes-history.herokuapp.com/athlete/${winnings}/${playingSince}`;

    fetch(url)
      .then(res => {
        if (!res.ok) throw new Error(res.statusText);
        return res.json();
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
      .then(this.setState({ formFilled: true, isOpen: false }))
      .catch(err => {
        console.log(err);
        this.setState({ isOpen: true });
      });
  };

  renderForm = () => {
    return (
      <div>
        <form className="ui form">
          <div className="field">
            <label>Athlete's Number of Winnings</label>
            <input type="text" ref={input => (this.winnings = input)} />
          </div>
          <div className="field">
            <label>The year in which the Athlete started playing</label>
            <input type="text" ref={input => (this.playingSince = input)} />
          </div>
          <button className="ui right labeled icon button" onClick={this.send}>
            <i className="right arrow icon" />
            Send
          </button>
        </form>
      </div>
    );
  };

  render() {
    let dialog = (
      <Dialog
        isOpen={this.state.isOpen}
        onClose={e => this.setState({ isOpen: false, formFilled: false })}
      >
        Could not find Athlete who started to play at this time with this number
        of winnings. <br /> Please try again
      </Dialog>
    );
    if (!this.state.formFilled) return this.renderForm();
    if (this.state.isOpen) return dialog;
    else return this.renderAtheletes();
  }
}
