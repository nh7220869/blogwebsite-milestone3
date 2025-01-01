"use client";
import { useState, useEffect } from "react";
import { AiOutlineDelete } from "react-icons/ai";
interface Comment {
  name: string;
  comment: string;
  nameInitial: string;
  reactions: {
    like: number;
    love: number;
    dislike: number;
  };
}
const CommentSection = () => {
  const [comments, setComments] = useState<Comment[]>([]); // Stores name, comment, and reactions
  const [newComment, setNewComment] = useState<string>(""); // Comment text
  const [name, setName] = useState<string>(""); // Name of the person commenting
  const [error, setError] = useState<string | null>(null); // For error handling

  // Load existing comments from localStorage when component mounts
  useEffect(() => {
    const storedComments = localStorage.getItem("comments");
    if (storedComments) {
      setComments(JSON.parse(storedComments));
    }
  }, []);

  const handleAddComment = () => {
    // Basic validation
    if (!name.trim()) {
      setError("Name is required.");
      return;
    }
    if (newComment.trim().length < 5) {
      setError("Comment must be at least 5 characters long.");
      return;
    }

    const commentData = {
      name,
      comment: newComment,
      nameInitial: name.charAt(0).toUpperCase(), // First letter of name
      reactions: { like: 0, love: 0, dislike: 0 }, // Initial emoji reactions
    };

    const updatedComments = [...comments, commentData];
    setComments(updatedComments);

    // Save to localStorage
    localStorage.setItem("comments", JSON.stringify(updatedComments));

    setNewComment(""); // Reset comment input
    setName(""); // Reset name input
    setError(null); // Clear any errors
  };

  // Function to handle emoji reactions
  const handleReaction = (
    index: number,
    reactionType: "like" | "love" | "dislike"
  ) => {
    const updatedComments = [...comments];
    const comment = updatedComments[index];

    // Ensure reactions are initialized
    if (!comment.reactions) {
      comment.reactions = { like: 0, love: 0, dislike: 0 };
    }

    comment.reactions[reactionType] += 1; // Increase the selected reaction

    setComments(updatedComments);
    // Save updated comments to localStorage
    localStorage.setItem("comments", JSON.stringify(updatedComments));
  };

  // Function to remove a comment
  const handleRemoveComment = (index: number) => {
    const updatedComments = comments.filter((_, i) => i !== index);
    setComments(updatedComments);

    // Save updated comments to localStorage
    localStorage.setItem("comments", JSON.stringify(updatedComments));
  };

  return (
    <div className="space-y-6 bg-light-green p-5 rounded-lg shadow-md">
      <h3 className="text-lg font-semibold text-dark-green">Comments</h3>

      {/* Input for name */}
      <div>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full p-3 border border-gray-300 rounded-md"
          placeholder="Your Name"
        />
      </div>

      {/* Input for comment */}
      <div>
        <textarea
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
          className="w-full p-3 border border-gray-300 rounded-md"
          rows={3}
          placeholder="Add your comment"
        />
      </div>

      {/* Error message */}
      {error && <p className="text-red-500 mt-2">{error}</p>}

      {/* Submit button */}
      <button
        onClick={handleAddComment}
        className="mt-3 px-4 py-2 bg-dark-green text-black rounded hover:bg-dark-green"
      >
        Add Comment
      </button>

      {/* Display the comments */}
      <ul className="space-y-4 mt-6">
        {comments.map((comment, index) => (
          <li key={index} className="p-4 bg-light-cream rounded-lg shadow-md">
            <div className="flex items-center space-x-3">
              {/* User's name initial */}
              <div className="w-10 h-10 rounded-full bg-gray-500 text-white flex items-center justify-center">
                {comment.nameInitial}
              </div>
              <div>
                {/* User's name */}
                <p className="font-semibold">{comment.name}</p>
                {/* User's comment */}
                <p>{comment.comment}</p>
              </div>
            </div>

            {/* Emoji reaction buttons */}
            <div className="mt-3 flex space-x-4">
              <button
                onClick={() => handleReaction(index, "like")}
                className="flex items-center text-green-500"
              >
                👍 {comment.reactions?.like || 0}
              </button>
              <button
                onClick={() => handleReaction(index, "love")}
                className="flex items-center text-pink-500"
              >
                ❤️ {comment.reactions?.love || 0}
              </button>
              <button
                onClick={() => handleReaction(index, "dislike")}
                className="flex items-center text-red-500"
              >
                👎 {comment.reactions?.dislike || 0}
              </button>
              {/* Remove button */}
              <button
                onClick={() => handleRemoveComment(index)}
                className="justify-end"
              >
                <AiOutlineDelete />

              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CommentSection;