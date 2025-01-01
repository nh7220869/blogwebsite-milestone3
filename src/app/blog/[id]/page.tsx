"use client";
import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation"; // Import useSearchParams hook
import CommentSection from "@/app/components/CommentSection";
import Image from "next/image";

// Define types for Blog and Sections
type SubSection = {
  subHeading?: string;
  paragraph?: string;
};

type Section = {
  heading1?: string;
  paragraph1?: string;
  image?: string;
  heading?: string;
  paragraph?: string;
  subSections?: SubSection[];
};

type Blog = {
  title: string;
  author: string;
  date: string;
  content: Section[];
  conclusion: string;
};

export default function Product() {
  const searchParams = useSearchParams(); // Get the query params using useSearchParams
  const id = searchParams.get("id"); // Access the "id" from the query parameters
  const [blog, setBlog] = useState<Blog | null>(null); // State to store blog data
  const [loading, setLoading] = useState<boolean>(true); // State to handle loading state

  useEffect(() => {
    // Fetch blog data based on the ID when the component mounts
    const fetchBlogData = async () => {
      if (!id) return; // Handle case where ID is missing

      try {
        const res = await fetch(`http://localhost:3000/api/blogs?id=${id}`);
        const data = await res.json();
        setBlog(data); // Set the fetched data to the state
      } catch (error) {
        console.error("Error fetching blog data:", error);
      } finally {
        setLoading(false); // Set loading to false after data is fetched
      }
    };

    fetchBlogData(); // Call the function to fetch the data
  }, [id]); // Dependency on `id` to trigger effect when the ID changes

  // Show loading state while data is being fetched
  if (loading) {
    return <div>Loading...</div>;
  }

  // Handle case if the blog data is not available
  if (!blog) {
    return <div>Blog not found</div>;
  }

  return (
    <div className="max-w-3xl mx-auto px-4 py-8 ">
      <div className="bg-white shadow-md rounded-lg p-6">
        <h1 className="text-4xl font-semibold text-gray-800 mb-4">{blog.title}</h1>
        <p className="text-gray-500 text-sm mb-4">
          <strong className="font-semibold">{blog.author}</strong> | {blog.date}
        </p>

        {/* Content sections */}
        {blog.content.map((section, index) => (
          <div key={index} className="mb-6">
            {section.heading1 && <h2 className="text-2xl font-semibold text-gray-800 mb-2">{section.heading1}</h2>}
            {section.paragraph1 && <p className="text-gray-700 mb-4">{section.paragraph1}</p>}
            {section.image && (
              <Image className="w-full h-auto rounded-lg mb-4" height={100} width={100} src={section.image} alt="Generative AI" />
            )}
            {section.heading && <h2 className="text-xl font-semibold text-gray-800 mb-2">{section.heading}</h2>}
            {section.paragraph && <p className="text-gray-700 mb-4">{section.paragraph}</p>}

            {/* Subsections */}
            {section.subSections &&
              section.subSections.map((subSection, subIndex) => (
                <div key={subIndex} className="pl-6 border-l-4 border-gray-300 mb-4">
                  {subSection.subHeading && <h3 className="text-lg font-semibold text-gray-700 mb-2">{subSection.subHeading}</h3>}
                  {subSection.paragraph && <p className="text-gray-600">{subSection.paragraph}</p>}
                </div>
              ))}
          </div>
        ))}

        {/* Conclusion */}
        <p className="text-gray-700 text-lg mt-6">{blog.conclusion}</p>
      </div>

      {/* <CommentSection /> */}
      <CommentSection />
    </div>
  );
}
