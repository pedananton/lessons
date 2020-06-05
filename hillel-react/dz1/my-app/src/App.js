import React from 'react';
import './App.css';
import './content.txt'

// const styleComponent = styled.div`
//   text-align: center;
// `;

class Magic extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 'Пожалуйста напишите желание'
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    alert('Сим салабим: ' + this.state.value);
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Джин:
          <textarea value={this.state.value} onChange={this.handleChange} />
        </label>
        <input type="submit" value="Исполнить" />
      </form>
    );
  }
}


export default Magic;
