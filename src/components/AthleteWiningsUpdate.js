import React from "react";
import Athlete from "./Athlete";

class AthleteWiningsUpdate extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      formFilled: false,
      // isOpen: false,
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

    let params = {
      id: this.id.value,
      winnings: this.winnings.value
    };

    const url = `https://athletes-history.herokuapp.com/athlete`;
    fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(params)
    })
      .then(res => res.json())
      .catch(err => {
        console.log(err);
      });
    this.setState({ formFilled: true });
  };

  renderUpdate = () => {
    return (
      <div style={{ textAlign: "center", marginTop: "15%" }}>
        <h2>Updated!</h2>
        <h3>Check out Athletes list...</h3>
      </div>
    );
  };

  renderForm = props => {
    return (
      <div>
        <form className="ui form">
          <div className="field">
            <label>Athlete's Id</label>

            <select ref={input => (this.id = input)}>
              {" "}
              //need to change to be dynamic
              <option value="1234">1234</option>
              <option value="1111">1111</option>
              <option value="2233">2233</option>
              <option value="3344">3344</option>
              <option value="8899">8899</option>
              <option value="6666">6666</option>
            </select>
          </div>
          <div className="field">
            <label>Athlete's new number of Winings</label>
            <input type="text" ref={input => (this.winnings = input)} />
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
    return this.state.formFilled ? this.renderUpdate() : this.renderForm();
  }
}

export default AthleteWiningsUpdate;
