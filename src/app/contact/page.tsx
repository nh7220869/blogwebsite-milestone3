'use client';  // Add this at the top of your file to mark it as a Client Component

import { useState } from 'react'; // Import useState hook
import Container from '@/app/components/Container';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

interface FormData {
  name: string;
  email: string;
  message: string;
}

export default function ContactPage() {
  // State to track form submission status
  const [submissionStatus, setSubmissionStatus] = useState<string | null>(null);
  const [formSubmitted, setFormSubmitted] = useState(false); // Track form submission

  // Type for the handleSubmit function event
  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const formData = new FormData(event.target as HTMLFormElement);

    formData.append("access_key", "c2fb6e2e-1a04-4190-9aab-3e853b4604e1");

    const object = Object.fromEntries(formData) as unknown as FormData;
    const json = JSON.stringify(object);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json"
        },
        body: json
      });
      const result = await response.json();
      if (result.success) {
        setSubmissionStatus('Your message has been submitted successfully!');
        setFormSubmitted(true); // Set form submission to true
      } else {
        setSubmissionStatus('There was an issue submitting your message.');
      }
    } catch (error) {
      console.error('Error submitting the form:', error);
      setSubmissionStatus('Error submitting the form. Please try again.');
    }
  }

  return (
    <div className="min-h-screen bg-lightblue-to-white">
      <Container>
        <div className="py-16">
          <h1 className="text-4xl font-bold text-center mb-8 text-gray-800">Contact Us</h1>

          {/* Conditionally render form or success message */}
          {!formSubmitted ? (
            <div className="max-w-3xl mx-auto bg-blue-100 p-8 rounded-lg shadow-lg">
              <h2 className="text-2xl font-semibold mb-6 text-gray-800">Get In Touch</h2>
              <form action="#" method="POST" onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label htmlFor="name" className="block text-gray-700 mb-2">Full Name</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-gray-700 mb-2">Email Address</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      required
                    />
                  </div>
                </div>

                <div className="mb-6">
                  <label htmlFor="message" className="block text-gray-700 mb-2">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                  ></textarea>
                </div>

                <div className="text-center">
                  <button
                    type="submit"
                    className="px-6 py-3 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  >
                    Send Message
                  </button>
                </div>
              </form>
            </div>
          ) : (
            // Show success message after form submission
            <div className="mt-6 text-center text-blue-700 font-semibold">
              <p>Your response has been noticed! Thank you for reaching out.</p>
            </div>
          )}

          {/* Display submission status message */}
          {submissionStatus && !formSubmitted && (
            <div className="mt-6 text-center text-red-500 font-semibold">
              {submissionStatus}
            </div>
          )}

          {/* Contact Information */}
          <div className="mt-16 text-center">
            <h2 className="text-2xl font-semibold mb-6 text-gray-800">Our Contact Information</h2>
            <p className="text-gray-600 mb-4">
              Feel free to reach out to us for any inquiries, feedback, or support.
            </p>
            <p className="text-gray-600 mb-4">
              <strong>Email:</strong> contact@myblog.com
            </p>
            <p className="text-gray-600 mb-4">
              <strong>Phone:</strong> +92 3021260393
            </p>
            <p className="text-gray-600 mb-4">
              <strong>Address:</strong> 123 Blog Street, Blog City, BL 12345
            </p>

            {/* Social Media Links with Flexbox Icons */}
            <div className="mt-6 flex justify-center space-x-6 text-gray-800">
              <a href="https://facebook.com" target="_blank" className="transform hover:scale-110 transition-all duration-300">
                <FaFacebook size={30} className="hover:text-blue-600" />
              </a>
              <a href="https://twitter.com" target="_blank" className="transform hover:scale-110 transition-all duration-300">
                <FaTwitter size={30} className="hover:text-blue-400" />
              </a>
              <a href="https://instagram.com" target="_blank" className="transform hover:scale-110 transition-all duration-300">
                <FaInstagram size={30} className="hover:text-pink-600" />
              </a>
              <a href="https://linkedin.com" target="_blank" className="transform hover:scale-110 transition-all duration-300">
                <FaLinkedin size={30} className="hover:text-blue-700" />
              </a>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}
