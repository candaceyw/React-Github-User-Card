import React, { Component } from 'react'
import FollowersCard from './FollowersCard';

 class Followers extends Component {

    constructor() { 
        super();
        this.state = {
          followerInfo:[]
        };
      };

    fetchFollowerInfo = () => {
        fetch(`https://api.github.com/users/${this.props.login}`)
        .then(res => {
          return res.json();
        })
        .then(cards => {
          this.setState({ followerInfo: cards });
        //   console.log(cards);
        })
        .catch(error => {
          console.log('No followers to show', error);
        });
      };

      componentDidMount() {
        console.log('mounted')
        this.fetchFollowerInfo();
      }

    render() {
        console.log(this.state.followerInfo)

        return (

            <div>
                <FollowersCard 
                
                img={this.state.followerInfo.avatar_url}
                name={this.state.followerInfo.name}
                login={this.state.followerInfo.login}
            
                location={this.state.followerInfo.location}
                bio={this.state.followerInfo.bio}
                url={this.state.followerInfo.html_url}
                />
            </div>


    //         <div className="followers">
    //     {this.fetchfollowerInfo.map(user => {
    //       return (
    //         <FollowersCard
           
    //         />
    
    //       )
    //     })}
    //   </div>

        )
    }
}

export default Followers;