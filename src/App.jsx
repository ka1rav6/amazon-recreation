import { useState } from 'react'
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
function Image({ image, title, rating, num, price, setCartNum, cartNum }) {
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
      <button
        className="add-to-card-button"
        onClick={() => setCartNum(cartNum + 1)}
      >
        Add to Cart
      </button>
    </div>
  );
}
function AllImages({ setCartNum, cartNum }) {
  return (
    <>
      {imgData.map(({ image, title, rating, num, price }, index) => (
        <Image
          key={index}
          image={image}
          title={title}
          rating={rating}
          num={num}
          price={price}
          setCartNum={setCartNum}
          cartNum={cartNum}
        />
      ))}
    </>
  );
}
function TopNavBar({ cartNum }) {
  return (
    <div className="whole-bar">
      <img src="./src/assets/amazon-logo-white.png" />
      <div className="search-container">
        <input
          placeholder="Search"
          className="input-bar"
        />
        <button
          className="search-button"
        >
          <i className="fas fa-search" />
        </button>

      </div>
      <div className="returns-and-orders">
        Returns & Orders
      </div>
      <div className="cart-class">
        <img src="src/assets/cart-icon.png" />
        <span className="cart-item-number"> {cartNum} </span>
        <span className="cart-text">Cart</span>
      </div>
    </div>
  )
}
function App() {
  let [cartNum, setCartNum] = useState(0);
  return (
    <>
      <TopNavBar cartNum={cartNum} />
      <div className="main-placeholder">
        <AllImages setCartNum={setCartNum} cartNum={cartNum} />
      </div>
    </>
  )
}

export default App
