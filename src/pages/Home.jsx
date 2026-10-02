
function Home() {
  return (
    <div className="page home-page">
      <div className="hero">
        <p className="badge">
          Student Management System
        </p>

        <h1>
          Manage Students
          <br />
          <span>Simply & Efficiently</span>
        </h1>

        <p className="hero-text">
          A simple platform for managing student registration,
          information and communication.
        </p>

        <div className="hero-buttons">
          <a href="/register" className="primary-btn">
            Register Student
          </a>

          <a href="/about" className="secondary-btn">
            Learn More
          </a>
        </div>
      </div>
    </div>
  );
}

export default Home;