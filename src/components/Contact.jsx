import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import OnHover from "./OnHover";

const Contact = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);

  return (
    <div className="m-3">
      <section className="bg-transparent text-white px-5 py-32 border-white border-8 rounded-3xl flex justify-between items-center"  id="contact">
      <div className="text-center md:w-[60%] mx-auto  rounded-3xl p-4">
        <h2
          className="text-4xl font-bold mb-5 border-b-[5px] w-[200px] mx-auto border-red-600 pb-2"
          data-aos="fade-down"
        >
          Contact Me
        </h2>
        <p className="mb-8" data-aos="fade-up">
          I am currently open for a full-time Frontend Developer role. If you
          want to discuss that, feel free to email me or call me.
        </p>
        <form className="space-y-4">
          <div data-aos="fade-right">
            <label htmlFor="name" className="block text-left font-bold mb-2">
              Name
            </label>
            <input
              type="text"
              id="name"
              className="w-full px-4 py-2 border border-gray-300 rounded-md bg-transparent text-white"
              placeholder="Your Name"
            />
          </div>
          <div data-aos="fade-right" data-aos-delay="100">
            <label htmlFor="email" className="block text-left font-bold mb-2">
              Email
            </label>
            <input
              type="email"
              id="email"
              className="w-full px-4 py-2 border border-gray-300 rounded-md bg-transparent text-white"
              placeholder="Your Email"
            />
          </div>
          <div data-aos="fade-right" data-aos-delay="200">
            <label htmlFor="message" className="block text-left font-bold mb-2">
              Message
            </label>
            <textarea
              id="message"
              rows="4"
              className="w-full px-4 py-2 border border-gray-300 rounded-md bg-transparent text-white"
              placeholder="Your Message"
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full bg-red-600 text-white py-2 rounded-md font-bold hover:bg-red-700"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            Send Message
          </button>
        </form>
        <div className="mt-8">
          <p className="py-2" data-aos="fade-left">
            <span className="font-bold">Email:</span> coderamrin@gmail.com
          </p>
          <p className="py-2" data-aos="fade-left" data-aos-delay="100">
            <span className="font-bold">Phone:</span> +88 01624-890723
          </p>
        </div>
      </div>
     
    </section>
    </div>
  );
};

export default Contact;
