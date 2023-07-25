import React, { Component } from 'react'

export default class RegisterForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fullName: '',
      phoneNumber: '',
      email: '',
    };
  }


  
  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({
      [name]: value,
    });
  };



  handleSubmit = (e) => {
    e.preventDefault();
    console.log('Отправленные данные:', this.state);
  };


  render() {
    return (
      <div className="App">
        <h1>Форма регистрации пользователя</h1>
        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label htmlFor="fullName">ФИО:</label>
            <input
              type="text"
              id="fullName"
              name="fullName"
              value={this.state.fullName}
              onChange={this.handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="phoneNumber">Номер телефона:</label>
            <input
              type="tel"
              id="phoneNumber"
              name="phoneNumber"
              value={this.state.phoneNumber}
              onChange={this.handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email адрес:</label>
            <input
              type="email"
              id="email"
              name="email"
              value={this.state.email}
              onChange={this.handleChange}
              required
            />
          </div>
          <button type="submit">Отправить</button>
        </form>
      </div>
    )
  }
}

