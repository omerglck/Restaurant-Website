import { Link } from "react-router-dom";
import BannerImg from "/src/assets/banner.jpg";
const Home = () => {
  return (
    <div className="home">
      <div className="banner-container">
        <h1>Burger Delight</h1>
        <p>
          Delicious Hamburger <br /> with <span>Burger Delight</span> Spicy
          Mixed
        </p>
        <Link to="/menu">
          <button>Order Now</button>
        </Link>
      </div>
    </div>
  );
};

export default Home;
