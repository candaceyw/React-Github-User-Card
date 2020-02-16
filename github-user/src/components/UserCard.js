import React, { Component } from 'react'

 class UserCard extends Component {
    render() {
        return (

            <div className="col-1-of-3">
            <div className="card">
                <div className="card__side card__side--front">
                    <div className="card__picture card__picture--3">
                    <img src={this.props.img} alt="avatar" />
                    </div>
                    <h4 className="card__heading">
                        <span className="card__heading-span card__heading-span--3">
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
                <div className="card__side card__side--back card__side--back-3">
                    <div className="card__cta">
                        <div className="card__price-box">
                        </div>
                        <a href={this.props.url} className="btn btn--white">Github page</a>

                    </div>
                </div>
            </div>
            
        </div>
           
        )
    }
}

export default UserCard;