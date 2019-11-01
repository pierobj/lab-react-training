import React, { Component } from 'react'

class SignupPage extends Component {
  state= {
    email: '',
    color: 'white',
    password: '',
    nationality: '',
    message: false
  }
  handleChangeEmail = (event) => {
    const email = event.target.value;
    if (!email.includes('@') || !email.includes('.com')) {
      this.setState ({
        email,
        color: 'red'
      })
    } else {
      this.setState ({
        email,
        color: 'green'
      })
    }
  }
  handleChange = (event) => {
    const {name, value} = event.target;
    this.setState ({
      [name]: value
    })
  }
  handleSubmit = (event) => {
    event.preventDefault();
    this.setState({
      message: true
    })
  }
  placeMessage = () => {
    if (this.state.nationality === 'EN') {
      return (
        <>
          <p>Hello</p>
          <p>Your email address is:{this.email}</p>
          <p>Your email address is {this.state.color === 'green'? 'correct' : 'incorrect'}</p>
        </>
      )
    } else if (this.state.nationality === 'ES') {
      return (
        <>
          <p>Hola</p>
          <p>Tu dirección de correo electrónico es:{this.email}</p>
          <p>Tu dirección de correo electrónico es {this.state.color === 'green'? 'correcta' : 'incorrecta'}</p>
        </>
      )
    } else if (this.state.nationality === 'DE')  {
      return (
        <>
          <p>Hallo</p>
          <p>Ihre E-Mail-Adresse lautet:{this.email}</p>
          <p>Ihre E-Mail-Adresse lautet {this.state.color === 'green'? 'korrekt' : 'falsch'}</p>
        </>
      )
    } else {
      return (
        <>
          <p>Bonjour</p>
          <p>Ton addresse e-mail est:{this.email}</p>
          <p>Ton addresse e-mail est {this.state.color === 'green'? 'correcte' : 'incorrecte'}</p>
        </>
      )
    }
  }

  render() {
    const {email, password, nationality} = this.state;
    return (
      <>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor='email'>Email</label>
          <input 
            style={{border: `4px solid ${this.state.color}`}}
            id='email'
            type='text' 
            name='email' 
            placeholder='Your email' 
            value={email}
            onChange={this.handleChangeEmail}
          />
          <label htmlFor='password'>Password</label>
          <input 
            id='password' 
            type='text' 
            name='password' 
            placeholder='120...' 
            value={password}
            onChange={this.handleChange}
          />
          <select 
            id='nationality' 
            type='text' 
            name='nationality' 
            placeholder='3...' 
            value={nationality}
            onChange={this.handleChange}
          >
            <option selected={nationality === 'EN'? true : false} value="EN">EN</option>
            <option selected={(nationality === 'DE')? true : false} value="DE">DE</option>
            <option selected={(nationality === 'FR')? true : false} value="FR">FR</option>
            <option selected={(nationality === 'ES')? true : false} value="ES">ES</option>
          </select>

          <button type='submit'>Sign up</button>
        </form>
        {this.state.message? this.placeMessage() : null}
      </>
    )
  }
}

export default SignupPage;