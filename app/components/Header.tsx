"use client";

export default function Header() {
  return (
    <div className="p-3 bg-header-default text-white fixed top-0 left-0 right-0">
      <div id="header" className="flex justify-around">
        <div className="font-bold">
          {" "}
          <h1 className="text-2xl">Izohli lugʻat</h1>
          <h5 className="text-xs text-header-text">1000 ta soʻz topildi</h5>
        </div>
        <div></div>
        <div>
          {" "}
          <form onSubmit={(e) => e.preventDefault()} method="GET">
            <div className="relative text-white">
              <span className="absolute inset-y-0 left-0 flex items-center pl-2">
                <button
                  type="submit"
                  className="p-1 focus:outline-none focus:shadow-outline"
                >
                  <svg
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    viewBox="0 0 24 24"
                    className="w-4 h-4"
                  >
                    <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                  </svg>
                </button>
              </span>
              <input
                type="search"
                name="q"
                className="py-1 text-sm text-white rounded-md pl-10 bg-header-default border-2 border-line focus:outline-none"
                placeholder="qidiruv..."
              />
            </div>
          </form>{" "}
        </div>
      </div>
      <div className="pt-3">
        <hr className="border-line border-1" />
      </div>
      <div className="flex flex-row pt-1 text-header-text">
        <div className="">
          <button className="px-2 rounded hover:bg-hover hover:text-white">
            Hammasi
          </button>
        </div>
        <div className="">
          <button className="px-2 rounded hover:bg-hover hover:text-white">
            Lugat
          </button>
        </div>
        <div className="">
          <button className="px-2 rounded hover:bg-hover hover:text-white">
            Tezis
          </button>
        </div>
        <div className="">
          <button className="px-2 rounded hover:bg-hover hover:text-white">
            Wikipedia
          </button>
        </div>
      </div>
    </div>
  );
}
