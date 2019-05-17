import React, { Component } from "react";
import Star from './Star';

class StarRating extends Component {

  // Initialize a 'rating' state
  state={
    rating: 0,
    stars: [1,2,3,4,5]
  };


  // Write a function that returns 5 Star components



  // Write an event handler that updates the rating state.
  handleRatingChange = (newRating) => {
    this.setState({rating: newRating});
  }
  // Pass the function to a Star component via props


  render() {
    return (
      <ul className="course--stars">
        {this.state.stars.map((star)=>{
          if(star<=this.state.rating){
            return <Star key={star} id={star} handleRatingChange={this.handleRatingChange} selected={true} />
          }
          else{
             return <Star key={star} id={star} handleRatingChange={this.handleRatingChange} selected={false} />
          }
        })}
      </ul>
    );
  }
}

export default StarRating;