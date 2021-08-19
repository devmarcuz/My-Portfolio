import React, { useState } from "react";
import {
  clearMessage,
  errorMessage,
  successMessage,
} from "../redux/actions/messageAction";
import { Alert, Success } from "../helpers/message";
import { useDispatch, useSelector } from "react-redux";
import isEmail from "validator/lib/isEmail";
import isEmpty from "validator/lib/isEmpty";
import { request } from "../auth";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    msg: "",
  });

  const { name, email, msg } = formData;

  const { success, error } = useSelector((state) => state.messages);
  const dispatch = useDispatch();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    dispatch(clearMessage(""));
  };

  const onSubmit = (e) => {
    e.preventDefault();
    dispatch(clearMessage());
    if (isEmpty(name) || isEmpty(email) || isEmpty(msg)) {
      dispatch(errorMessage("All fields are required"));
    } else if (!isEmail(email)) {
      dispatch(errorMessage("Invalid email address"));
    } else {
      const { email, name, msg } = formData;
      const data = { email, name, msg };

      request(data)
        .then((res) => {
          dispatch(errorMessage(""));
          dispatch(successMessage(res.data.success));
          setFormData({
            email: "",
            name: "",
            msg: "",
          });
        })
        .catch((err) => {
          if (
            err.response.statusText === "Internal Server Error" ||
            err.response.data.error === "getaddrinfo ENOTFOUND api.mailgun.net"
          ) {
            return dispatch(errorMessage("Try again later"));
          }
          dispatch(errorMessage(err.response.data.error));
        });
    }
  };

  return (
    <div className="contact">
      <div className="compact">
        <h2>Contact Me</h2>
        <img src="/images/marker.svg" alt="" />
      </div>
      <div className="form">
        <form action="" onSubmit={onSubmit}>
          {error && <Alert error={error} />}
          {success && <Success success={success} />}
          <div className="label">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              name="name"
              value={name}
              onChange={handleChange}
            />
          </div>
          <div className="label">
            <label htmlFor="name">Email</label>
            <input
              type="email"
              name="email"
              value={email}
              onChange={handleChange}
            />
          </div>
          <div className="label message">
            <label htmlFor="msg"> Message </label>
            <textarea
              name="msg"
              id=""
              cols="30"
              rows="5"
              value={msg}
              onChange={handleChange}
            ></textarea>
          </div>
          <button type="submit">Send</button>
        </form>
        <div className="content">
          <h2>Let's talk how I can help you!</h2>
          <p className="p">
            If you like my work and want to avail my services then drop me a
            message using the contact form.
          </p>
          <p className="p ct">
            Or get in touch using my email or my contact number.
          </p>
          <p className="p">See you!</p>
          <ul className="info">
            <li>
              <p>Email:</p>
              <h4>otunbamarcusademola@gmail.com</h4>
            </li>
            <li>
              <p>Phone:</p>
              <h4>+234 803-591-5522</h4>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Contact;
