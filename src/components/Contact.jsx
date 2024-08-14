import React, { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import emailjs from 'emailjs-com';

// Initialize EmailJS with your Public Key
emailjs.init('a-rjun0fqMM7ovK1r');

const Contact = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [formErrors, setFormErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submissionStatus, setSubmissionStatus] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const validateForm = () => {
    const errors = {};
    if (!formData.name) errors.name = "Name is required";
    if (!formData.email) errors.email = "Email is required";
    if (!formData.message) errors.message = "Message is required";
    return errors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errors = validateForm();
    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      return;
    }

    const currentYear = new Date().getFullYear();
    setIsSubmitting(true);

    emailjs.send(
      'service_cp6ggae',     // Your EmailJS service ID
      'template_ausxybs',    // Your EmailJS template ID
      {
        from_name: formData.name,
        from_email: formData.email,
        message: formData.message,
        to_name: 'Recipient Name', // You might set this dynamically
        current_year: currentYear
      },
      'a-rjun0fqMM7ovK1r'   // Your EmailJS Public Key (User ID)
    )
    .then((response) => {
      setSubmissionStatus("Your message has been sent successfully!");
      setFormData({ name: "", email: "", message: "" });
      setFormErrors({});
    })
    .catch((error) => {
      setSubmissionStatus("Something went wrong. Please try again.");
    })
    .finally(() => {
      setIsSubmitting(false);
    });
  };

  return (
    <div className="m-3">
      <section className="bg-transparent text-white px-5 py-32 border-white border-8 rounded-3xl flex justify-between items-center" id="contact">
        <div className="text-center md:w-[60%] mx-auto rounded-3xl p-4">
          <h2
            className="text-4xl font-bold mb-5 border-b-[5px] w-[200px] mx-auto border-red-600 pb-2 font-electroharmonic"
            data-aos="fade-down"
          >
            Contact Me
          </h2>
          <p className="mb-8 font-animeitalic" data-aos="fade-up">
            I am currently open for a full-time Software Developer role. If you
            want to discuss that, feel free to email me or call me.
          </p>
          <form className="space-y-4 font-electroharmonic" onSubmit={handleSubmit}>
            <div data-aos="fade-right">
              <label htmlFor="name" className="block text-left font-bold mb-2">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="font-animeregular w-full px-4 py-2 border border-gray-300 rounded-md bg-transparent text-white"
                placeholder="Your Name"
              />
              {formErrors.name && <p className="text-red-600">{formErrors.name}</p>}
            </div>
            <div data-aos="fade-right" data-aos-delay="100">
              <label htmlFor="email" className="font-electroharmonic block text-left font-bold mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="font-animeregular w-full px-4 py-2 border border-gray-300 rounded-md bg-transparent text-white"
                placeholder="Your Email"
              />
              {formErrors.email && <p className="text-red-600">{formErrors.email}</p>}
            </div>
            <div data-aos="fade-right" data-aos-delay="200">
              <label htmlFor="message" className="font-electroharmonic block text-left font-bold mb-2">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows="4"
                value={formData.message}
                onChange={handleChange}
                className="font-animeregular w-full px-4 py-2 border border-gray-300 rounded-md bg-transparent text-white"
                placeholder="Your Message"
              ></textarea>
              {formErrors.message && <p className="text-red-600">{formErrors.message}</p>}
            </div>
            <button
              type="submit"
              className="font-electroharmonic w-full bg-red-600 text-white py-2 rounded-md font-bold hover:bg-red-700"
              data-aos="fade-up"
              data-aos-delay="300"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Sending..." : "Send Message"}
            </button>
          </form>
          {submissionStatus && (
            <div className="mt-4 text-center">
              <p>{submissionStatus}</p>
            </div>
          )}
          <div className="mt-8">
            <p className="py-2" data-aos="fade-left">
              <span className="font-bold">Email:</span> coderamrin@gmail.com
            </p>
            <p className="py-2" data-aos="fade-left" data-aos-delay="100">
              <span className="font-bold">Phone:</span> +91 9021369589
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
