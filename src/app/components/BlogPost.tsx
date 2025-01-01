import Link from 'next/link';

export default function BlogCard({ title, description, slug }: { title: string; description: string; slug: string }) {
  return (
    <div className="p-6 bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 ease-in-out transform hover:scale-105">
      <h2 className="text-2xl font-semibold text-gray-800 mb-3 hover:text-blue-600 transition-colors duration-200">{title}</h2>
      <p className="text-gray-700 mb-5 text-sm">{description}</p>
      <Link href={`/blog/${slug}`} className="text-blue-600 font-medium hover:underline text-sm">
        Read Full Post
      </Link>
    </div>
  );
}
