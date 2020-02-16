import React, { Component } from 'react'
// import Followers from './Followers'

 class FollowersCard extends Component {

 
    render() {
        return (
                // <div className="row">
                <div className="col-1-of-3">
                        <div className="card">
                            <div className="card__side card__side--front">
                                <div className="card__picture card__picture--1">
                                <img src={this.props.img} alt="avatar"/>
                                </div>
                                <h4 className="card__heading">
                        <span className="card__heading-span card__heading-span--1">
                        {this.props.name}
                        </span>
                    </h4>
                                
                                <div className="card__details">
                                    <ul>
                                    <li>{this.props.login}</li>
                                    <li>{this.props.location}</li>
                                    <li>{this.props.bio}</li>

                                    </ul>
                                </div>

                            </div>
                            <div className="card__side card__side--back card__side--back-1">
                                <div className="card__cta">
                                  <a href={this.props.url} className="btn btn--white">Github page</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    // </div>
            
        )
    }
}

export default FollowersCard;