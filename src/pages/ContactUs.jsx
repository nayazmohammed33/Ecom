import React, { useState } from "react";
import "./ContactUs.css";
const ContactUs = () => {
  const [userDetailes, setUserDetails] = useState({
    name: "",
    email: "",
    tel: "",
    message: "",
  });

  const formHandler = async (e, userDetails) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log("Form submitted with details:", userDetails);
    try {
      const respones = await fetch(
        "https://reactmovieapp-6f981-default-rtdb.firebaseio.com/contactus.json",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(userDetails),
        },
      );
      if (respones.ok) {
        alert("Form submitted successfully!");
        setUserDetails({
          name: "",
          email: "",
          tel: "",
          message: "",
        });
      }
      console.log("Response from server:", respones);
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };
  return (
    <div>
      <h2>Contact Us</h2>
      <div className="contact-form">
        <form>
          <div className="form-group">
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              id="name"
              name="name"
              value={userDetailes.name}
              onChange={(e) =>
                setUserDetails({ ...userDetailes, name: e.target.value })
              }
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              value={userDetailes.email}
              onChange={(e) =>
                setUserDetails({ ...userDetailes, email: e.target.value })
              }
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="tel">Phone Number:</label>
            <input
              type="number"
              id="tel"
              name="tel"
              value={userDetailes.tel}
              onChange={(e) =>
                setUserDetails({ ...userDetailes, tel: e.target.value })
              }
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message:</label>
            <textarea
              id="message"
              name="message"
              value={userDetailes.message}
              onChange={(e) =>
                setUserDetails({ ...userDetailes, message: e.target.value })
              }
              required
            ></textarea>
          </div>
          <button onClick={(e) => formHandler(e, userDetailes)}>Submit</button>
        </form>
      </div>
      <p>This is the contact us page.</p>
    </div>
  );
};

export default ContactUs;
