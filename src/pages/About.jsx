import BannerImg from "../assets/1beef.jpg";
const About = () => {
  return (
    <div className="about">
      <div
        className="about-top"
        style={{ backgroundImage: `url(${BannerImg})` }}
      ></div>
      <div className="about-bottom">
        <h1>About Us</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis
          unde natus doloribus voluptas reprehenderit veritatis consequuntur
          temporibus, explicabo maiores at quis fuga maxime quod culpa enim sit
          atque, officia repudiandae?
        </p>
      </div>
    </div>
  );
};

export default About;
