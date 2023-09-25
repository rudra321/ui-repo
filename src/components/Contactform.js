import React, { useState } from "react";
import { useRef } from "react";
const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("https://formspree.io/f/xoqollwp", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert("Message sent successfully!");
        setFormData({
          name: "",
          email: "",
          message: "",
        });
      } else {
        alert("Message sending failed. Please try again later.");
      }
    } catch (error) {
      console.error("Error sending message:", error);
    }
  };
  const phoneTextRef = useRef(null); // Ref for phone text
  const emailTextRef = useRef(null); // Ref for email text

  const handleClick = (ref) => {
    // Get the text content of the div using ref.current.textContent
    const textToCopy = ref.current.textContent;

    // Create a textarea element to temporarily hold the text
    const textArea = document.createElement("textarea");
    textArea.value = textToCopy;

    // Append the textarea to the document
    document.body.appendChild(textArea);

    // Select the text in the textarea
    textArea.select();

    // Copy the selected text to the clipboard
    document.execCommand("copy");

    // Remove the temporary textarea
    document.body.removeChild(textArea);

    // Provide feedback to the user (you can customize this part)
    alert(textToCopy + " copied to clipboard");
  };

  return (
    <div
      className="contact-form"
      style={{ backgroundColor: "rgba(255,255,255,0.1)" }}
    >
      <div
        style={{
          color: "white",
          textAlign: "center",
          paddingTop: "3rem",
          fontSize: "2rem",
        }}
      >
        Let's work together!!
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          padding: "1rem",
        }}
      >
        <div
          ref={phoneTextRef}
          onClick={() => handleClick(phoneTextRef)}
          style={{ color: "white", padding: "1rem" }}
        >
          +91-8619142679
        </div>
        <div style={{ color: "white" }}>|</div>
        <div
          ref={emailTextRef}
          onClick={() => handleClick(emailTextRef)}
          style={{ color: "white", padding: "1rem" }}
        >
          rudrap5201@gmail.com
        </div>
      </div>
      <div
        style={{
          color: "white",
          textAlign: "center",
          //   paddingTop: "3rem",
          fontSize: "1rem",
          padding: "1rem",
          fontStyle: "italic"
        }}
      >
        Please enter your details below so that I can get back to you asap.
      </div>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Enter you name."
          value={formData.name}
          onChange={handleChange}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Enter your email address."
          value={formData.email}
          onChange={handleChange}
          required
        />
        <textarea
          name="message"
          placeholder="Enter a message for me."
          value={formData.message}
          onChange={handleChange}
          required
        />
        <button type="submit" className="btn">
          Submit
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
