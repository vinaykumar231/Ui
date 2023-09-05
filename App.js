import React, { Component } from "react";
import "./styles.css";

class App extends Component {
  constructor() {
    super();
    this.state = {};
  }

  generateP = () => {
    const {
      length,
      includeUppercase,
      includeLowercase,
      includeSymbol
    } = this.state;
    const uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
    const symbolChars = "!@#$%^&*()_-+=<>?";

    let validChars = "";

    if (includeUppercase) {
      validChars += uppercaseChars;
    }
    if (includeLowercase) {
      validChars += lowercaseChars;
    }
    if (includeSymbol) {
      validChars += symbolChars;
    }

    let password = "";
    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * validChars.length);
      password += validChars.charAt(randomIndex);
    }

    this.setState({ password });
  };

  handleLengthChange = (e) => {
    this.setState({ length: parseInt(e.target.value) || 0 });
  };

  handleCheckboxChange = (e) => {
    const { name, checked } = e.target;
    this.setState({ [name]: checked });
  };

  render() {
    const {
      password,
      length,
      includeUppercase,
      includeLowercase,
      includeSymbol
    } = this.state;

    return (
      <div className="App">
        <h1>PS3&SVBIA</h1>

        <div>
          <label>
            Character Length:
            <input
              type="number"
              value={length}
              onChange={this.handleLengthChange}
            />
          </label>
        </div>
        <div>
          <label>
            Include Uppercase Letters:
            <input
              type="checkbox"
              name="includeUppercase"
              checked={includeUppercase}
              onChange={this.handleCheckboxChange}
            />
          </label>
        </div>
        <div>
          <label>
            Include Lowercase Letters:
            <input
              type="checkbox"
              name="includeLowercase"
              checked={includeLowercase}
              onChange={this.handleCheckboxChange}
            />
          </label>
        </div>
        <div>
          <label>
            Include Symbol:
            <input
              type="checkbox"
              name="includeSymbol"
              checked={includeSymbol}
              onChange={this.handleCheckboxChange}
            />
          </label>
        </div>
        <div>
          <button onClick={this.generatePassword}>GENERATE</button>
          <p>{password}</p>
        </div>
      </div>
    );
  }
}

export default App;
