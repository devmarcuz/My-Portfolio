import React from "react";
import { useState } from "react";
import { request } from "./auth";
import { FaTwitter, FaEnvelope, FaAddressCard } from "react-icons/fa";
import "./App.css";

function App() {
  const [formData, setFormData] = useState({
    name: "",
    job: "",
    email: "",
    link: "",
    city: "",
  });

  const { email, job, link, name, city } = formData;

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();

    if (!email || !job || !link || !name || !city) {
      alert("All fileds are required");
      return;
    } else {
      request(formData)
        .then((res) => {
          console.log(res);
          setFormData({
            name: "",
            job: "",
            email: "",
            link: "",
            city: "",
          });
          alert("Registration success");
        })
        .catch((err) => console.log(err));
    }
  };

  return (
    <div className="container">
      <header>
        <h1>
          <span className="acme">HNG </span>Internship
        </h1>
      </header>
      <main>
        <section className="header">
          <div className="logo">
            <img src="/images/HNG.png" alt="HNG" />
            <h3>HNG Internship</h3>
          </div>
          <ul className="persona">
            <li>
              <FaTwitter className="icon" />
              <p>@hnginternship</p>
            </li>
            <li>
              <FaEnvelope className="icon" />
              <p>hello@hng.tech</p>
            </li>
            <li>
              <FaAddressCard className="icon" />
              <p>
                3 Birrel Avenue, Sabo.
                <br /> Yaba, Lagos State,
                <br /> Nigeria
              </p>
            </li>
          </ul>
        </section>
        <section className="form">
          <form method="POST" onSubmit={onSubmit}>
            <h4>Email Us</h4>

            <div className="field">
              <div className="label">
                <label htmlFor="name">Full Name</label>
                <input
                  type="text"
                  name="name"
                  placeholder="Enter full name"
                  value={name}
                  onChange={handleChange}
                />
              </div>
              <div className="label">
                <label htmlFor="company">Desire Job Title</label>
                <input
                  type="text"
                  name="job"
                  placeholder="Enter desired job title here"
                  value={job}
                  onChange={handleChange}
                />
              </div>
              <div className="label">
                <label htmlFor="email">Email Address</label>
                <input
                  type="email"
                  name="email"
                  placeholder="Enter email address"
                  value={email}
                  onChange={handleChange}
                />
              </div>
              <div className="label">
                <label htmlFor="city">City</label>
                <input
                  type="text"
                  name="city"
                  placeholder="Enter city"
                  value={city}
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className="label-link">
              <label htmlFor="phone">Submission Link (Link to Resume)</label>
              <input
                type="text"
                name="link"
                placeholder="Enter submission link"
                value={link}
                onChange={handleChange}
              />
            </div>
            <button type="submit">SUBMIT</button>
          </form>
        </section>
      </main>
    </div>
  );
}

export default App;
