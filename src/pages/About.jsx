
function About() {
  return (
    <div className="page">

      <div className="content-container">

        <h1>About StudentMS</h1>

        <p className="content-subtitle">
          Simple student management made easier.
        </p>

        <div className="about-content">

          <p>
            StudentMS is a simple student management
            system designed to make student registration
            and account management easier.
          </p>

          <p>
            The application provides a clean interface
            for students to register, login and
            communicate with the administration.
          </p>

          <div className="features">

            <div className="feature-card">
              <h3>Student Registration</h3>

              <p>
                Register students with their basic
                academic information.
              </p>
            </div>

            <div className="feature-card">
              <h3>Secure Login</h3>

              <p>
                Provide students with a simple
                login interface.
              </p>
            </div>

            <div className="feature-card">
              <h3>Easy Communication</h3>

              <p>
                Allow students to contact the
                administration.
              </p>
            </div>

          </div>

        </div>

      </div>

    </div>
  );
}

export default About;
