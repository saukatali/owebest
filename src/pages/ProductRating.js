import React from 'react';

const ProductRating = ({ product }) => {
  const fullStars = Math.floor(product);
  const hasHalfStar = product - fullStars >= 0.5;
  const stars = Array(5).fill('empty'); 
  for (let i = 0; i < fullStars; i++) {
    stars[i] = 'full';
  }
  if (hasHalfStar) {
    stars[fullStars] = 'half';
  }

  return (
    <div>
      {stars.map((star, index) => (
        <span key={index}>
          {star === 'full' && '⭐️'}
          {star === 'half' && '⭐️'}
          {star === 'empty' && '☆'}
        </span>
      ))}
    </div>
  );
};

export default ProductRating;
