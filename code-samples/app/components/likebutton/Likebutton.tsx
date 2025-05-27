"use client";

import { useEffect, useState } from "react";
import "lineicons/dist/lineicons.css";

export default function LikeButton() {

    const storedLikes = localStorage.getItem("likes");
    const [likes, setLikes] = useState(storedLikes ? parseInt(storedLikes) : 0);

  useEffect(() => {
    if (likes > 0) {
        console.log("🟢 Beğenildi");

        localStorage.setItem("likes", likes.toString());
    }
  }, [likes]);

  const handleLike = () => {
    setLikes((prev) => prev + 1);
    };

  return (
    <div className="flex gap-2 items-center text-center">
      <button
        onClick={() => handleLike()}
        className={`px-4 py-2 bg-blue-500 text-white rounded cursor-pointer p-0 text-base`}>
        Like{likes > 10 ? " - Popular" : ""}
      </button>
      <p>Likes: {likes}</p>
    </div>
  );
}