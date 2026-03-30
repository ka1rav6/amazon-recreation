// import { useState } from 'react'
import imgData from "./data.json"
import './App.css'
const StarRating = ({ rating, total = 5 }) => {
  return (
    <div>
      {[...Array(total)].map((_, i) => {
        const starValue = i + 1;

        if (rating >= starValue) {
          return <span key={i}>★</span>;
        } else if (rating >= starValue - 0.5) {
          return <span key={i}>⯪</span>;
        } else {
          return <span key={i}>☆</span>;
        }
      })}
    </div>
  );
};
function Image({ image, title, rating, num, price }) {
  return (
    <div className="image-card">
      <div className="card-content">
        <img src={image} className="image-display" />
        <p className="title">{title}</p>
        <div className="stars">
          <StarRating rating={rating} />
          {num}
        </div>
        <p className="price">
          <strong>{'$' + price}</strong>
        </p>
      </div>
      <button className="add-to-card-button">Add to Cart</button>
    </div>
  );
}
function AllImages(){
  return(
    <>
    {
      imgData.map(({image, title, rating, num, price}, index) =>{
        return (
          <Image 
            key={index}
            image={image} 
            title={title} 
            rating={rating} 
            num={num}
            price={price}
          />
        )
      })
    }
    </>
  )
}
function App(){
  return(
    <div className = "main-placeholder">
    <AllImages />
    </div>
  )
}

export default App
