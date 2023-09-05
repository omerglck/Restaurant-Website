import BannerImg from "../assets/2blackbean.jpg";
const Contact = () => {
  return (
    <div className="contact">
      <div
        className="left-area"
        style={{ backgroundImage: `url(${BannerImg})` }}
      ></div>
      <div className="right-area">
        <h1>Contact Us</h1>
        <form id="contact-form">
          <label htmlFor="name"> Full Name</label>
          <input type="text" name="name" placeholder="Enter full name" />
          <label htmlFor="email"> Email</label>
          <input type="email" name="email" placeholder="Enter an email" />
          <label htmlFor="message"> Message</label>
          <textarea name="name" placeholder="Enter your message"></textarea>
          <button type="submit">Send Message</button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
