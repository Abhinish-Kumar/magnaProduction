// import  { useState } from "react";
// import "./Contact.css";

// function Contact() {
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     message: "",
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Here, handle form submission (e.g., send data to a server or API)
//     alert("Form submitted!");
//   };

//   return (
//     <div className="contact-container">
//       <div className="contact-header">
//         <h1>Get in Touch</h1>
//         <p>We are here to make your events unforgettable!</p>
//       </div>
//       <div className="contact-form">
//         <form onSubmit={handleSubmit}>
//           <div className="form-group">
//             <label htmlFor="name">Your Name</label>
//             <input
//               type="text"
//               id="name"
//               name="name"
//               value={formData.name}
//               onChange={handleChange}
//               placeholder="John Doe"
//               required
//             />
//           </div>
//           <div className="form-group">
//             <label htmlFor="email">Your Email</label>
//             <input
//               type="email"
//               id="email"
//               name="email"
//               value={formData.email}
//               onChange={handleChange}
//               placeholder="john@example.com"
//               required
//             />
//           </div>
//           <div className="form-group">
//             <label htmlFor="message">Your Message</label>
//             <textarea
//               id="message"
//               name="message"
//               value={formData.message}
//               onChange={handleChange}
//               placeholder="Tell us about your event..."
//               required
//             ></textarea>
//           </div>
//           <button type="submit" className="submit-btn">Send Message</button>
//         </form>
//       </div>
//       <div className="contact-info">
//         <h3>Our Office</h3>
//         <p>123 Event Street, Event City, 12345</p>
//         <p>Email: <a href="mailto:info@eventmanagement.com">info@eventmanagement.com</a></p>
//         <p>Phone: +123 456 7890</p>
//       </div>
//     </div>
//   );
// }

// export default Contact;
