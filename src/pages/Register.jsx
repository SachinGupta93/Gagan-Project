
import { useState } from "react";

function Register() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    course: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("Student Registration:", formData);

    alert("Student registered successfully!");

    setFormData({
      name: "",
      email: "",
      phone: "",
      course: "",
      password: "",
    });
  };

  return (
    <div className="page">
      <div className="form-container">

        <h1>Student Registration</h1>

        <p className="form-subtitle">
          Create your student account
        </p>

        <form onSubmit={handleSubmit}>

          <div className="form-group">
            <label>Full Name</label>

            <input
              type="text"
              name="name"
              placeholder="Enter your full name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label>Email</label>

            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label>Phone Number</label>

            <input
              type="tel"
              name="phone"
              placeholder="Enter your phone number"
              value={formData.phone}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label>Course</label>

            <select
              name="course"
              value={formData.course}
              onChange={handleChange}
              required
            >
              <option value="">
                Select Course
              </option>

              <option value="Computer Science">
                Computer Science
              </option>

              <option value="Data Science">
                Data Science
              </option>

              <option value="Information Technology">
                Information Technology
              </option>

              <option value="Electronics">
                Electronics
              </option>

              <option value="Mechanical">
                Mechanical
              </option>
            </select>
          </div>

          <div className="form-group">
            <label>Password</label>

            <input
              type="password"
              name="password"
              placeholder="Create a password"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </div>

          <button
            type="submit"
            className="submit-btn"
          >
            Register
          </button>

        </form>
      </div>
    </div>
  );
}

export default Register;
