import React from 'react';
import './StarRating.css';

const StarRating = ({ rating }) => {
  const stars = [];
  for (let i = 0; i < 5; i++) {
    stars.push(<span key={i} className={i < rating ? 'star-filled' : 'star-empty'}>★</span>);
  }
  return <div className="star-rating">{stars}</div>;
};

export default StarRating;
