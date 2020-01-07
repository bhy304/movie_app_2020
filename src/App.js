import React from 'react';
import PropTypes from 'prop-types';

const foodILike = [
  {
    id: 1,
    name: "macaron",
    image: "https://images.unsplash.com/photo-1558326567-98ae2405596b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
    rating: 4.1
  },
  {
    id: 2,
    name: "cheesecake",
    image: "https://images.unsplash.com/photo-1524351199678-941a58a3df50?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1051&q=80",
    rating: 4.5
  },
  {
    id: 3,
    name: "jelly",
    image: "https://images.unsplash.com/photo-1499195333224-3ce974eecb47?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=948&q=80",
    rating: 3.5
  },
  {
    id: 4,
    name: "coffee",
    image: "https://images.unsplash.com/photo-1509042239860-f550ce710b93?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80",
    rating: 5
  }
];

function Food({ name, picture, rating }) {
  return <div>
    <h2>I like {name}</h2>
    <h4>{rating}/5.0</h4>
    <img src={picture} alt={name} width="500" />
  </div>;
}

Food.prototypes = {
  name: PropTypes.string.isRequired,
  picture: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired
};

function App() {
  return (
    <div>
      {foodILike.map(dish => (
        <Food 
          key={dish.id} 
          name={dish.name} 
          picture={dish.image} 
          rating={dish.rating} 
        />
      ))}
    </div>
  );
}

export default App;