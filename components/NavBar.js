"use client";
import "../src/app/globals.css";

export default function NavBar() {
  const search = () => {
    console.log("sss");
  };
  return (
    <nav className="flex items-center justify-center bg-slate-800 text-gray-200 p-10">
      <div class="w-full mx-auto">
        <div class="relative flex items-center w-full h-12 rounded-lg focus-within:shadow-lg bg-white overflow-hidden">
          <div class="grid place-items-center h-full w-12 text-gray-300">
            <button className=" font-bold py-2 px-4 rounded " onClick={search}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </button>
          </div>

          <input
            class="peer h-full w-full outline-none text-sm text-gray-700 pr-2"
            type="text"
            id="search"
            placeholder="Search in quran"
          />
        </div>
      </div>
    </nav>
  );
}
