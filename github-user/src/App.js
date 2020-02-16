import React, { Component } from 'react';
import './sass/output.css'
import UserCard from './components/UserCard'
import Followers from './components/Followers';
import GitHubCalendar from 'react-github-calendar';

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

        <div className="header">

       
                  <UserCard 
              img={this.state.user.avatar_url}
              name={this.state.user.name}
              login={this.state.user.login}

              location={this.state.user.location}
              bio={this.state.user.bio}
              url={this.state.user.html_url}
              />
                
        <div className="header__text-box">
            <h1 class="heading-primary"> 
                <span class="heading-primary--main">GitHub</span>
                <span class="heading-primary--sub">where developement lives</span>
            </h1>
          <div>
              <h1 className="heading heading-primary"> GitHub Contribution Calendar</h1>
              <GitHubCalendar username="candaceyw" fontSize={12} blockSize={10} blockMargin={4} />
          </div>
        </div>
        </div>   
       
        <div className="row">
<div></div>
  
 
    </div>

    <div>
      
      <div class="u-center-text u-margin-bottom-medium">
                    <h2 class="heading-secondary">
                    GitHub Followers
                    </h2>
                </div>
    
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