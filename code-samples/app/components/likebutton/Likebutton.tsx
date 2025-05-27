import { useEffect, useState } from "react";

export default function LikeButton() {
  const [likes, setLikes] = useState(0);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const storedLikes = localStorage.getItem("likes");
      if (storedLikes) {
        setLikes(parseInt(storedLikes));
      }
    }
  }, []);

  const handleLike = () => {
    if (typeof window !== 'undefined') {
      setLikes((prev) => {
        const newLikes = prev + 1;
        localStorage.setItem("likes", newLikes.toString());
        return newLikes;
      });
    }
  };

  return (
    <div className="flex gap-2 items-center text-center">
      <button
        onClick={handleLike}
        className={`px-4 py-2 bg-blue-500 text-white rounded cursor-pointer p-0 text-base`}>
        Like{likes > 10 ? " - Popular" : ""}
      </button>
      <p>Likes: {likes}</p>
    </div>
  );
}