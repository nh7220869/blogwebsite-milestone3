import Link from 'next/link';
import React from 'react';

export default function HomePage() {
  return (
    <div className="bg-lightblue-to-white min-h-screen text-gray-800">

      

      {/* Hero Section */}
      <section className="bg-lightCream py-16 sm:py-24 md:py-32 text-center">
        <div className="container mx-auto px-6 sm:px-8 md:px-12">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-darkGreen">
            Discover the World of Insightful Content
          </h2>
          <p className="text-lg sm:text-xl md:text-2xl text-gray-700 mt-6">
            At BlogHub, we offer fresh perspectives and valuable insights on a variety of topics.
            From tech trends to lifestyle advice, we&apos;re here to inspire and inform.
          </p>
          <p className="text-sm sm:text-lg md:text-xl text-gray-600 mt-4">
            Whether you&apos;re looking for thought-provoking articles or simply a good read, you&apos;ll find it here.
          </p>
          <Link
            href="/blog"
            className="bg-blue-500 text-white px-8 py-4 mt-8 inline-block rounded-md text-lg sm:text-xl md:text-2xl hover:bg-blue-400 transition duration-300"
          >
            Explore Our Articles
          </Link>
        </div>
      </section>
    </div>
  );
}
