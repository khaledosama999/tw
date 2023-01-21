/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";

function Banner() {
  return (
    <div className="relative top-0 mb-2 w-full bg-pink-200 py-2 px-1 text-center">
      <p className="inline">
        NEW: Have multiple entities? Manage all your spend in one place.
        <a href="#" className="underline">
          Learn more.
        </a>
      </p>
      <img
        className="absolute right-2 inline"
        alt="3"
        src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHZpZXdCb3g9IjAgMCAyMCAyMCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJtMTUuOCA1LjMtMS4xLTEuMUwxMCA4LjggNS4zIDQuMiA0LjIgNS4zIDguOCAxMGwtNC42IDQuNyAxLjEgMS4xIDQuNy00LjYgNC43IDQuNiAxLjEtMS4xLTQuNi00LjcgNC42LTQuN3oiIGZpbGw9IiMyMjIiLz48L3N2Zz4="
      />
    </div>
  );
}

export default Banner;
