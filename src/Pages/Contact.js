import React, { useState } from "react"
import { motion } from "framer-motion"
import "./Contact.css"

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value })
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData)
    alert("Message sent successfully!")
    setFormData({ name: "", email: "", message: "" })
  }

  return (
    <section className="contact">
    <div className="contact-wrapper">
      <motion.h2
        initial={{ opacity: 0, x: -40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
      >
        Contact Us
      </motion.h2>

<motion.p
initial={{ opacity: 0, x: -40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
      >
  Lorem ipsum, dolor sit amet consectetur<br />
         <span className="linebreak">adipisicing elit.</span>
         </motion.p>

      <div className="contact-content">

<motion.div
          className="contact-map"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <iframe
            title="Our Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15611.12121706491!2d8.544978638503189!3d11.989698186309228!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x11ae811e9f6c633f%3A0x589552fc538699d8!2sAsma&#39;U%20Yakubu%20Street%2C%20Nassarawa%2C%20Kano%2C%20Nigeria!5e0!3m2!1sen!2sng!4v1758823979330!5m2!1sen!2sng"
            width="100%"
            height="300"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </motion.div>

        <motion.form
          onSubmit={handleSubmit}
          className="contact-form"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
        <label>Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />

          <label>Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />

          <label>Message</label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
          />
          <motion.button 
          whileHover={{ scale: 1.1 }} className="submit-button" type="submit">Submit</motion.button>
        </motion.form>  
      </div>
    </div>
    </section>
  )
}

export default Contact

