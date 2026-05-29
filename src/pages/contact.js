import React, { useState } from "react";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");

  const generateMailToLink = () => {
    const subject = encodeURIComponent("Contact Inquiry");
    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\nPhone: ${phone}\nMessage: ${message}`
    );
    return `mailto:mlglobalenergy@gmail.com?subject=${subject}&body=${body}`;
  };

  return (
    <div>

      <section className="relative w-full h-[60vh] flex items-center justify-center bg-gray-600 text-white pt-20">
        <div className="relative z-10 text-center px-4">
          <h1 className="text-4xl md:text-6xl font-bold leading-tight">Contact Us</h1>
          <p className="mt-4 text-lg md:text-2xl">Let's Build a Sustainable Future Together</p>
        </div>
      </section>

      <section className="py-20 px-6 bg-white text-gray-700">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12">
          {/* Email Section */}
          <div>
            <h2 className="text-3xl font-bold mb-6">Send Us a Message</h2>
            <div className="space-y-6">
              <div>
                <label className="block mb-2 font-semibold">Name</label>
                <input
                  type="text"
                  className="w-full border border-gray-300 rounded-lg px-4 py-2"
                  placeholder="Your Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div>
                <label className="block mb-2 font-semibold">Email</label>
                <input
                  type="email"
                  className="w-full border border-gray-300 rounded-lg px-4 py-2"
                  placeholder="you@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div>
                <label className="block mb-2 font-semibold">Phone</label>
                <input
                  type="tel"
                  className="w-full border border-gray-300 rounded-lg px-4 py-2"
                  placeholder="(+44) 123-456-7890"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                />
              </div>
              <div>
                <label className="block mb-2 font-semibold">Message</label>
                <textarea
                  rows="5"
                  className="w-full border border-gray-300 rounded-lg px-4 py-2"
                  placeholder="Your message..."
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                ></textarea>
              </div>
              <a
                href={generateMailToLink()}
                className="inline-block bg-gray-700 hover:bg-gray-900 text-white font-bold py-3 px-6 rounded-full transition"
              >
                Send Email
              </a>
            </div>
          </div>

          {/* Contact Info */}
          <div className="flex flex-col justify-center space-y-8">
            <div>
              <h2 className="text-3xl font-bold mb-6">Contact Information</h2>
              <p className="text-lg mb-2">📍 London, United Kingdom</p>
              <p className="text-lg mb-2">📧 contact@mlglobalenergy@gmail.com</p>
              <p className="text-lg mb-2">☎ (+44) 774-267-8190</p>
            </div>
            <div>
              <h2 className="text-2xl font-bold mb-4">Business Hours</h2>
              <p className="text-lg">Monday - Friday: 8AM - 6PM</p>
              <p className="text-lg">Saturday: 9AM - 1PM</p>
              <p className="text-lg">Sunday: Closed</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
