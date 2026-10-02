
function Contact() {
  return (
    <div className="page">

      <div className="content-container">

        <h1>Contact Us</h1>

        <p className="content-subtitle">
          Have questions? We are here to help.
        </p>

        <div className="contact-grid">

          <div className="contact-card">
            <h3>Email</h3>
            <p>support@studentms.com</p>
          </div>

          <div className="contact-card">
            <h3>Phone</h3>
            <p>+91 98765 43210</p>
          </div>

          <div className="contact-card">
            <h3>Address</h3>
            <p>
              Hyderabad, Telangana, India
            </p>
          </div>

        </div>

        <div className="contact-form">

          <input
            type="text"
            placeholder="Your Name"
          />

          <input
            type="email"
            placeholder="Your Email"
          />

          <textarea
            placeholder="Your Message"
            rows="5"
          ></textarea>

          <button className="submit-btn">
            Send Message
          </button>

        </div>

      </div>

    </div>
  );
}

export default Contact;
