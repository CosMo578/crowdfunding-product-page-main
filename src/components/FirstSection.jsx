import { useState } from "react";

export function FirstSection({setIsModalOpen}) {
 const [bookmark, setBookmark] = useState("Bookmark");

  return (
    <section className="relative mb-8 rounded-lg bg-white px-10 pb-10 pt-14">
      <img
        className="absolute -top-6 left-1/2 -translate-x-1/2"
        src="./images/logo-mastercraft.svg"
        alt=""
      />
      <h1 className="mb-2 text-center text-2xl font-bold text-black">
        Mastercraft Bamboo Monitor Riser
      </h1>
      <p className="mb-8 text-center text-[#7a7a7a]">
        A beautiful & handcrafted monitor stand to reduce neck and eye strain.
      </p>
      <div className="flex items-center justify-between">
        <button onClick={() => setIsModalOpen((prev) => !prev)} className="rounded-full bg-[#3cb4ac] px-8 py-4 font-semibold text-white hover:bg-[#147b74]">
          Back this project
        </button>

        <button
          onClick={() => setBookmark("Bookmarked")}
          className="rounded-full bg-gray-200 hover:opacity-70"
        >
          <img
            className="inline"
            src={bookmark === 'Bookmark' ? "./images/icon-bookmark.svg" : "./images/icon-bookmarked.svg"}
            alt=""
          />
          <span className={`py-4 pl-3 pr-6 font-semibold ${bookmark === 'Bookmark' ?  'text-[#7a7a7a]' :' text-[#3cb4ac]'} `}>
            {bookmark}
          </span>
        </button>
      </div>
    </section>
  );
}
