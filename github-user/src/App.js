import React, { Component } from 'react';
import './sass/output.css'
import UserCard from './components/UserCard'
import Followers from './components/Followers';

class App extends Component {
  constructor() { 
    super();
    this.state = {
      user: {},
      followers: [],
      followerInfo:{}
    };
  };


  fetchUser = () => {
    fetch("https://api.github.com/users/candaceyw")
    .then(res => {
      return res.json();
    })
    .then(cards => {
      this.setState({ user: cards });
      // console.log(cards);
    })
    .catch(error => {
      console.log('No cards to show', error);
    });
};

fetchFollower = () => {
  fetch("https://api.github.com/users/candaceyw/followers")
  .then(res => {
    return res.json();
  })
  .then(cards => {
    this.setState({ followers: cards });
    // console.log(cards);
  })
  .catch(error => {
    console.log('No followers to show', error);
  });
};


componentDidMount() {
  console.log('mounted')
  this.fetchUser();
  this.fetchFollower();

}

  render(){
    // console.log(this.state.user)

  return (
    <div className="App">
        GitHub Cards
        <div className="row">
<div></div>
    <UserCard 
    img={this.state.user.avatar_url}
    name={this.state.user.name}
    login={this.state.user.login}

    location={this.state.user.location}
    bio={this.state.user.bio}
    url={this.state.user.html_url}
    />
    <div></div>

    </div>

    <div>
      <h1>GitHub Followers</h1>
    
      <div className="row">
        {this.state.followers.map(user => {
          return (
            <Followers
            img={user.avatar_url}   
             name={user.name}

            login={user.login}
            url={user.html_url}
            />
          )
        })}
      </div>
    </div>
    </div>
  );
}
}
export default App;