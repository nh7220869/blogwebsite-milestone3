
interface BlogPost {
  id: number;
  title: string;
  slug: string;
  description: string;
  content: string;
}
const posts:BlogPost[] = [
  {
    id: 1,
    title: 'Mastering JavaScript',
    slug: 'mastering-javascript',
    description: 'A comprehensive guide to becoming proficient in JavaScript.',
    content: `
      JavaScript is a versatile language that powers the modern web.
      Topics include closures, async programming, and the latest ECMAScript updates.
      Start your journey to mastering this essential language today!
    `,
  },
  {
    id: 2,
    title: 'Understanding React',
    slug: 'understanding-react',
    description: 'Delve into the world of components, hooks, and state management.',
    content: `
      React simplifies UI development with reusable components.
      Learn how to manage state effectively and create performant web applications
      by leveraging the power of React's hooks and context API.
    `,
  },
  {
    id: 3,
    title: 'The Future of Web Development',
    slug: 'future-web-development',
    description: 'Exploring the emerging trends and technologies shaping the future of web development.',
    content: `
      The web development landscape is constantly evolving. In this post, we dive into the future of web development, covering topics like Progressive Web Apps (PWAs), JAMstack, and serverless architectures.
    `,
  },
];

export default function BlogPost() {
  return (
    <div className="bg-lightblue-to-white">
    <div className="bg-lightblue-to-white   ">
      {/* Centered Heading */}
      <div className="text-center">
        <h1 className="text-4xl font-extrabold text-darkGreen mt-12">Our Blogs</h1>
      </div>

      {/* Blog Cards Section */}
      <div className="py-10">
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-8">
          Blog Posts List
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center px-4">
          {posts.map(
            (post: {
              id: number;
              title: string;
              description: string;
              content: string;
            }) => (
              <div
                key={post.id}
                className="bg-white border border-gray-200 rounded-lg shadow-md hover:shadow-lg duration-300 p-6 hover:scale-105 transform transition"
              >
                <div className="mx-2 mt-2">
                  <h2 className="text-2xl font-semibold mb-4 text-darkGreen">
                    {post.title}
                  </h2>
                  <p className="text-lg text-gray-600 mb-4">{post.description}</p>
                  <p className="text-gray-500 mb-6">{post.content}</p>
                  <a
                    href={`/blog/id?id=${post.id}`}
                    className="text-blue-500 hover:text-blue-400 font-semibold"
                  >
                    Read Full Post
                  </a>
                </div>
              </div>
            )
          )}
        </div>
      </div>
    </div>
    </div>
  );
}
