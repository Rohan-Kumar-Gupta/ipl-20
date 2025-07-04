"use client";
import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

type Tab = {
  name: string;
  path?: string;
  dropdown?: { name: string; path: string }[];
};

const tabs: Tab[] = [
  { name: "Matches", path: "/" },
  { name: "Points Table", path: "/points" },
  {
    name: "Videos",
    dropdown: [
      { name: "Latest", path: "/videos/latest" },
      { name: "IPL Exclusive", path: "/videos/exclusive" },
      { name: "Magic Moments", path: "/videos/magic" },
      { name: "Highlights", path: "/videos/highlights" },
      { name: "Interviews", path: "/videos/interviews" },
      { name: "Press Conferences", path: "/videos/press" },
      { name: "All", path: "/videos/all" },
    ],
  },
  { name: "Teams", path: "/teams" },
  {
    name: "News",
    dropdown: [
      { name: "Latest News", path: "/news/latest" },
      { name: "Announcements", path: "/news/announcements" },
      { name: "Match Reports", path: "/news/reports" },
      { name: "Player Updates", path: "/news/players" },
    ],
  },
  { name: "Fantasy", path: "/fantasy" },
  {
    name: "Stats",
    dropdown: [
      { name: "Batting", path: "/stats/batting" },
      { name: "Bowling", path: "/stats/bowling" },
      { name: "Teams", path: "/stats/teams" },
      { name: "Records", path: "/stats/records" },
    ],
  },
  {
    name: "More",
    dropdown: [
      { name: "Photos", path: "/more/photos" },
      { name: "Venues", path: "/more/venues" },
      { name: "About", path: "/more/about" },
      { name: "Sponsors", path: "/more/sponsors" },
    ],
  },
];

export default function Navbar() {
  const [openTab, setOpenTab] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  return (
    <nav className="bg-blue-900 text-white relative z-50">
      <div className="flex justify-between items-center px-6 py-4 md:hidden">
        <h1 className="text-lg font-bold">IPL Dashboard</h1>
        <button
          className="text-white text-2xl"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? "✖" : "☰"}
        </button>
      </div>

      <ul
        className={`${
          mobileOpen ? "block" : "hidden"
        } md:flex md:space-x-6 md:justify-center px-6 py-4 text-sm font-medium uppercase tracking-wide`}
      >
        {tabs.map((tab) => {
          const isOpen = openTab === tab.name;
          const hasDropdown = Boolean(tab.dropdown);

          return (
            <li
              key={tab.name}
              className="relative group"
              onMouseEnter={() => !mobileOpen && hasDropdown && setOpenTab(tab.name)}
              onMouseLeave={() => !mobileOpen && hasDropdown && setOpenTab(null)}
            >
              <div
                className="flex flex-col items-start md:items-center cursor-pointer"
                onClick={() => {
                  if (mobileOpen && hasDropdown) {
                    setOpenTab((prev) => (prev === tab.name ? null : tab.name));
                  } else {
                    setMobileOpen(false);
                  }
                }}
              >
                <Link
                  href={tab.path || "#"}
                  className={`relative flex items-center gap-1 py-2 ${
                    pathname === tab.path ? "text-yellow-400" : ""
                  }`}
                >
                  {tab.name}
                  {hasDropdown && (
                    <span className="text-xs">
                      {isOpen ? "▲" : "▼"}
                    </span>
                  )}
                  <span className="absolute left-0 -bottom-1 w-full h-0.5 bg-white scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300" />
                </Link>
              </div>

              {hasDropdown && isOpen && (
                <div
                  className={`${
                    mobileOpen ? "block" : "absolute top-full mt-2"
                  } bg-white text-black w-full md:w-64 rounded shadow-lg py-2 z-50`}
                >
                  {tab.dropdown?.map((item) => (
                    <Link
                      key={item.name}
                      href={item.path}
                      className="block px-4 py-2 hover:bg-red-300 transition duration-200 font-medium"
                      onClick={() => setMobileOpen(false)}
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              )}
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
