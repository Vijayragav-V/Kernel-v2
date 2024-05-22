import React, { useEffect, useState } from 'react';
import { FaRegBookmark, FaBookmark } from "react-icons/fa6";

const BookmarkButton = ({ extracurricularID }) => {
  const [isBookmarked, setIsBookmarked] = useState(false);

  useEffect(() => {
    const storedBookmarks = JSON.parse(localStorage.getItem('bookmarks')) || [];
    setIsBookmarked(storedBookmarks.includes(extracurricularID));
  }, [extracurricularID]);

  const handleBookmarkToggle = () => {
    setIsBookmarked((prev) => {
      const storedBookmarks = JSON.parse(localStorage.getItem('bookmarks')) || [];

      const updatedBookmarks = prev
        ? storedBookmarks.filter((id) => id !== extracurricularID)
        : [...storedBookmarks, extracurricularID];

      localStorage.setItem('bookmarks', JSON.stringify(updatedBookmarks));


      return !prev;
    });
  };

  return (
    <button onClick={handleBookmarkToggle} className={`bookmark-button ${isBookmarked ? 'bookmarked' : ''}`}>
      <div className="flex w-[140%] h-[20%] bg-white text-[#4CAF50] justify-center rounded-full border-4 border-[#8bb48d] hover:border-[#4CAF50] ease-in-out duration-300 p-2 hover:cursor-pointer">
        {isBookmarked ? (
          <FaBookmark color="#4CAF50" style={{ fontSize: "24px" }} />
        ) : (
          <FaRegBookmark color="#4CAF50" style={{ fontSize: "24px" }} />
        )}
      </div>
    </button>
  );
};

export default BookmarkButton;
