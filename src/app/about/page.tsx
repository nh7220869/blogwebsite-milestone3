import Image from 'next/image';
import React from 'react';

export default function About() {
  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header Section */}
      <header className="bg-blue-100 text-gray-500 py-12 shadow-md">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-4xl font-bold">About Us</h1>
          <p className="mt-2 text-lg">
            Learn about our journey, our mission, and how we serve you with high-quality blogs and services.
          </p>
        </div>
      </header>

      {/* About Section */}
      <section className="container mx-auto px-6 py-12">
        <div className="flex flex-col md:flex-row items-center gap-8">
          {/* Text Section */}
          <div className="flex-1 text-center md:text-left">
            <h2 className="text-3xl font-semibold text-blue-400 mb-4">Our Story</h2>
            <p className="text-gray-700 text-lg leading-relaxed">
              Welcome to our blog platform! We started as a small group of writers passionate about sharing valuable insights. 
              Over time, we&apos;ve grown into a trusted source of knowledge, offering diverse topics and high-quality services tailored to our audience&apos;s needs.
            </p>
            <p className="text-gray-700 text-lg leading-relaxed mt-4">
              Our mission is to inform, inspire, and connect with readers while providing expert services like content creation, editing, and marketing strategies to help businesses succeed.
            </p>
          </div>
          {/* Image Section */}
          <div className="flex-1">
            <Image
              src="/about.jpeg"
              alt="Blogging concept"
              className="rounded-lg shadow-lg w-full"
              height={100}
              width={100}
            />
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="bg-gray-50 py-12">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-semibold text-blue-700 mb-6">Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Service 1 */}
            <div className="p-6 bg-white shadow-lg rounded-lg">
              <h3 className="text-xl font-medium text-blue-700 mb-2">Content Creation</h3>
              <p className="text-gray-600">
                Get expertly written articles, blogs, and web content tailored to your audience.
              </p>
            </div>
            {/* Service 2 */}
            <div className="p-6 bg-white shadow-lg rounded-lg">
              <h3 className="text-xl font-medium text-blue-700 mb-2">Editing & Proofreading</h3>
              <p className="text-gray-600">
                Ensure your content is polished, error-free, and professional with our editing services.
              </p>
            </div>
            {/* Service 3 */}
            <div className="p-6 bg-white shadow-lg rounded-lg">
              <h3 className="text-xl font-medium text-blue-700 mb-2">Marketing Strategies</h3>
              <p className="text-gray-600">
                Enhance your online presence with our tailored digital marketing strategies.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="bg-blue-700 text-white py-12">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-semibold mb-4">Ready to Start Your Journey?</h2>
          <p className="text-lg mb-6">
            Whether you&apos;re here to read insightful blogs or to avail of our services, we&apos;re here to help.
          </p>
          <a
            href="/contact"
            className="bg-white text-blue-700 px-6 py-3 rounded-md font-medium hover:bg-gray-200 transition"
          >
            Contact Us
          </a>
        </div>
      </section>

      {/* Footer Section */}
      <footer className="bg-gray-900 text-white py-6">
        <div className="container mx-auto px-6 text-center">
          <p>&copy; {new Date().getFullYear()} Blog Platform. All Rights Reserved.</p>
        </div>
      </footer>
    </div>
  );
}
