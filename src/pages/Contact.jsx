import { FaEnvelope, FaPhoneAlt } from "react-icons/fa";
import { HiArrowSmallRight } from "react-icons/hi2";
import mettingImage from "/src/assets/images/metting.png";
import { useState } from "react";

export default function Contact() {
  const [success, setSuccess] = useState(false);

  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    formData.append("access_key", "9d2e7420-3d9d-4e41-baac-fd5dbe213a54");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: json,
    }).then((res) => res.json());

    if (res.success) {
      setSuccess(true);
      event.target.reset();
    }
  };

  return (
    <div className="bg-[#FCF7F0] p-8 lg:px-20 mt-12">
      <div className="container mx-auto">
        <h2 className="text-2xl text-black lg:text-4xl font-bold text-center mb-8">
          Write to Us to <br />
          Say Hello or For Information!
        </h2>
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Form Section */}
          <div className="flex-1 bg-white p-8 shadow-md rounded-lg">
            <h3 className="text-lg text-black font-semibold mb-4">
              Your Message
            </h3>
            <form onSubmit={onSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  required
                  className="border p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-red-400"
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  required
                  className="border p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-red-400"
                />
                <input
                  type="number"
                  name="phone"
                  placeholder="Your Phone"
                  className="col-span-1 md:col-span-2 border p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-red-400"
                />
                <textarea
                  name="message"
                  rows="4"
                  required
                  placeholder="Your Message"
                  className="col-span-1 md:col-span-2 border p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-red-400"
                ></textarea>
              </div>
              <div className="flex">
                <button
                  type="submit"
                  className="mt-4 flex items-center cursor-pointer btn btn-dash btn-success px-6 py-3 rounded-md shadow focus:outline-none"
                >
                  <p className="pr-2">SUBMIT</p>
                  <HiArrowSmallRight className="text-2xl" />
                </button>
              </div>
              {success && (
                <p className="text-green-600 font-medium mt-3">
                  Message sent successfully!
                </p>
              )}
            </form>
          </div>

          {/* Info Section */}
          <div className="flex-1 bg-[#F9F2DF] p-8 shadow-md rounded-lg flex flex-col justify-between">
            <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between">
              {/* Contact Info */}
              <div>
                <div className="flex items-center space-x-3 mb-4">
                  <FaPhoneAlt className="text-red-600 cursor-pointer text-xl" />
                  <div>
                    <p className="text-lg font-semibold">Toll Free Call</p>
                    <a
                      href="tel:+8801820647468"
                      className="hover:underline text-2xl text-red-600 font-bold"
                    >
                      +880 1820647468
                    </a>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <FaEnvelope className="text-red-600 text-xl" />
                  <div>
                    <p className="text-lg font-semibold">Mail Us</p>
                    <p className="text-red-600 text-lg hover:underline font-medium">
                      mabutalha468@gmail.com
                    </p>
                  </div>
                </div>
                <div className="mt-8">
                  <button className="flex items-center cursor-pointer mt-10 space-x-2 border bg-gray-300 text-black font-bold hover:text-white px-4 py-2 rounded-md hover:bg-gray-800">
                    <HiArrowSmallRight className="text-2xl" />
                    <span>Contact Me</span>
                  </button>
                </div>
              </div>

              {/* Image Section */}
              <div className="mt-8 lg:mt-0 lg:ml-auto">
                <img
                  src={mettingImage}
                  alt="Contact Us"
                  className="rounded-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
