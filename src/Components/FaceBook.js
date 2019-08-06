import React, { Component } from 'react'
import profiles from '../data/berlin.json'




class FaceBook extends Component {
  state = { country: null }
  allCountries = profiles.reduce((res, current) => {
    if (!res.includes(current.country)) res.push(current.country);
    console.log(current, res);
    return res;
  }, []) 

  handleClick = (country) => this.setState({ country })

  render() {
    return <div>
      <div style={{ display: 'flex' }}>
        {this.allCountries.map(country => (
          <div
            style={{ backgroundColor: this.state.country === country ? 'blue' : 'white', padding: '10px', border: '1px solid grey' }}
            onClick={() => this.handleClick(country)}>
            {country}
          </div>
        ))}
      </div>
      <div>
        {profiles.map((profile, index) => (
          <div
            key={index}
            style={{ backgroundColor: this.state.country === profile.country ? 'blue' : 'white' }}>
            <img src={profile.img} alt='face' width='150px' />
            <p>First name: {profile.name}</p>
            <p>Last name: {profile.lastName}</p>
            <p>Country: {profile.country}</p>
            <p>Type: {profile.isStudent ? 'Student' : 'Teacher'}</p>
          </div>
        )
        )
        }
      </div>
    </div>
  }

}

export default FaceBook;