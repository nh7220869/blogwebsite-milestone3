import Link from "next/link";

export default function Footer() {
    return (
      <footer className="bg-gray-800 text-gray-300 py-8">
        <div className="container mx-auto px-4 space-y-6">
          {/* Links Section */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {/* About Section (no changes to this section) */}
            <div className="col-span-1">
              <h2 className="text-lg font-semibold text-white mb-2">About My Blog</h2>
              <p>
                My Blog is a platform to share insights, stories, and tips across
                various topics. Our mission is to provide value-packed content for
                readers worldwide.
              </p>
            </div>
  
            {/* Quick Links Section (further right with equal margin) */}
            <div className="col-span-1 ml-20">
              <h3 className="font-semibold text-white mb-2">Quick Links</h3>
              <ul className="space-y-2">
                <li><Link href="/" className="hover:underline">Home</Link></li>
                <li><Link href="/blog" className="hover:underline">Blog</Link></li>
                <li><Link href="/about" className="hover:underline">About Us</Link></li>
                <li><Link href="/contact" className="hover:underline">Contact</Link></li>
              </ul>
            </div>
  
            {/* Categories Section (same gap as Quick Links) */}
            <div className="col-span-1 ml-20">
              <h3 className="font-semibold text-white mb-2">Categories</h3>
              <ul className="space-y-2">
                <li><Link href="/category/tech" className="hover:underline">Technology</Link></li>
                <li><Link href="/category/lifestyle" className="hover:underline">Lifestyle</Link></li>
                <li><Link href="/category/education" className="hover:underline">Education</Link></li>
                <li><Link href="/category/health" className="hover:underline">Health</Link></li>
              </ul>
            </div>
  
            {/* Follow Us Section (same gap as other sections) */}
            <div className="col-span-1 ml-20">
              <h3 className="font-semibold text-white mb-2">Follow Us</h3>
              <ul className="space-y-2">
                <li><Link href="https://facebook.com" className="hover:underline">Facebook</Link></li>
                <li><Link href="https://twitter.com" className="hover:underline">Twitter</Link></li>
                <li><Link href="https://instagram.com" className="hover:underline">Instagram</Link></li>
                <li><Link href="https://linkedin.com" className="hover:underline">LinkedIn</Link></li>
              </ul>
            </div>
          </div>
  
          {/* Bottom Section */}
          <div className="border-t border-gray-700 pt-4 text-center">
            <p>© 2024 My Blog. All Rights Reserved.</p>
            
          </div>
        </div>
      </footer>
    );
  }
  